import { FC } from 'react';

interface TableDataProps {
  tableData?: string;
  actionItem?: JSX.Element;
}

export const TableData: FC<TableDataProps> = ({ tableData, actionItem }) => {
  return (
    <td className="whitespace-nowrap p-3 text-sm font-medium text-gray-900">
      {tableData ? tableData : actionItem ? actionItem : ''}
    </td>
  );
};
