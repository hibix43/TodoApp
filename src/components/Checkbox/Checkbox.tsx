import React from 'react';
import styled from 'styled-components';

type Props = {
  className: string;
  label: string;
  name: string;
  value: boolean;
  changeValue: (name: string, value: boolean) => void;
};

const Component: React.VFC<Props> = ({
  className,
  label,
  name,
  value,
  changeValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.name, event.target.checked);
  };

  return (
    <span className={className}>
      <label className={`${className}__label`}>
        <input
          className={`${className}__input`}
          type="checkbox"
          name={name}
          checked={value}
          onChange={handleChange}
        />
        {label}
      </label>
    </span>
  );
};

// TODO
const StyledComponent = styled(Component)``;

export const Checkbox = StyledComponent;
