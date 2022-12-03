import styles from '../styles/Home.module.css'
import StudentRegistration from './StudentRegistration'
export default function Home() {
  return (
    <div className={styles.container}>
     {/* <StudentList/> */}
      <StudentRegistration/>
    </div>
  )
}
