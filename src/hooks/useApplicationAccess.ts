import { useEffect, useState } from 'react';
import { selectBaseClientId, selectClientId, selectProfile, useGetApplication, useGetCollaborators } from '../redux';
import { useAppSelector } from './useAppSelector';

export const useApplicationAccess = () => {
  const [getApplication] = useGetApplication();
  const profile = useAppSelector(selectProfile);
  const clientId = useAppSelector(selectClientId);
  const [getCollaborators] = useGetCollaborators();
  const baseClientId = useAppSelector(selectBaseClientId);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [accessLevel, setAccessLevel] = useState<'OWNER' | 'EDITOR' | 'VIEWER' | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      if (!clientId || !baseClientId || clientId !== baseClientId) {
        return;
      }

      try {
        const applicationResponse = await getApplication({ id: clientId }).unwrap();
        if (applicationResponse.owner.userId === profile?.sub) {
          setHasAccess(true);
          setAccessLevel('OWNER');
          return;
        }
      } catch (error) {
        console.error('Failed to load application details', error);
        return;
      }

      try {
        const collaboratorsResponse = await getCollaborators({ id: clientId }).unwrap();
        const collaborator = collaboratorsResponse.results.find((collaborator) => collaborator.userId === profile?.sub);

        if (collaborator && collaborator.accessLevel === 'EDITOR') {
          setHasAccess(true);
          setAccessLevel('EDITOR');
        } else if (collaborator && collaborator.accessLevel === 'VIEWER') {
          setHasAccess(true);
          setAccessLevel('VIEWER');
        }
      } catch (error) {
        console.error('Failed to load collaborators', error);
        return;
      }
    };

    checkAccess();
  }, [baseClientId, clientId, getApplication, getCollaborators, profile]);

  return { hasAccess, accessLevel };
};
