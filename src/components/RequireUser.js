import React from 'react'
import { KEY_ACCESS_TOKEN, getIteam } from '../utils/localStorageManager'
import { Navigate, Outlet } from 'react-router-dom';

function RequireUser() {
    const user=getIteam(KEY_ACCESS_TOKEN);
  return (
    user? <Outlet/> :<Navigate to='/login'/>
  )
}

export default RequireUser