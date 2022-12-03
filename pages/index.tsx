import Navbar from '../compoponent/Navbar'
import styles from '../styles/Home.module.css'
import Login from './Login'
import Student from './Student'
import StudentList from './StudentList'
import StudentRegistration from './StudentRegistration'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <StudentList/> */}
      {/* <StudentRegistration/> */}
      {/* <Student/> */}
      <Login/>
    </div>
  )
}
