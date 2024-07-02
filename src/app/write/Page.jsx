"use client"

import React from 'react'
import styles from "./writePage.module.css"
import {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title"></input>
        <div className={styles.editor}>
            <button className={styles.button}>
                <Image src="./plus.png" alt="" width={16} height={16}/>
            </button>
            {open && (
            <div className={styles.add}>
                <button className={styles.addButton}>
                    <Image src="./image.png" alt="" width={16} height={16}/>
                </button>
                <button className={styles.button}>
                    <Image src="./external.png" alt="" width={16} height={16}/>
                </button>
                <button className={styles.button}>
                    <Image src="./video.png" alt="" width={16} height={16}/>
                </button>
            </div>
            )}
            <ReactQuill 
                className={styles.textArea} 
                theme="bubble" 
                value={value} 
                onChange={setValue} 
                placeholder="Tell Your Story..."
            />
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default Page
