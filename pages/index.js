import React from "react"
import { Media } from "../utils/media"

//React components imports
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import CardsSection from "../components/CardsSection"
import Contacts from "../components/Contacts"

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CardsSection />

      <Media greaterThanOrEqual="lg">
        <Contacts />
      </Media>
    </Layout>
  )
}

export default HomePage
