import React from 'react'
import styles from "./writePage.module.css"

const Page = () => {
  const [open, setpen] = useState(false)

  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title"></input>
        <div className={styles.editor}>
            <button className={styles.button}>
                <Image src="./plus.png" alt="" width={16} height={16}/>
            </button>
            {open && 
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
            }
        </div>
    </div>
  )
}

export default Page