import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
     
       <h1 className={styles.title}>Homepage</h1>
       <p className={styles.text}>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </p>
       <p className={styles.text}>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </p>
       <Link href="/ninjas">
           <a className={styles.btn}>See NinjaListing</a>
       </Link>
    
    
    </div>
  )
}
