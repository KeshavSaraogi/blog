"use client"

import { useState } from 'react'
import Link from "next/link"
import styles from './authLinks.module.css'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const status = "authenticated"

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
          <span className={styles.link}>Login</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
