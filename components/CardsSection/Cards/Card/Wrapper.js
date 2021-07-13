import styled from "styled-components"

const Wrapper = styled.a`
  cursor: pointer;
  min-height: 597px;

  @media (min-width: 380px) {
    width: 327px;
  }

  svg {
    path {
      fill: #dfdfdf;
    }
  }

  &:hover {
    box-shadow: 0px 0px 20px #00000024;

    .icon-wrapper {
      background-color: #bd2018;

      svg {
        path {
          fill: #fff;
        }
      }
    }

    .card-head {
      background-color: ${props => props.theme.colors.main};

      h3 {
        color: #fff;
      }
    }
  }
`

export default Wrapper
