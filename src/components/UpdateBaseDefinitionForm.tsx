import { Link } from 'react-router-dom';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Description, Field, Input, Label, Select, Switch } from '@headlessui/react';
import { PropertyDefinition, PropertyDMBehavior, PropertyCategory, MetaDataId } from '@adsk/pim-propertydef-manager';

import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { usePropertyDefManager } from '../hooks';

interface UpdateBaseDefinitionFormProps {
  definition: PropertyDefinition;
}

export const UpdateBaseDefinitionForm: FC<UpdateBaseDefinitionFormProps> = ({ definition }) => {
  const manager = usePropertyDefManager();
  const [formData, setFormData] = useState({
    description: definition.description,
    isHidden: definition.isHidden,
    isArchived: definition.isArchived,
    propertyBehavior: definition.propBehavior,
    propertyCategory: definition.propCategory ?? [],
    propertyDMBehavior: definition.propDMBehavior
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateDefinition = async () => {
    setLoading(true);
    setError(null);
    try {
      await manager.updatePropertyDefinitions({
        accountId: definition.accountId!,
        groupId: definition.groupId!,
        collectionId: definition.collectionId!,
        data: [
          {
            id: definition.id,
            description: formData.description,
            metadata: [
              {
                id: MetaDataId.IS_HIDDEN,
                value: formData.isHidden!
              },
              {
                id: MetaDataId.IS_ARCHIVED,
                value: formData.isArchived!
              },
              {
                id: MetaDataId.PROP_BEHAVIOR,
                value: formData.propertyBehavior!
              },
              {
                id: MetaDataId.PROP_CATEGORY,
                value: formData.propertyCategory
              },
              {
                id: MetaDataId.PROP_DM_BEHAVIOR,
                value: formData.propertyDMBehavior!
              }
            ]
          }
        ]
      });
      setSuccess(true);
    } catch (error) {
      console.error(`Error fetching definitions`, error);
      setSuccess(false);
      setError('Failed to update base property definition.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
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

  const togglePropertyCategory = (category: PropertyCategory) => {
    setFormData((prevFormData) => {
      const isSelected = prevFormData.propertyCategory?.includes(category);
      const updatedCategories = isSelected
        ? prevFormData.propertyCategory.filter((cat) => cat !== category)
        : [...prevFormData.propertyCategory, category];
      return {
        ...prevFormData,
        propertyCategory: updatedCategories
      };
    });
  };

  return (
    <>
      <div className="p-4 mx-auto">
        {error && <ErrorMessage />}
        {success && (
          <SuccessMessage
            nav={{
              link: `/basecollections/${definition.collectionId}`,
              text: 'View Definition'
            }}
            dismissAction={() => {
              setError(null);
              setSuccess(false);
            }}
            message="Base Property Definition Updated Successfully!"
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
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
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
              <Input
                disabled
                id="type"
                name="type"
                type="text"
                value={definition.dataTypeId}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
              />
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="behavior" className="block text-sm font-medium leading-6 text-gray-900">
                Behavior
              </Label>
              <Select
                id="behavior"
                name="propertyBehavior"
                value={formData.propertyBehavior} // Use value instead of defaultValue
                onChange={handleSelectChange} // Add onChange handler
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
            <Label className="mr-4 text-gray-700">Is Hidden?</Label>
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
              checked={!!definition.readOnly}
              className={`${definition.readOnly ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full disabled:cursor-not-allowed`}
            >
              <span
                className={`${
                  definition.readOnly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="shouldCopy" className="mr-4 text-gray-700">
              Should Copy?
            </Label>
            <Switch
              checked={definition.propDMBehavior === PropertyDMBehavior.SHOULD_COPY}
              className={`${definition.propDMBehavior === PropertyDMBehavior.SHOULD_COPY ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  definition.propDMBehavior === PropertyDMBehavior.SHOULD_COPY ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="mt-5">
            <Label className="mr-4 text-gray-700">Property Category</Label>
            {[PropertyCategory.COMPONENT, PropertyCategory.DRAWING].map((category) => (
              <div key={category} className="flex items-center justify-between">
                <span className="ml-2 my-2 text-gray-900">{category}</span>
                <Switch
                  checked={formData.propertyCategory.includes(category)}
                  onChange={() => togglePropertyCategory(category)}
                  className={`${formData.propertyCategory.includes(category) ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      formData.propertyCategory.includes(category) ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
              </div>
            ))}
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
          to={`/basecollections/${definition.collectionId}`}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};
