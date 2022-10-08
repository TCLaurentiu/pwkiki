import Link from "next/link"
import React, {useState} from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"
export default function Nav() {

  let [is_logged_in, set_is_logged_in] = useState(false)
  let [user_data, set_user_data] = useState({
    email:null,
    uuid:null,
  })

  let logout = () =>{
    auth.signOut();
  }

  let auth = getAuth()
  onAuthStateChanged(auth, (user)=>{

    if(user){
      set_is_logged_in(true)
      set_user_data({
        email:user.email,
        uuid:user.uuid,
      })
    } else {
      set_is_logged_in(false)
    }

  })


  return (
    <header>
      <nav className="leftNav">
        <Link href="/">
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
        {!!is_logged_in && (
          <Link href="">
            <a onClick = {logout}>Logout({user_data.email})</a>
          </Link>
        )
        }
        {!is_logged_in && (
          <>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Create an account</a>
        </Link>
        </>
        )
      }
      </nav>
    </header>
  );
}
