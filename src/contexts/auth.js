import React, { createContext, useCallback, useState } from 'react'
import firebase from 'services/firebase'
export const AuthContext = createContext()

function Auth (prop) {
  const [user, setUser] = useState(null)

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      setUser(null)
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      user,
      setUser
    }}
    >
      {prop.children}
    </AuthContext.Provider>)
}

export default Auth
