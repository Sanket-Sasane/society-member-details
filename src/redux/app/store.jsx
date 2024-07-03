import {configureStore} from '@reduxjs/toolkit'
import MemberSlice from '../features/SocietyMember/MemberSlice';

const store=configureStore({
    reducer:{
        members:MemberSlice,
    }
})

export default store;