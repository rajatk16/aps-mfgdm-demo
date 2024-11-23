import { Button, Description, Field, Input, Label } from '@headlessui/react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FC, useState } from 'react';

import { graphql } from '../gql';
import { Collection } from '../types';
import { selectThreeLOAuth } from '../redux';
import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { useAppSelector, useAuth } from '../hooks';

interface UpdateCollectionFormProps {
  collection: Collection;
}

const UPDATE_PROPERTY_DEFINITION_COLLECTION = graphql(`
  mutation UpdatePropertyDefinitionCollection($input: UpdatePropertyDefinitionCollectionInput!) {
    updatePropertyDefinitionCollection(input: $input) {
      propertyDefinitionCollection {
        id
        name
        description
      }
    }
  }
`);

const decodeAndExtract = (input: string): string => {
  return atob(input).split('~').pop() || '';
};

export const UpdateCollectionForm: FC<UpdateCollectionFormProps> = ({ collection }) => {
  const isAuthorized = useAuth();
  const navigate = useNavigate();
  const tokenState = useAppSelector(selectThreeLOAuth);
  const [updateCollection, { data, loading, error, reset }] = useMutation(UPDATE_PROPERTY_DEFINITION_COLLECTION);

  const [formData, setFormData] = useState({
    description: collection.description ?? ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    if (isAuthorized) {
      reset();
      await updateCollection({
        variables: {
          input: {
            description: formData.description,
            propertyDefinitionCollectionId: collection.id
          }
        },
        context: {
          headers: {
            Authorization: `Bearer ${tokenState.access_token}`
          }
        }
      });
    }
  };

  return (
    <>
      <div className="p-4 mx-auto">
        {error && <ErrorMessage error={error} />}
        {data && (
          <SuccessMessage
            message="Collection updated successfully"
            dismissAction={reset}
            nav={{
              link: `/collections/${decodeAndExtract(collection.id)}`,
              text: 'View Collection'
            }}
          />
        )}
        <Field>
          <div className="w-full">
            <Label className="pt-3 text-left text-sm/6 font-small">Name</Label>
            <Input
              disabled
              id="name"
              name="name"
              type="text"
              value={collection.name}
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
          onClick={() => navigate(`/collections/${decodeAndExtract(collection.id)}`)}
          disabled={loading}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
