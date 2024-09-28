import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from 'next/link'

// import { useState } from 'react'

import { RiAuctionFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";

export default function Nav()
{

    // const [pageHovered, setPageHovered] = useState(page.name)

    return (
        <div id='navigation'>
            {/* <span className='page-hovered'>{pageHovered}</span> */}
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

            <Link onMouseEnter={() => setPageHovered('Home')} onMouseLeave={() => setPageHovered(page.name)} className='link' href="/"><AiFillHome /></Link>
            <Link onMouseEnter={() => setPageHovered('Auctions')} onMouseLeave={() => setPageHovered(page.name)} className='link' href="/auctions"><RiAuctionFill /></Link>
            <Link  onMouseEnter={() => setPageHovered('Quests')} onMouseLeave={() => setPageHovered(page.name)} className='link' href="/auctions"><FaExclamation /></Link>
            </div>
            {/* <h1 id='title'>All Brakes</h1> */}
        </div>
    )
}