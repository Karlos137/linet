import React, { useState } from "react"
import { useForm } from "react-hook-form"

//Styled components imports
import StyledForm from "./StyledForm"
import Input from "./Input"
import ErrorText from "./ErrorText"
import RadioButtons from "./RadioButtons"
import RadioInput from "./RadioInput"
import RadioLabel from "./RadioLabel"
import CheckBoxContainer from "./CheckBoxContainer"
import CheckBoxLabel from "./CheckBoxLabel"
import CheckBoxInput from "./CheckBoxInput"
import Text from "./Text"
import Link from "./Link"
import SubmitContainer from "./SubmitContainer"
import SubmitInput from "./SubmitInput"

const Form = () => {
  const [radio, setRadio] = useState("contact")
  const [checked, setChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    alert(
      `
      FORM DATA:
      Radio Buttons: ${radio}
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Email: ${data.email}
      Facility Name: ${data.facilityName}
      Postal Code: ${data.postalCode}
      Checked: ${checked.toString()} `
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <RadioButtons>
        <RadioInput
          type="radio"
          id="contact"
          name="access"
          value="contact"
          onClick={() => {
            setRadio("contact")
          }}
          defaultChecked
        />
        <RadioLabel htmlFor="contact">Contact me</RadioLabel>

        <br></br>

        <RadioInput
          type="radio"
          id="access"
          name="access"
          value="access"
          onClick={() => {
            setRadio("access")
          }}
        />
        <RadioLabel htmlFor="access">Gain access to the video</RadioLabel>
      </RadioButtons>
      <Input
        placeholder="First Name*"
        {...register("firstName", {
          required: {
            value: true,
            message: "First Name is required",
          },
          minLength: {
            value: 2,
            message: "Min length is 2",
          },
          pattern: {
            value: /^[A-Za-zá-žÁ-ž]+$/,
            message: "Incorrect format",
          },
        })}
      />
      {errors.firstName ? (
        <ErrorText>{errors.firstName.message}</ErrorText>
      ) : (
        <ErrorText></ErrorText>
      )}
      <Input
        placeholder="Last Name*"
        {...register("lastName", {
          required: {
            value: true,
            message: "Last Name is required",
          },
          minLength: {
            value: 2,
            message: "Min length is 2",
          },
          pattern: {
            value: /^[A-Za-zá-žÁ-ž]+$/,
            message: "Incorrect format",
          },
        })}
      />
      {errors.lastName ? (
        <ErrorText>{errors.lastName.message}</ErrorText>
      ) : (
        <ErrorText></ErrorText>
      )}
      <Input
        placeholder="Email*"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Incorrect e-mail address",
          },
        })}
      />
      {errors.email ? (
        <ErrorText>{errors.email.message}</ErrorText>
      ) : (
        <ErrorText></ErrorText>
      )}
      <Input
        placeholder="Facility Name*"
        {...register("facilityName", {
          required: {
            value: true,
            message: "Facility Name is required",
          },
        })}
      />
      {errors.facilityName ? (
        <ErrorText>{errors.facilityName.message}</ErrorText>
      ) : (
        <ErrorText></ErrorText>
      )}
      <Input
        placeholder="Postal Code*"
        {...register("postalCode", {
          required: {
            value: true,
            message: "Postal Code is required",
          },
          pattern: {
            value: /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/,
            message: "Incorrect postal code format",
          },
        })}
      />
      {errors.postalCode ? (
        <ErrorText>{errors.postalCode.message}</ErrorText>
      ) : (
        <ErrorText></ErrorText>
      )}

      <CheckBoxContainer>
        <CheckBoxInput
          id="checkbox"
          type="checkbox"
          onChange={() => setChecked(!checked)}
        />
        <CheckBoxLabel htmlFor="checkbox">
          I agree with processing my personal data for receiving commercial
          communication
        </CheckBoxLabel>
      </CheckBoxContainer>
      <Text>
        Submitting this form I agree to the processing of{" "}
        <Link href="#">personal data</Link>
      </Text>

      <SubmitContainer>
        <Text>* required fileds</Text>
        <SubmitInput type="submit" value="SEND" />
      </SubmitContainer>
    </StyledForm>
  )
}

export default Form
