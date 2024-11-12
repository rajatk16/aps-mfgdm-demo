import { useMemo } from 'react';
import { selectClientId, selectClientSecret, useGetTwoLOToken } from '../redux';
import { PropertyDefManager } from '@adsk/pim-propertydef-manager';
import { useAppSelector } from './useAppSelector';

export const usePropertyDefManager = () => {
  const [getTwoLOToken] = useGetTwoLOToken();
  const clientId = useAppSelector(selectClientId);
  const clientSecret = useAppSelector(selectClientSecret);

  const manager = useMemo(() => {
    return new PropertyDefManager({
      baseURL: `${import.meta.env.VITE_PARAMETER_SERVICE_URL}`,
      getToken: async () => {
        try {
          const response = await getTwoLOToken({
            clientId: clientId!,
            clientSecret: clientSecret!
          }).unwrap();

          if (!response.access_token) {
            throw new Error('Failed to retrieve access token');
          }

          return response.access_token;
        } catch (error) {
          console.error('Error fetching access token:', error);
          throw error;
        }
      },
      logErrorsOnly: true
    });
  }, [clientId, clientSecret, getTwoLOToken]);

  return manager;
};
