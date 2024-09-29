import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from 'next/link'

import { useState } from 'react'

import { RiAuctionFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";

export default function Nav()
{

    return (
        <div id='navigation'>
            <div id="links-container">
            <SignedOut>
                <SignInButton>
                    <button className="sign-in">Sign In</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton appearance={{
                    variables: {
                        fontSize: '20px'
                    }
                }}/>
            </SignedIn>

            <Link className='link' href="/"><AiFillHome /></Link>
            <Link className='link' href="/auctions"><RiAuctionFill /></Link>
            <Link  className='link' href="/auctions"><FaExclamation /></Link>
            </div>
            {/* <h1 id='title'>All Brakes</h1> */}
        </div>
    )
}