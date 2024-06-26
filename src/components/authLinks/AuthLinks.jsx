import React from 'react'
import Link from 'next/link' // Assuming you're using Next.js
import styles from "./authLinks.module.css"

const AuthLinks = () => {
  const status = "notauthenticated"

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
        <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLinks
