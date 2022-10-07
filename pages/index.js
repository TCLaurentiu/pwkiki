import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laser Tag</title>
        <meta name="description" content="Have fun with our friends playing laser tag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
        <nav className = {styles.leftNav}>
          <Link className = {styles.pageTitle} href="/">
            <a>Laser Tag</a>
          </Link>
        </nav>
        <nav>
        <Link href="/about">
          <a>About the game</a>
        </Link>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
        <Link href="/book">
          <a>Book a game</a>
        </Link>
        <Link href="/packets">
          <a>Special offers</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Create an account</a>
        </Link>
        </nav>
        </header>
      </main>
    </>
  )
}
