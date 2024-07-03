import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import {
  updateMember,
  addMember,
} from "../redux/features/SocietyMember/MemberSlice";

const LoginForm = ({ handleEdit, handleAddMember, edit, add, editMember }) => {
  const [isNameError, setIsNameError] = useState(false);
  const [isPincodeError, setIsPincodeError] = useState(false);
  const [isAddressError, setIsAddressError] = useState(false);
  const [pin, setPin] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");
  const [addressErrorText, setAddressErrorText] = useState("");
  const [pincodeErrorText, setPincodeErrorText] = useState("");
  const [formData, setFormData] = useState(
    editMember || {
      id: "",
      name: "",
      address: "",
      pincode: "",
    }
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target.name)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" &&
      formData.address === "" &&
      formData.pincode === ""
    ) {
      setIsNameError(true);
      setIsPincodeError(true);
      setIsAddressError(true);
      setNameErrorText("Name is mandatory");
      setPincodeErrorText("pincode is mandatory");
      setAddressErrorText("address is mandatory");
    } else if (formData.name === "" || null) {
      setIsNameError(true);
      setNameErrorText("Name is mandatory");
    } else if (formData.pincode === "" || null) {
      setIsPincodeError(true);
      setPincodeErrorText("pincode is mandatory");
    } else if (formData.address === "" || null) {
      setIsAddressError(true);
      setAddressErrorText("address is mandatory");
    } else if (formData.pincode.length !== 6) {
      setPin(true);
    } 
    else {
      if (editMember) {
        dispatch(updateMember(formData));
        handleEdit();
      } else {
        dispatch(addMember(formData));
        handleAddMember();
      }
    }
  };

  return (
    <>
      {editMember ? (
        <Modal
          open={edit}
          onClose={handleEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{ top: "28%", left: "27%", width: "41%" }}
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
                      value={formData.name}
                      onChange={(e) => handleChange(e)}
                      required
                      error={isNameError}
                      helperText={nameErrorText}
                    />

                    <TextField
                      style={{ width: "80%" }}
                      variant="outlined"
                      label="Pin Code"
                      type="number"
                      inputMode="numeric"
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                          {
                            display: "none",
                          },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                      name="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleChange(e)}
                      required
                      error={pin}
                      helperText={
                        pin ? "maximum 6 digits required" : pincodeErrorText
                      }
                    />
                  </div>
                  <TextField
                    style={{ width: "90%" }}
                    variant="outlined"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleChange(e)}
                    required
                    error={isAddressError}
                    helperText={addressErrorText}
                  />
                </div>

                <div className="button-wrapper flex flex-row justify-center items-center mt-4 mb-4 w-full gap-4">
                  <Button
                    className="bg-green-500 hover:bg-green-500"
                    variant="contained"
                    style={{ background: "green", width: "14%" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      color: "black",
                      borderColor: "black",
                      width: "14%",
                    }}
                    className="text-black"
                    onClick={handleEdit}
                  >
                    CANCEL
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </Modal>
      ) : (
        <Modal
          open={add}
          onClose={handleAddMember}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{ top: "28%", left: "27%", width: "41%" }}
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
                      value={formData.name}
                      onChange={(e) => handleChange(e)}
                      required
                      error={isNameError}
                      helperText={isNameError ? nameErrorText :""}
                      autoFocus={true}
                    />

                    <TextField
                      style={{ width: "80%" }}
                      variant="outlined"
                      label="Pin Code"
                      type="number"
                      name="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleChange(e)}
                      required
                      inputMode="numeric"
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                          {
                            display: "none",
                          },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                      error={isPincodeError}
                      helperText={
                        pin ? "maximum 6 digits required" : pincodeErrorText
                      }
                    />
                  </div>
                  <TextField
                    style={{ width: "90%" }}
                    variant="outlined"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleChange(e)}
                    required
                    error={isAddressError}
                    helperText={isAddressError ? addressErrorText : ""}
                  />
                </div>

                <div className="button-wrapper flex flex-row justify-center items-center mt-4 mb-4 w-full gap-4">
                  <Button
                    className="bg-green-500 hover:bg-green-500"
                    variant="contained"
                    style={{ background: "green", width: "14%" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    ADD
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      color: "black",
                      borderColor: "black",
                      width: "14%",
                    }}
                    className="text-black"
                    onClick={handleAddMember}
                  >
                    CANCEL
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LoginForm;
