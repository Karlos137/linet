import React from "react"

//React components imports
import Form from "./Form"

//Styled components imports
import Wrapper from "./Wrapper"
import Heading from "./Heading"
import Link from "./Link"
import Text from "./Text"
import Image from "./Image"
import IconWrapper from "./IconWrapper"

const FormSection = () => {
  return (
    <Wrapper>
      <Heading>Complete the form</Heading>
      <Form />
      <Heading mailUs>Mail us</Heading>
      <IconWrapper>
        <Image src="/mail-circle-icon.svg" alt="Mail icon" />
      </IconWrapper>
      <Link
        href="mailto:info@linetamericas.com?subject=LINET%20example"
        title="info@linetamericas.com"
      >
        info@linetamericas.com
      </Link>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan
        ex eu nisi iaculis fermentum. Curabitur vel tellus vitae risus vehicula
        placerat ac quis magna.
      </Text>
    </Wrapper>
  )
}

export default FormSection
