import { createSlice } from "@reduxjs/toolkit";

const initialState={
    members:[],
}

const memberSlice=createSlice({
    name:"societyMember",
    initialState,
    reducers:{
        setMember:(state,action)=>{
            state.members=action.payload;
        },
        addMember:(state,action)=>{
            const member={...action.payload, id:state.members.length +1}
            state.members.push(member);
        },
        deleteMember:(state,action)=>{
            state.members=state.members.filter((member)=>member.id!==action.payload)
        },
        updateMember:(state,action)=>{
            state.members.map((member)=>{
                if(member.id===action.payload.id){
                    member.name=action.payload.name;
                    member.address=action.payload.address;
                    member.pincode=action.payload.pincode;
                }
                return member;
            })
        }
    }
})

export default memberSlice.reducer;
export const {setMember,addMember,deleteMember,updateMember}=memberSlice.actions;