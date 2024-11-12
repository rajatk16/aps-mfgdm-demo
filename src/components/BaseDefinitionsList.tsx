import { FC } from 'react';
import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { PropertyDefinition, PropertyDMBehavior } from '@adsk/pim-propertydef-manager';

import { TableData } from './TableData';
import { TableHead } from './TableHead';
import { UpdateIcon } from './UpdateIcon';
import { EmptyMessage } from './EmptyMessage';

interface BaseDefinitionsListProps {
  definitions: PropertyDefinition[];
  allowAccess: boolean;
}

const idToDataType: { [key: string]: string } = {
  'autodesk.spec:spec.string-2.0.0': 'STRING',
  'autodesk.spec:spec.int64-2.0.0': 'INTEGER',
  'autodesk.spec:spec.bool-1.0.0': 'BOOLEAN',
  'autodesk.spec.aec:number-2.0.0': 'FLOAT',
  'autodesk.spec.product:length-3.0.0': 'DISTANCE',
  'autodesk.spec.product:density-3.0.0': 'DENSITY',
  'autodesk.spec.product:mass-3.0.0': 'MASS',
  'autodesk.spec.product:volume-3.0.0': 'VOLUME',
  'autodesk.spec.product:area-3.0.0': 'AREA',
  '': 'EMPTY_STRING'
};

const getDataType = (dataTypeId: string): string | undefined => idToDataType[dataTypeId];

export const BaseDefinitionsList: FC<BaseDefinitionsListProps> = ({ definitions, allowAccess }) => {
  const navigate = useNavigate();
  const tableHeadItems = [
    'Name',
    'Description',
    'Specification',
    'Behavior Type',
    'Category',
    'Archived',
    'Hidden',
    'Read-Only?',
    'Should Copy?'
  ];

  if (allowAccess) {
    tableHeadItems.push('Actions');
  }

  const handleNav = (definition: PropertyDefinition) => {
    navigate(`/basecollections/${definition.collectionId}/definitions/${definition.id}/update`, {
      state: {
        definition
      }
    });
  };
  return (
    <div className="h-full">
      {definitions.length === 0 ? (
        <EmptyMessage
          imageAlt="Empty Base Collections."
          emptyMessage="There are no property definitions in this base collection."
        />
      ) : (
        <div className="h-full mx-auto p-3 mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <TableHead tableHeadItems={tableHeadItems} />
                <tbody className="divide-y divide-gray-200">
                  {definitions.map((definition) => (
                    <tr key={definition.id} className="even.bg-gray-50">
                      <TableData tableData={definition.name} />
                      <TableData tableData={definition.description} />
                      <TableData tableData={getDataType(definition.dataTypeId)} />
                      <TableData tableData={definition.propBehavior ?? ''} />
                      <TableData tableData={definition.propCategory?.join(', ')} />
                      <TableData tableData={definition.isArchived ? 'Yes' : 'No'} />
                      <TableData tableData={definition.isHidden ? 'Yes' : 'No'} />
                      <TableData tableData={definition.readOnly ? 'Yes' : 'No'} />
                      <TableData
                        tableData={definition.propDMBehavior === PropertyDMBehavior.SHOULD_COPY ? 'Yes' : 'No'}
                      />
                      {allowAccess && (
                        <TableData
                          actionItem={
                            <Button onClick={() => handleNav(definition)}>
                              <UpdateIcon className="size-6 transition-transform duration-300 hover:scale-125" />
                            </Button>
                          }
                        />
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
