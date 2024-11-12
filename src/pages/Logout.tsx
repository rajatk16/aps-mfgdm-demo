import { FC, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export const Logout: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/credentials');
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col gap-y-5 justify-center items-center">
      <FadeLoader />
      <p>Signing out...</p>
    </div>
  );
};
