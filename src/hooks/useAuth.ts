import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import {
  selectClientId,
  selectThreeLOAuth,
  selectClientSecret,
  selectHasValidCredentials,
  useGetRefreshToken
} from '../redux';

export const useAuth = (): boolean => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clientId = useAppSelector(selectClientId);
  const tokenState = useAppSelector(selectThreeLOAuth);
  const clientSecret = useAppSelector(selectClientSecret);
  const hasValidCredentials = useAppSelector(selectHasValidCredentials);

  const [getRefreshToken] = useGetRefreshToken();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const redirectToAuth = () => {
      const redirect_uri = encodeURIComponent(import.meta.env.VITE_APS_CALLBACK_URL);
      const scopes = encodeURIComponent('data:read data:write data:create data:search');
      const authURL = `${import.meta.env.VITE_BASE_URL}/authentication/v2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes}`;
      window.location.href = authURL;
    };
    const checkAndRefreshToken = async () => {
      const { access_token, expires_in, refresh_token } = tokenState;
      const currentTime = Date.now();

      if (!hasValidCredentials) {
        setIsAuthorized(false);
        navigate('/credentials');
        return;
      }

      if (!access_token) {
        setIsAuthorized(false);
        redirectToAuth();
        return;
      }

      if (refresh_token && expires_in && currentTime > expires_in) {
        try {
          await getRefreshToken({
            clientId: clientId!,
            clientSecret: clientSecret!,
            refresh_token
          });
        } catch (error) {
          console.error('Token refresh failed: ', error);
          setIsAuthorized(false);
          redirectToAuth();
          return;
        }
      }
      setIsAuthorized(true);
    };

    checkAndRefreshToken();
  }, [clientId, clientSecret, dispatch, getRefreshToken, hasValidCredentials, navigate, tokenState]);

  return isAuthorized;
};
