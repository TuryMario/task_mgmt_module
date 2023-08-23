import React, { useState, useEffect } from "react";
import { useMemo } from "react";
// import Button from "react-bootstrap/Button";
import MaterialReactTable from "material-react-table";

export default function TaskListTable({ taskListData }) {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(taskListData);
    }, [taskListData]);

    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        // Clone the existing tableData array
        const updatedTableData = [...tableData];

        // Update the values for the row
        updatedTableData[row.index] = values;

        // Update the state with the updated data
        setTableData(updatedTableData);

        exitEditingMode(); // Required to exit editing mode
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Title",
                size: 200,
                Header: <span style={{ color: "blue" }}>Title</span>,
            },
            {
                accessorKey: "priority",
                header: "Task Priority",
                size: 200,
                Header: <span style={{ color: "blue" }}>Priority</span>,
            },
            {
                accessorKey: "description",
                header: "Description",
                size: 200,
                Header: <span style={{ color: "blue" }}>Description</span>,
            },
            {
                accessorKey: "comment",
                header: "Key Note/Comment",
                size: 200,
                Header: <span style={{ color: "blue" }}>Key Note/Comment</span>,
            },
            {
                accessorKey: "startDate",
                header: "Start Date",
                size: 200,
                Header: <span style={{ color: "blue" }}>Start Date</span>,
            },
            {
                accessorKey: "dueDate",
                header: "Due Date",
                size: 200,
                Header: <span style={{ color: "blue" }}>Due Date</span>,
            },
        ],
        []
    );

    return (
        <>
            {/*<div>*/}
            {/*    <Button style={{ marginBottom: "10px" }}>*/}
            {/*        {" "}*/}
            {/*        <span style={{ color: "blue", hreight: "10px" }}>+ </span>Add Member*/}
            {/*    </Button>*/}
            {/*</div>*/}
            <div
                style={{
                    height: "50px",
                }}
            >
                <MaterialReactTable
                    columns={columns}
                    data={tableData}
                    initialState={{ density: "compact" }}
                    enableDensityToggle={false}
                    renderTopToolbarCustomActions={() => <h3>Tasks Table</h3>}
                    editingMode="row"
                    enableEditing
                    onEditingRowSave={handleSaveRow}
                    muiTablePaginationProps={{
                        rowsPerPageOptions: [5, 10],
                    }}
                />
            </div>
        </>
    );
}



