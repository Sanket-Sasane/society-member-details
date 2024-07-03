import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewRecord from "./ViewRecord";
import LoginForm from "./LoginForm";
import DeleteRecord from "./DeleteRecord";
import { useSelector, useDispatch } from "react-redux";
import { setMember } from "../redux/features/SocietyMember/MemberSlice";

const TableComponent = () => {
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [add, setAdd] = useState(false);
  const [isHover,setIsHover]=useState(false);
  const [viewMember, setViewMember]=useState({});
  const [deleteMember,setDeleteMember]=useState({});
  const [editMember,setEditMember]=useState({});


  const members=useSelector((state)=>state.members.members);
  const dispatch=useDispatch();

  console.log(members);

  const fetchMembers=async()=>{
    try {
      const response=await fetch('/data.json');
      const data=await response.json();
      dispatch(setMember(data));
    } catch (error) {
      console.log("error : ",error)
    }
  }

  useEffect(()=>{
    fetchMembers();
  },[]);

  const handleView = (member) => {
    setView(!view);
    setViewMember(member);
  };

  const handleEdit = (member) => {
    setEdit(!edit);
    setEditMember(member);
  };

  const handleAddMember = () => {
    setAdd(!add);
  };

  const handleDelete = (member) => {
    setDeleteRecord(!deleteRecord);
    setDeleteMember(member);
  };

  // const inlineCss={
  //   background:isHover?"darkGreen":"green",
  //   color: "white",
  //   transition:"background 0.3s"
  // }

  const handleHover=()=>{
    setIsHover(!isHover);
  }

  return (
    <>
      <div className="text-3xl mt-4 text-center">
        <h1 className="">SOCIETY MEMBERS</h1>
      </div>
      <div className="add-member w-4/5 flex m-auto mt-8 justify-between items-center">
        <p className="text-xl underline">Society details</p>
        <Button
          variant="contained"
          style={{ background: "green" }}
          className="bg-green-500 h-7 hover:bg-green-500"
          // onMouseEnter={handleHover}
          // onMouseLeave={handleHover}
          onClick={handleAddMember}
        >
          Add Member
        </Button>
      </div>
      <hr className="mt-2 w-11/12" />
      <div className="table-container w-4/5 m-auto">
        <TableContainer className="mt-6 box-border border-collapse" >
          <Table className="border-collapse border border-slate-500 rounded-s-*">
            <TableHead>
              <TableRow className="font-bold" style={{ fontSize: "800px" }} sx={{ fontWeight: 'bold', textTransform:"uppercase" }}>
                <TableCell align="center">Sr. No.</TableCell>
                <TableCell align="center">Full Name</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Pin-code</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell align="center">{member.id}</TableCell>
                  <TableCell align="center">{member.name}</TableCell>
                  <TableCell align="center">{member.address}</TableCell>
                  <TableCell align="center">{member.pincode}</TableCell>
                  <TableCell>
                    <div className="icon-wrapper flex items-center justify-around">
                      <VisibilityIcon onClick={()=>handleView(member)} />
                      <EditIcon onClick={()=>handleEdit(member)} />
                      <DeleteIcon onClick={()=>handleDelete(member)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {add && (
          <LoginForm add={add} handleAddMember={handleAddMember} />
        )}
        {viewMember && <ViewRecord viewMember={viewMember} view={view} handleView={handleView} />}
        {edit && <LoginForm edit={edit} editMember={editMember} handleEdit={handleEdit} />}
        {deleteRecord && (
          <DeleteRecord
          id={deleteMember.id}
            deleteRecord={deleteRecord}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default TableComponent;
