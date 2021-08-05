import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/perfume.jpg";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="perfum" width={50} />
      </Link>
      <p>Antiquarium</p>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="hotpink" />
      </Cart>
    </Container>
  );
};

export default Header;
