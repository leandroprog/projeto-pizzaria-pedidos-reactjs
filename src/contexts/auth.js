import React, { createContext } from 'react'

export const AuthContext = createContext()

function Auth (prop) {
  return (
    <AuthContext.Provider value={{}}>
      {prop.children}
    </AuthContext.Provider>)
}

export default Auth
