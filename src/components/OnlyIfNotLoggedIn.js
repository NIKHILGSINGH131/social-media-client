import React from 'react'
import { KEY_ACCESS_TOKEN, getIteam } from '../utils/localStorageManager'
import { Navigate, Outlet } from 'react-router'

function OnlyIfNotLoggedIn() {
    const user=getIteam(KEY_ACCESS_TOKEN)
  return (
    user?<Navigate to="/"/>:<Outlet/>
  )
}

export default OnlyIfNotLoggedIn