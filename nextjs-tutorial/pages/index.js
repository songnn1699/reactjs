import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foxy</title>
      </Head>
      <div className="page-background">
        
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}> Hello this is my Homepage</p>
        <Link  href='/user'>
          <a className={styles.btn}>See List</a>
        </Link>
        <img 
          src="https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"        
        />
      </div>
    </>
  )
}
