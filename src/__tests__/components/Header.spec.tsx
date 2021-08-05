import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import Header from '../../components/Header';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});

jest.mock('../../hooks/useCart', () => {
  return {
    useCart: () => ({
      cart: [
        {
          amount: 2,
          id: 1,
          image:
            'https://cdn.pixabay.com/photo/2018/04/10/12/26/bottle-3307183_960_720.jpg',
          price: 179.9,
          title: 'Gaia - Vetiver, Lima e Alecrim',
        },
        {
          amount: 1,
          id: 2,
          image:
          'https://cdn.pixabay.com/photo/2017/05/20/13/03/perfume-2328883_960_720.jpg',
          price: 139.9,
          title: 'Yemanjá - Osmanthus e Camomila alemã',
        },
      ],
    }),
  };
});

describe('Header Component', () => {
  it('should be able to render the amount of products added to cart', () => {
    const { getByTestId } = render(<Header />);

    const cartSizeCounter = getByTestId('cart-size');
    expect(cartSizeCounter).toHaveTextContent('2 itens');
  });
});
