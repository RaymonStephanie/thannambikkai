import { useState, useEffect } from "react"
import { auth } from "../../firebaseConfig"

export function useAuth() {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
  })
  useEffect(() => {
    // prettier-ignore
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => setAuthState({ user, pending: false, isSignedIn: !!user }))
    return () => unregisterAuthObserver()
  }, [])

  return { auth, ...authState }
}
