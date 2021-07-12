import React from "react"
import { Media } from "../utils/media"

//React components imports
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import Contacts from "../components/Contacts"

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />

      <Media greaterThanOrEqual="lg">
        <Contacts />
      </Media>
    </Layout>
  )
}

export default HomePage
