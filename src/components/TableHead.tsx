import { FC } from 'react';

interface TableHeadProps {
  tableHeadItems: string[];
}

export const TableHead: FC<TableHeadProps> = ({ tableHeadItems }) => {
  return (
    <thead>
      <tr>
        {tableHeadItems.map((tableHeadItem, index) => (
          <th key={index} className="px-3 text-left text-sm font-semibold text-gray-900">
            {tableHeadItem}
          </th>
        ))}
      </tr>
    </thead>
  );
};
