import styled from "styled-components"

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  position: relative;
  margin-bottom: 19px;
  color: ${props => props.theme.colors.text};

  &::before {
    content: url("/check-icon.svg");
    position: absolute;
    left: -40px;
    top: 0;
    display: inline-block;
  }
`

export default Text
