import { ChangeEvent, FC, useState } from 'react';
import { Button, Description, Field, Input, Label } from '@headlessui/react';

import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { PropertyDefCollectionWithDefinitions } from '../redux';
import { useNavigate } from 'react-router-dom';
import { usePropertyDefManager } from '../hooks';

interface UpdateBaseCollectionFormProps {
  collection: PropertyDefCollectionWithDefinitions;
}

export const UpdateBaseCollectionForm: FC<UpdateBaseCollectionFormProps> = ({ collection }) => {
  const navigate = useNavigate();
  const manager = usePropertyDefManager();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: collection.title,
    description: collection.description
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await manager.updatePropertyDefCollection({
        accountId: import.meta.env.ADSK_BASE_ACCOUNT_ID,
        groupId: import.meta.env.ADSK_BASE_GROUP_ID,
        collectionId: collection.id,
        data: {
          description: formData.description,
          title: formData.title
        }
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(`Error updating collection details`, error);
      setIsSuccess(false);
      setError(`Failed to update collection details`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-4 mx-auto">
        {error && <ErrorMessage />}
        {isSuccess && (
          <SuccessMessage
            message="Collection updated successfully!"
            dismissAction={() => {
              setError(null);
              setIsSuccess(false);
            }}
            nav={{
              link: `/basecollections/${collection.id}`,
              text: `View Collection`
            }}
          />
        )}
        <Field>
          <div className="w-full">
            <Label className="pt-3 text-left text-sm/6 font-small">Title</Label>
            <Input
              id="Title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="block w-full border border-solid border-slate-300 py-1.5 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            />
            <Description className="text-sm/6">Only alphanumeric characters allowed - Limit 64 characters</Description>
          </div>
          <div className="w-full mt-6">
            <Label className="text-sm/6 font-small">Description</Label>
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
          onClick={handleFormSubmit}
          disabled={loading}
          className="inline-flex w-full justify-center rounded-md bg-black hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        >
          {loading ? 'Loading...' : 'Update Collection'}
        </Button>
        <Button
          type="button"
          onClick={() => navigate(`/basecollections/${collection.id}`)}
          disabled={loading}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
