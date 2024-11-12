import { Link } from 'react-router-dom';
import { PropertyDefCollection } from '@adsk/pim-propertydef-manager';

import { NavIcon } from './NavIcon';
import { TableData } from './TableData';
import { TableHead } from './TableHead';
import { EmptyMessage } from './EmptyMessage';

interface BaseCollectionsListProps {
  collections: PropertyDefCollection[];
}

export const BaseCollectionsList: React.FC<BaseCollectionsListProps> = ({ collections }) => {
  return (
    <div className="h-full">
      {collections.length === 0 ? (
        <EmptyMessage
          imageAlt="No Base Collections"
          emptyMessage="Could not find any base collections. Please try again"
        />
      ) : (
        <div className="h-full mx-auto p-3 mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <TableHead tableHeadItems={['Name', 'Description', 'Actions']} />
                <tbody className="divide-y divide-gray-200">
                  {collections.map((collection) => (
                    <tr key={collection.id} className="even:bg-gray-50">
                      <TableData tableData={collection.title} />
                      <TableData tableData={collection.description} />
                      <TableData
                        actionItem={
                          <Link to={`/basecollections/${collection.id}`} className="block p-2">
                            <NavIcon className="size-6 transition-transform duration-300 hover:scale-125" />
                          </Link>
                        }
                      />
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
