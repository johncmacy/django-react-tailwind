import React from 'react'
import NavLink from './NavLink'

export default function Navbar() {
  return (
    <div className="flex gap-1 bg-gray-200 p-1">
      <div className="container flex">
        {
          Boolean(USER.isAuthenticated) ?
            <>
              <NavLink text={USER.fullName} url="/profile" />
              <NavLink text="Logout" url="/logout" />
            </>
            :
            <NavLink text="Login" url="/login" />
        }
        <NavLink text="Admin" url="/admin" />
      </div>
    </div>
  )
}