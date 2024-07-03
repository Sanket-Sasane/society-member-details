import React from "react";
import Button from "@mui/material/Button";
import {Modal, TextField, Box} from "@mui/material";


const ViewRecord = ({ handleView, view,viewMember }) => {
  const {id,name,pincode,address}=viewMember;
  return (
    <Modal
      open={view}
      onClose={handleView}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <div className="form top-1/4 left-1/3 fixed rounded-xl bg-slate-50 shadow-xl" style={{width:"30%"}}>
        <div className="form-container">
          <div className="input-wrapper mt-4 mx-24 text-lg flex flex-col gap-3 ">
            <p className="text-xl">
               Full Name : {name}
            </p>
            <p className="text-xl">
              Address : {address}
            </p>
            <p className="text-xl">
              Pin code : {pincode}
            </p>
          </div>
          <div className="button-wrapper flex flex-row items-center justify-center mt-4 mb-4 w-full gap-4">
            <Button
              variant="contained"
              className="bg-roses-800"
              onClick={handleView}
              style={{background:"red", color:"white"}}
            >
              Close
            </Button>
          </div>
        </div>
      </div> */}

<div
            style={{ top: "28%", left: "27%", width:"41%" }}
            className="form fixed rounded-xl bg-slate-50 shadow-xl"
          >
            <Box component="form">
            <div className="form-container">
              <div className="input-wrapper mt-4 flex flex-col w-full gap-2 items-center">
                <div className="flex flex-row gap-2">
                  <TextField
                    style={{ width: "80%" }}
                    variant="outlined"
                    label="Full Name"
                    name="name"
                    value={name}
                    disabled
                  />

                  <TextField
                    style={{ width: "80%" }}
                    // className={textfieldClass}
                    variant="outlined"
                    label="Pin Code"
                    type="number"
                    name="pincode"
                    value={pincode}
                    disabled
                  />

                </div>
                <TextField
                  style={{ width: "90%" }}
                  variant="outlined"
                  label="Address"
                  name="address"
                  value={address}
                  disabled
                />

              </div>

              <div className="button-wrapper flex flex-row justify-center items-center mt-4 mb-4 w-full gap-4">
                <Button
                  className="bg-green-500 hover:bg-green-500"
                  variant="contained"
                  style={{ background: "red", width: "14%" }}
                  onClick={handleView}
                >
                  CLOSE
                </Button>
              </div>
            </div>
            </Box>
          </div>
    </Modal>
  );
};

export default ViewRecord;
