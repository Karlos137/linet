import React from "react"
import Head from "next/head"

//React components imports
import Header from "../Header"
import Footer from "../Footer"

//Styled components imports
import Main from "./Main"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>LINET</title>
        <meta name="description" content="LINET - ukázková microsite."></meta>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
