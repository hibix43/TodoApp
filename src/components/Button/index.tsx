import { Children } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children?: React.ReactNode;
  imgUrl?: string;
}

const Component: React.VFC<Props> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

const Button = styled(Component)`
  font-size: 1rem;
  padding: 1rem;
  color: #333;
  background-color: transparent;
  background-image: url(${(props) => props.imgUrl || ''});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export default Button;
