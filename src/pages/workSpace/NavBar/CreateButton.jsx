import React, { useCallback, useEffect } from "react";

import { BsPlusCircle } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useState } from "react";
import CreateSpaceModal from "../CreateSpaceModal";

function CreateButton() {
  const [showModal, setShowModal] = useState(false);
  const [fromModal, setFromModal] = useState({});

    const fromCreateSpaceModal = useCallback((data) => {
      
        /*
        workspace parent component
        a) list
        b) function that adds to the list


        create component
        takes in
        a) function to add to the list

        list of work spaces workSpaceList = [ ] ;
        //newWorkspace = {
        name:" work space name",
        description:" despription"
        }

        setWorkSpace([...workSpaceList,newWorkSpace])
        */
      setFromModal(data);
  }, [])
    useEffect(() => {
      fromCreateSpaceModal();
    }, [fromCreateSpaceModal]);
    console.log(fromModal)
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
        fromCreateSpaceModal={fromCreateSpaceModal}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default CreateButton;
