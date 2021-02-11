import styled from 'styled-components';

interface Props {
  imgUrl?: string;
}

const Button = styled.button<Props>`
  font-size: 1rem;
  padding: 1rem;
  background-color: transparent;
  background-image: url(${(props) => props.imgUrl || ''});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

export default Button;
