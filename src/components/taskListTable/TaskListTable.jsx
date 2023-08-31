import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MainTaskDetailsPage from "../../pages/tasks/taskDetails/MainTaskDetailsPage";
import MaterialReactTable from "material-react-table";

export default function TaskListTable({ taskListData }) {
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTableData(taskListData);
  }, [taskListData]);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    const updatedTableData = [...tableData];
    updatedTableData[row.index] = values;
    setTableData(updatedTableData);
    exitEditingMode();
  };

  const handleRowClick = (row) => {
    setSelectedRow(row); 
    setShow(true);
    handleShow();
    console.log("data is...", row);
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
      <div>
        <div>
          <MaterialReactTable
            columns={columns}
            data={taskListData}
            initialState={{ density: "compact" }}
            enableDensityToggle={false}
            renderTopToolbarCustomActions={() => <h3>Tasks Table</h3>}
            editingMode="row"
            enableEditing
            onEditingRowSave={handleSaveRow}
            muiTablePaginationProps={{
              rowsPerPageOptions: [5, 10, 20],
            }}
            muiTableBodyRowProps={({ row }) => ({
              onClick: (event) => {
                // console.log(row._valuesCache);
                handleRowClick(row._valuesCache);
              },
              sx: {
                cursor: "pointer", //you might want to change the cursor too when adding an onClick
              },
            })}
          />
        </div>
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ width: "100%" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Task Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Passing the selected row data */}
              <MainTaskDetailsPage rowData={selectedRow} />{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
