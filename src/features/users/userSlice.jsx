import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    getUsers: (state, action) => {
       state.value = [...action.payload]
    },
   
   
  },
})


export const getUsersAsync = () => (dispatch) => {
    

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      dispatch(getUsers(persons))
    })

    // const res =  await axios.get(`https://jsonplaceholder.typicode.com/users`)
    // const persons = res.data;
    // dispatch(getUsers(persons))
   
}
// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions

export default userSlice.reducer