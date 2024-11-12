import { FC, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ErrorMessage } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectClientId, selectClientSecret, useGetToken } from '../redux';

export const AuthCallback: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const clientId = useAppSelector(selectClientId);
  const [getToken, { isLoading, error }] = useGetToken();
  const clientSecret = useAppSelector(selectClientSecret);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      getToken({
        clientId: clientId!,
        clientSecret: clientSecret!,
        code,
        redirectUri: import.meta.env.VITE_APS_CALLBACK_URL
      }).then(() => {
        navigate('/');
      });
    }
  }, [clientId, clientSecret, dispatch, getToken, navigate, searchParams]);

  if (isLoading)
    return (
      <div className="h-screen flex flex-col gap-y-5 justify-center items-center">
        <FadeLoader />
        <p>Authenticating...</p>
      </div>
    );
  if (error)
    return (
      <div className="h-4/5 flex flex-col gap-y-5 justify-center items-center">
        <ErrorMessage />
      </div>
    );

  return <div>Authenticated successfully!</div>;
};
