import styled from "styled-components";

const ContactListStyled = styled.ul`
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
