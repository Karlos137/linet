import styled from "styled-components"

const Text = styled.p`
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    transition: background-color 0.15s ease-in-out;
    transition: width 0.3s ease-in-out;
    position: absolute;
    width: ${props => (props.active ? "100%" : "0%")};
    height: ${props => (props.active ? "3px" : "1px")};
    bottom: 0;
    left: 0;
    background-color: ${props =>
      props.active ? props.theme.colors.main : "#f2f2f2"};
  }

  @media (min-width: 720px) {
    font-size: 17px;
    font-weight: 900;
  }

  @media (${props => props.theme.mediaQueries.md}) {
    font-size: 19px;
    padding-bottom: 24px;
  }
`

export default Text
