import React, { useState } from "react"

//Styled components imports
import Wrapper from "./Wrapper"
import Contact from "./Contact"
import Text from "./Text"
import Image from "./Image"
import Button from "./Button"

const Contacts = () => {
  const [contactsVisible, setContactsVisible] = useState(true)

  const handleClick = () => {
    setContactsVisible(!contactsVisible)
  }
  return (
    <Wrapper>
      <Contact
        href="tel:+420123456789"
        title="+420 123 456 789"
        visible={contactsVisible}
        phone
      >
        <Image src="/phone-icon.svg" alt="Phone" />
        <Text>
          Call<br></br> us
        </Text>
      </Contact>
      <Contact
        href="mailto:linet@example.com?subject=LINET%20example"
        title="linet@example.com"
        visible={contactsVisible}
        mail
      >
        <Image src="/mail-open-icon.svg" alt="Mail" />
        <Text>
          Contact<br></br> form
        </Text>
      </Contact>
      <Button onClick={handleClick}>
        <Image
          visible={contactsVisible}
          arrow
          src="/arrow-right-icon.svg"
          alt="Right arrow"
        />
      </Button>
    </Wrapper>
  )
}

export default Contacts
