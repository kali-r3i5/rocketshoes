import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  p {
    display: inline-flex;
    color: #5f44b7;
    font-size: 40px;
    font-weight: 600;
    margin-left: -550px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: hotpink;
    }

    span {
      font-size: 12px;
      color: #5f44b7;
    }
  }
`;
