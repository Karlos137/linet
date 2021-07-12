import React from "react"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>LINET</title>
      </Head>
      <div>{children}</div>
    </>
  )
}

export default Layout
