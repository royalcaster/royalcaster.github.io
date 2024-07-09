import React, { useState } from 'react';

// Sample initial data
const initialData = [
    { name: 'Mod A', version: '1.0', description: 'Enhances mining' },
    { name: 'Mod B', version: '2.1', description: 'Adds new biomes' }
];

const Table = () => {
    const [tableData, setTableData] = useState(initialData);

    const sortTable = (columnIndex) => {
        const sortedData = [...tableData].sort((a, b) => {
            const columns = ['name', 'version', 'description'];
            const key = columns[columnIndex];
            if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
            if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
            return 0;
        });
        setTableData(sortedData);
    };

    return (
        <table id="modTable">
            <thead>
                <tr>
                    <th onClick={() => sortTable(0)}>Mod Name</th>
                    <th onClick={() => sortTable(1)}>Version</th>
                    <th onClick={() => sortTable(2)}>Description</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((mod, index) => (
                    <tr key={index}>
                        <td>{mod.name}</td>
                        <td>{mod.version}</td>
                        <td>{mod.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
