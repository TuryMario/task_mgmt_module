import React from "react";
import { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Button from "react-bootstrap/Button";

const data = [
  {
    id: 1,
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    id: 2,
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
];
export default function TaskListTable() {
  const [tableData, setTableData] = useState(() => data);
  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    tableData[row.index] = values;
    //send/receive api updates here
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "Task #",
        size: 150,
        Header: <span style={{ color: "blue" }}>Task #</span>,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Title",
        size: 200,
        Header: <span style={{ color: "blue" }}>Title</span>,
      },
      {
        accessorKey: "status", //normal accessorKey
        header: "Status",
        size: 200,
        Header: <span style={{ color: "blue" }}>Status</span>,
      },
    ],
    []
  );

  return (
    <>
      <div>
        <Button style={{ marginBottom: "10px" }}>
          {" "}
          <span style={{ color: "blue", hreight: "10px" }}>+ </span>Add Member
        </Button>
      </div>
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
