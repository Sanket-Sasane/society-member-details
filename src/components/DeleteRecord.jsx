import React from "react";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import {useDispatch} from 'react-redux'
import { deleteMember } from "../redux/features/SocietyMember/MemberSlice";

const DeleteRecord = ({ handleDelete,deleteRecord, id }) => {

  const dispatch=useDispatch();

  const handleDeleteRecord=()=>{
    dispatch(deleteMember(id))
    handleDelete();
  }

  console.log(id)

  return (
    <Modal
      open={deleteRecord}
      onClose={handleDelete}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="form w-3/6 top-1/3 left-1/4 fixed rounded-xl bg-slate-50 shadow-xl">
        <div className="form-container">
          <div className="input-wrapper mt-4 flex w-full justify-around">
            <p className="text-xl">
              Are you sure, you want to delete this record ?
            </p>
          </div>
          <div className="button-wrapper flex flex-row items-center justify-center mt-4 mb-4 w-full gap-4">
            <Button
              variant="contained"
              className="bg-roses-800"
              onClick={handleDeleteRecord}
              style={{background:"red", color:"white"}}
            >
              Delete
            </Button>
            <Button variant="outlined" style={{borderColor:"black", color:"black"}} className="" onClick={handleDelete}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRecord;
