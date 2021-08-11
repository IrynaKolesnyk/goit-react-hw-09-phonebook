import styled, { css, keyframes } from "styled-components";
const fadeIn = keyframes`0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }`;

const fadeOut = keyframes`0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      transform: translateX(100px);
      opacity: 0;
    }`;

const ContactListStyled = styled.div`
  margin-top: 50px;
  align-items: baseline;
  margin-bottom: 100px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .item-enter-active {
    animation: ${(props) =>
      props.animate &&
      css`
        ${fadeIn} 500ms forwards
      `};
  }

  .item-exit-active {
    animation: ${(props) =>
      props.animate &&
      css`
        ${fadeOut} 500ms forwards
      `};
  }

  p {
    display: inline-block;
    margin-right: 20px;
  }
  .name {
    color: #052f74;
    font-weight: 700;
    font-size: 25px;
  }
  .number {
    color: #202733;
    font-weight: 600;
    font-size: 20px;
  }
`;

export default ContactListStyled;

/* animation: ${fadeOut} 500ms forwards; */
/* animation: ${fadeIn} 500ms forwards; */
