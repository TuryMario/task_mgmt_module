import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Button } from "react-bootstrap";
import CreateSpaceModal from "../CreateSpaceModal";

function CreateButton({createData }) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  const handleDataProp = (newData) => {
    console.log(" newData", newData);
    setData([...data, newData]);
  };
  // const handleBtnStatus = () => {
  //   buttonStatus(false);
  // };
  createData(data);
  // const callBack = useCallback((data) => {
  //     createData(data);
  // }, [createData]);

  // useEffect(() => {
  //   callBack();
  // }, [callBack]);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <h5>
          Create New Space{" "}
          <span style={{ color: "black" }}>
            <BsPlusCircle size="2em" />
          </span>{" "}
        </h5>
      </Button>
      <CreateSpaceModal
        // btnStatus={handleBtnStatus}
        dataProp={handleDataProp} //the function to set data
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default CreateButton;
