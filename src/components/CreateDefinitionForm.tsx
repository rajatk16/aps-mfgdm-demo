import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Description, Field, Input, Label, Select, Switch } from '@headlessui/react';

import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { useAppSelector, useAuth } from '../hooks';
import { selectClientId, selectThreeLOAuth } from '../redux';
import { graphql } from '../gql';
import { PropertyBehaviorEnum } from '../gql/graphql';

interface CreateDefinitionFormProps {
  collectionId: string;
}

const CREATE_PROPERTY_DEFINITION = graphql(`
  mutation CreatePropertyDefinition($input: CreatePropertyDefinitionInput!) {
    createPropertyDefinition(input: $input) {
      propertyDefinition {
        id
        name
        specification
        units {
          id
          name
        }
        isArchived
        isHidden
        shouldCopy
        isReadOnly
        description
        propertyBehavior
      }
    }
  }
`);

export const CreateDefinitionForm: FC<CreateDefinitionFormProps> = ({ collectionId }) => {
  const isAuthorized = useAuth();
  const tokenState = useAppSelector(selectThreeLOAuth);
  const clientId = useAppSelector(selectClientId);
  const [createPropertyDefinition, { data, loading, error, reset }] = useMutation(CREATE_PROPERTY_DEFINITION);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'STRING',
    behavior: PropertyBehaviorEnum.Dynamic,
    isHidden: false,
    isReadOnly: false,
    shouldCopy: false
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSwitchChange = (field: string, value: boolean) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (isAuthorized) {
      reset();
      await createPropertyDefinition({
        variables: {
          input: {
            description: formData.description,
            isHidden: formData.isHidden,
            isReadOnly: formData.isReadOnly,
            name: formData.name,
            propertyBehavior: formData.behavior,
            propertyDefinitionCollectionId: btoa(`propdefcol~${clientId}~${clientId}~${collectionId}`),
            shouldCopy: formData.shouldCopy,
            specification: formData.type
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
            nav={{
              link: `/collections/${collectionId}`,
              text: 'View Definitions'
            }}
            dismissAction={reset}
            message="Property Definition Created Successfully!"
          />
        )}
        <Field>
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <Description className="text-sm/6 text-black">
                Only alphanumeric characters allowed - Limit 64 characters
              </Description>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <Description className="text-sm/6 text-black">
                Only alphanumeric characters allowed - Limit 64 characters
              </Description>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </Label>
              <Select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleSelectChange}
                className="block py-2 pl-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="DISTANCE">Distance</option>
                <option value="MASS">Mass</option>
                <option value="VOLUME">Volume</option>
                <option value="AREA">Area</option>
                <option value="DENSITY">Density</option>
                <option value="STRING">String</option>
                <option value="INTEGER">Integer</option>
                <option value="BOOLEAN">Boolean</option>
                <option value="FLOAT">Float</option>
              </Select>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="behavior" className="block text-sm font-medium leading-6 text-gray-900">
                Behavior
              </Label>
              <Select
                id="behavior"
                name="behavior"
                value={formData.behavior}
                onChange={handleSelectChange}
                className="block w-full py-2 pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value={PropertyBehaviorEnum.Standard}>Standard</option>
                <option value={PropertyBehaviorEnum.DynamicAtVersion}>Dynamic at version</option>
                <option value={PropertyBehaviorEnum.Dynamic}>Dynamic</option>
                <option value={PropertyBehaviorEnum.Timeless}>Timeless</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="isHidden" className="mr-4 text-gray-700">
              Is Hidden?
            </Label>
            <Switch
              checked={formData.isHidden}
              onChange={(value) => handleSwitchChange('isHidden', value)}
              className={`${formData.isHidden ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formData.isHidden ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="isReadOnly" className="mr-4 text-gray-700">
              Is Read-Only?
            </Label>
            <Switch
              checked={formData.isReadOnly}
              onChange={(value) => handleSwitchChange('isReadOnly', value)}
              className={`${formData.isReadOnly ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formData.isReadOnly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="shouldCopy" className="mr-4 text-gray-700">
              Should Copy?
            </Label>
            <Switch
              checked={formData.shouldCopy}
              onChange={(value) => handleSwitchChange('shouldCopy', value)}
              className={`${formData.shouldCopy ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formData.shouldCopy ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </Field>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <Button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
        >
          {loading ? 'Loading ...' : 'Add Definition'}
        </Button>
        <Link
          reloadDocument
          to={`/collections/${collectionId}`}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};
