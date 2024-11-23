import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Description, Field, Input, Label } from '@headlessui/react';

import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { useAppSelector, usePropertyDefManager } from '../hooks';
import { selectBaseAccountId, selectBaseGroupId } from '../redux';

export const CreateBaseCollectionForm: FC = () => {
  const navigate = useNavigate();
  const manager = usePropertyDefManager();
  const baseGroupId = useAppSelector(selectBaseGroupId) ?? '';
  const baseAccountId = useAppSelector(selectBaseAccountId) ?? '';
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const newCollection = await manager.createPropertyDefCollection({
        accountId: baseAccountId,
        groupId: baseGroupId,
        data: {
          collectionId: btoa(formData.name),
          title: formData.name,
          description: formData.description
        }
      });

      await manager.updateCollectionPermissions({
        accountId: baseAccountId,
        groupId: baseGroupId,
        collectionId: newCollection.id,
        data: {
          read: {
            users: ['*'],
            services: ['*']
          }
        }
      });

      setSuccess(true);
    } catch (error) {
      console.error(`Error creating new base property definition collection`, error);
      setError('Failed to create new base property definition.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-4 mx-auto">
        {error && <ErrorMessage />}
        {success && (
          <SuccessMessage
            message="Base Property Definition Collection created successfully!"
            dismissAction={() => {
              setError(null);
              setSuccess(false);
            }}
            nav={{
              link: '/basecollections',
              text: 'View Collections'
            }}
          />
        )}
        <Field>
          <div className="w-full">
            <Label className="pt-3 text-left text-sm/6 font-small">Name</Label>
            <Input
              id="id"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`block w-full border border-solid border-slate-300 py-1.5 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm`}
            />
            <Description className={'text-sm/6'}>
              Only alphanumeric characters allowed - Limit 64 characters
            </Description>
          </div>
          <div className="w-full mt-6">
            <Label className="text-sm/6 font-small">Description (optional)</Label>
            <Input
              type="text"
              id="description"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
              className="block w-full border border-solid border-slate-300 py-1.5 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm"
            />
            <Description className="text-sm/6">Only alphanumeric characters allowed - Limit 64 characters</Description>
          </div>
        </Field>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <Button
          type="button"
          disabled={loading}
          onClick={handleFormSubmit}
          className="inline-flex w-full justify-center rounded-md bg-black hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        >
          {loading ? 'Loading...' : 'Create Base Property Collection'}
        </Button>
        <Button
          type="button"
          disabled={loading}
          onClick={() => navigate('/basecollections')}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:bg-blue-200 disabled:cursor-not-allowed"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
