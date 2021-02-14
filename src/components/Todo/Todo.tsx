import React from 'react';
import Button from '../Button/Button';

type Props = {
  check: boolean;
  title: string;
};

export const Todo: React.VFC<Props> = ({ check, title }) => {
  return (
    <div>
      <Button
        imgUrl={
          check
            ? './assets/images/checked.svg'
            : './assets/images/unchecked.svg'
        }
      />
      {title}
      <Button imgUrl={'./assets/images/edit.svg'} />
      <Button imgUrl={'./assets/images/delete.svg'} />
    </div>
  );
};
