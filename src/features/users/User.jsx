import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersAsync } from './userSlice'

const User = () => {
    const Users = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
  
    React.useEffect(()=>{
        dispatch(getUsersAsync())
    },[Users])
  
  return (
    <div>User
     <p>This is my house y&apos;all!</p>
      {Users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default User