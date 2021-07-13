import styled, { css } from "styled-components"

const model = css`
  position: relative;

  &::before  {
    content: url("/model-icon.svg");
    position: absolute;
    top: -17px;
    left: 0;
    right: 0;
    display: block;
    margin: auto;
    text-align: center;
  }
`

const Tab = styled.div`
  padding: 14px 20px 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    position: relative;
    left: -20px;
    width: ${props => (props.active ? "calc(100% + 40px)" : "0")};
    height: 3px;
    margin-top: 11px;
    background: ${props => props.theme.colors.main};
    transition: width 0.3s;
  }

  &:hover {
    &::after {
      width: calc(100% + 40px);
    }
  }

  ${props => props.model && model}
`

export default Tab
