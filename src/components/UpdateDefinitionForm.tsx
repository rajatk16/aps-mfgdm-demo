import { useMutation } from '@apollo/client';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Description, Field, Input, Label, Select, Switch } from '@headlessui/react';

import { PropertyDef } from '../types';
import { UPDATE_PROPERTY_DEFINITION } from '../graphql';
import { useAppSelector } from '../hooks';
import { selectThreeLOAuth } from '../redux';
import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { Link } from 'react-router-dom';

interface UpdateDefinitionFormProps {
  definition: PropertyDef;
}

export const UpdateDefinitionForm: FC<UpdateDefinitionFormProps> = ({ definition }) => {
  const { access_token } = useAppSelector(selectThreeLOAuth);
  const [updatePropertyDefinition, { data, error, loading, reset }] = useMutation(UPDATE_PROPERTY_DEFINITION);

  const [formData, setFormData] = useState({
    description: definition.description,
    isHidden: !!definition.isHidden
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

  const handleUpdateDefinition = async () => {
    reset();
    await updatePropertyDefinition({
      variables: {
        input: {
          description: formData.description,
          isHidden: formData.isHidden,
          propertyDefinitionId: definition.id
        }
      },
      context: {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    });
  };

  return (
    <>
      <div className="p-4 mx-auto">
        {error && <ErrorMessage error={error} />}
        {data && (
          <SuccessMessage
            nav={{
              link: `/collections/${atob(definition.id).split('~')[3]}`,
              text: 'View Definition'
            }}
            dismissAction={reset}
            message="Property Definition Updated Successfully!"
          />
        )}
        <Field>
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </Label>
              <Input
                disabled
                id="name"
                name="name"
                type="text"
                value={definition.name}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
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
                disabled
                id="type"
                name="type"
                defaultChecked
                defaultValue="STRING"
                className="block py-2 pl-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="MASS">Mass</option>
                <option value="AREA">Area</option>
                <option value="FLOAT">Float</option>
                <option value="VOLUME">Volume</option>
                <option value="STRING">String</option>
                <option value="DENSITY">Density</option>
                <option value="INTEGER">Integer</option>
                <option value="BOOLEAN">Boolean</option>
                <option value="DISTANCE">Distance</option>
              </Select>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="behavior" className="block text-sm font-medium leading-6 text-gray-900">
                Behavior
              </Label>
              <Select
                disabled
                id="behavior"
                name="behavior"
                defaultChecked
                defaultValue={definition.propertyBehavior}
                className="block w-full py-2 pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="DYNAMIC">Dynamic</option>
                <option value="STANDARD">Standard</option>
                <option value="TIMELESS">Timeless</option>
                <option value="DYNAMIC_AT_VERSION">Dynamic at version</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="isHidden" className="mr-4 text-gray-700">
              Is Hidden?
            </Label>
            <Switch
              checked={!!formData.isHidden}
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
              disabled
              checked={definition.isReadOnly}
              className={`${definition.isReadOnly ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full disabled:cursor-not-allowed`}
            >
              <span
                className={`${
                  definition.isReadOnly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="shouldCopy" className="mr-4 text-gray-700">
              Should Copy?
            </Label>
            <Switch
              disabled
              checked={definition.shouldCopy}
              className={`${definition.shouldCopy ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  definition.shouldCopy ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </Field>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <Button
          type="button"
          onClick={handleUpdateDefinition}
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
        >
          {loading ? 'Loading...' : 'Update Definition'}
        </Button>
        <Link
          reloadDocument
          to={`/collections/${atob(definition.id).split('~')[3]}`}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};
