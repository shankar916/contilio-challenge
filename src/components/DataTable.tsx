import React from 'react';

interface DataTableProps {
  attributes: { name: string; value: number; unit: string }[];
}

const DataTable: React.FC<DataTableProps> = ({ attributes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {attributes.map((attr, index) => (
          <tr key={index}>
            <td>{attr.name}</td>
            <td>
              {attr.value} {attr.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
