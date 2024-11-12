import { useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { Button, Description, Field, Input, Label } from '@headlessui/react';

import { useAppDispatch } from '../hooks';
import {
  clearBaseCollections,
  clearCollections,
  clearCredentials,
  clearThreeLOToken,
  clearTwoLOToken,
  clearUserProfile,
  setCredentials
} from '../redux';

export const Credentials: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    clientId: '',
    clientSecret: ''
  });

  useEffect(() => {
    dispatch(clearCredentials());
    dispatch(clearThreeLOToken());
    dispatch(clearUserProfile());
    dispatch(clearCollections());
    dispatch(clearBaseCollections());
    dispatch(clearTwoLOToken());
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const submitCredentials = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.clientId && formData.clientSecret) {
      dispatch(
        setCredentials({
          clientId: formData.clientId,
          clientSecret: formData.clientSecret,
          hasValidCredentials: true
        })
      );

      navigate('/');
    }
  };

  return (
    <div className="container mx-auto h-full">
      <div className="text-center relative top-1/5 pt-3">
        <div className="pt-3 w-50 mx-auto">
          <div className="p-6">
            <p className="text-xl">
              Welcome to the Property Definition Manager
              <br /> demo application
            </p>
          </div>
          <p className="pt-6">
            To ensure seamless integration, make sure the <b>Callback URL</b> in your{' '}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://aps.autodesk.com/myapps/"
            >
              app settings
            </a>{' '}
            in the <b>Autodesk Platform Services</b> developer portal is as follows:
          </p>
          <p className="pt-6">
            <a
              className="pt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://mfgdatamodel-demo-stg.autodesk.io/api/auth/callback"
            >
              https://mfgdatamodel-demo-stg.autodesk.io/api/auth/callback
            </a>
          </p>
        </div>
      </div>
      <div className="mt-6 h-full w-4/5 ml-[150px]">
        <form className="mx-auto" onSubmit={submitCredentials}>
          <Field>
            <div className="w-full">
              <Label className="pt-3 pb-3 text-sm/6 font-small">Client ID</Label>
              <Input
                type="text"
                id="clientId"
                name="clientId"
                value={formData.clientId}
                onChange={handleInputChange}
                className="mt-3 block w-full border border-solid border-slate-300 py-1.5 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm"
              />
              <Description className="text-sm/6">Provided when creating your app in the APS dev portal.</Description>
            </div>
            <div className="w-full mt-6">
              <Label className="pt-3 pb-3 text-sm/6 font-small">Client Secret</Label>
              <Input
                type="password"
                id="clientSecret"
                name="clientSecret"
                onChange={handleInputChange}
                value={formData.clientSecret}
                className="mt-3 block w-full border border-solid border-slate-300 py-1.5 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm"
              />
              <Description className="text-sm/6">Provided when creating your app in the APS dev portal.</Description>
            </div>
            <div className="pt-6 w-full text-center relative top-1/5">
              <Button type="submit" className="bg-blue-500 w-full text-white p-3 rounded-lg hover:bg-blue-600">
                Next
              </Button>
            </div>
          </Field>
        </form>
      </div>
    </div>
  );
};
