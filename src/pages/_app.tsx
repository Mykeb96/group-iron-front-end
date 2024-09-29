import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/SkillList.css";
import "@/styles/Navigation.css"
import "@/styles/Auctions.css"
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";

import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="App">
    <ClerkProvider>
      <Nav />
      <Component {...pageProps} />
    </ClerkProvider>
    </div>
  )
}
