import React from "react"
import Head from "next/head"

//React components imports
import Header from "../Header"

//Styled components imports
import Main from "./Main"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>LINET</title>
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
