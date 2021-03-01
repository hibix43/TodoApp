import React from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../types';

interface Props {
  children?: React.ReactNode;
  imgUrl?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Component: React.VFC<Props & StyledProps> = ({
  className,
  children,
  onClick
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
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
  // TODO: focus 時の outline を box-shadow に
`;

export default Button;
