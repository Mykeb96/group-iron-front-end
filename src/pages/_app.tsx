import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/SkillList.css";
import "@/styles/Navigation.css"
import type { AppProps } from "next/app";
import Nav from '../components/Nav'

import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Nav />
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
