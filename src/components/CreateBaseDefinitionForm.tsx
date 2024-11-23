import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FC, useState } from 'react';
import { PropertyBehavior, PropertyCategory, PropertyDMBehavior } from '@adsk/pim-propertydef-manager';
import { Button, Description, Field, Input, Label, Select, Switch } from '@headlessui/react';

import { ErrorMessage } from './ErrorMessage';
import { useAppSelector, usePropertyDefManager } from '../hooks';
import { SuccessMessage } from './SuccessMessage';
import { selectBaseAccountId, selectBaseGroupId } from '../redux';

interface CreateBaseDefinitionFormProps {
  collectionId: string;
}

export const CreateBaseDefinitionForm: FC<CreateBaseDefinitionFormProps> = ({ collectionId }) => {
  const manager = usePropertyDefManager();
  const baseAccountId = useAppSelector(selectBaseAccountId) ?? '';
  const baseGroupId = useAppSelector(selectBaseGroupId) ?? '';
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '', // Done
    description: '', // Done
    isHidden: false, // Done
    readOnly: false,
    shouldCopy: false,
    propCategory: [] as PropertyCategory[],
    propBehavior: PropertyBehavior.STANDARD, // Done
    dataTypeId: 'autodesk.spec:spec.string-2.0.0' // Done
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

  const togglePropertyCategory = (category: PropertyCategory) => {
    setFormData((prevFormData) => {
      const isSelected = prevFormData.propCategory.includes(category);
      const updatedCategories = isSelected
        ? prevFormData.propCategory.filter((cat) => cat !== category)
        : [...prevFormData.propCategory, category];
      return {
        ...prevFormData,
        propCategory: updatedCategories
      };
    });
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      await manager.createPropertyDefinition({
        accountId: baseAccountId,
        groupId: baseGroupId,
        collectionId: collectionId,
        data: {
          dataTypeId: formData.dataTypeId,
          description: formData.description,
          id: uuidv4().split('-').join(''),
          isHidden: formData.isHidden,
          name: formData.name,
          readOnly: formData.readOnly
        },
        propBehavior: formData.propBehavior,
        propDMBehavior: formData.shouldCopy ? PropertyDMBehavior.SHOULD_COPY : undefined,
        propCategory: formData.propCategory.length !== 0 ? formData.propCategory : undefined
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error creating new base property definition', error);
      setError('Failed to create base property definition.');
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
            nav={{
              link: `/basecollections/${collectionId}`,
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
              <Label htmlFor="dataTypeId" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </Label>
              <Select
                id="dataTypeId"
                name="dataTypeId"
                value={formData.dataTypeId}
                onChange={handleSelectChange}
                className="block w-full py-2 pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="autodesk.spec:spec.string-2.0.0">STRING</option>
                <option value="autodesk.spec:spec.int64-2.0.0">INTEGER</option>
                <option value="autodesk.spec:spec.bool-1.0.0">BOOLEAN</option>
                <option value="autodesk.spec.aec:number-2.0.0">FLOAT</option>
              </Select>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="propBehavior" className="block text-sm font-medium leading-6 text-gray-900">
                Behavior
              </Label>
              <Select
                id="propBehavior"
                name="propBehavior"
                value={formData.propBehavior}
                onChange={handleSelectChange}
                className="block w-full py-2 pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value={PropertyBehavior.STANDARD}>STANDARD</option>
                <option value={PropertyBehavior.DYNAMIC}>DYNAMIC</option>
                <option value={PropertyBehavior.DYNAMIC_AT_VERSION}>DYNAMIC AT VERSION</option>
                <option value={PropertyBehavior.TIMELESS}>TIMELESS</option>
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
              checked={formData.readOnly}
              onChange={(value) => handleSwitchChange('readOnly', value)}
              className={`${formData.readOnly ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formData.readOnly ? 'translate-x-6' : 'translate-x-1'
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
          <div className="mt-5">
            <Label className="mr-4 text-gray-700">Property Category</Label>
            {[PropertyCategory.COMPONENT, PropertyCategory.DRAWING].map((category) => (
              <div key={category} className="flex items-center justify-between">
                <span className="ml-2 my-2 text-gray-900">{category}</span>
                <Switch
                  checked={formData.propCategory.includes(category)}
                  onChange={() => togglePropertyCategory(category)}
                  className={`${formData.propCategory.includes(category) ? 'bg-black' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      formData.propCategory.includes(category) ? 'translate-x-6' : 'translate-x-1'
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
          onClick={handleSubmit}
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
        >
          {loading ? 'Loading...' : 'Create Base Definition'}
        </Button>
        <Link
          reloadDocument
          to={`/basecollections/${collectionId}`}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};
