import { FC } from 'react';
import { Button } from '@headlessui/react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { graphql } from '../gql';
import { TableHead } from './TableHead';
import { TableData } from './TableData';
import { useAppSelector } from '../hooks';
import { UpdateIcon } from './UpdateIcon';
import { ArchiveIcon } from './ArchiveIcon';
import { selectThreeLOAuth } from '../redux';
import { EmptyMessage } from './EmptyMessage';
import { PropertyDefinition } from '../gql/graphql';

interface DefinitionsListProps {
  definitions: (PropertyDefinition | null)[];
}

const ARCHIVE_PROPERTY_DEFINITION = graphql(`
  mutation ArchivePropertyDefinition($input: ArchivePropertyDefinitionInput!) {
    archivePropertyDefinition(input: $input) {
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

export const DefinitionsList: FC<DefinitionsListProps> = ({ definitions }) => {
  const navigate = useNavigate();
  const { access_token } = useAppSelector(selectThreeLOAuth);
  const [archivePropertyDefinition, { loading, error }] = useMutation(ARCHIVE_PROPERTY_DEFINITION);

  const handleArchivePropDef = async (definitionId: string) => {
    await archivePropertyDefinition({
      variables: {
        input: {
          propertyDefinitionId: definitionId
        }
      },
      context: {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    });

    if (error) {
      console.error('Failed to archive property definition', error);
    }
  };

  const handleNav = (definition: PropertyDefinition) => {
    const definitionParts = atob(definition.id).split('~');

    navigate(`/collections/${definitionParts[3]}/definitions/${definitionParts[4]}/update`, {
      state: {
        definition
      }
    });
  };
  return (
    <div className="h-full mx-auto p-3 mt-8">
      {definitions.length === 0 ? (
        <EmptyMessage
          imageAlt="Empty Collection"
          emptyMessage="There are no property definitions in this collection."
        />
      ) : (
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHead
                tableHeadItems={[
                  'Name',
                  'Description',
                  'Specification',
                  'Units',
                  'Behavior Type',
                  'Archived',
                  'Hidden',
                  'Read-Only',
                  'Should Copy',
                  'Actions'
                ]}
              />
              <tbody className="divide-y divide-gray-200">
                {definitions
                  .filter((definition) => definition !== null)
                  .map((definition) => (
                    <tr key={definition.id} className="even:bg-gray-50">
                      <TableData tableData={definition.name} />
                      <TableData tableData={definition.description === null ? '' : definition.description} />
                      <TableData tableData={definition.specification === null ? '' : definition.specification} />
                      <TableData tableData={definition.units?.name} />
                      <TableData tableData={definition.propertyBehavior} />
                      <TableData tableData={definition.isArchived ? 'Yes' : 'No'} />
                      <TableData tableData={definition.isHidden ? 'Yes' : 'No'} />
                      <TableData tableData={definition.isReadOnly ? 'Yes' : 'No'} />
                      <TableData tableData={definition.shouldCopy ? 'Yes' : 'No'} />
                      <TableData
                        actionItem={
                          <>
                            <Button disabled={loading} onClick={() => handleNav(definition)}>
                              <UpdateIcon className="size-6 transition-transform duration-300 hover:scale-125" />
                            </Button>
                            <Button disabled={loading} onClick={() => handleArchivePropDef(definition.id)}>
                              {loading ? (
                                'Loading...'
                              ) : (
                                <ArchiveIcon className="size-6 cursor-pointer transition-transform duration-300 hover:scale-125" />
                              )}
                            </Button>
                          </>
                        }
                      />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
