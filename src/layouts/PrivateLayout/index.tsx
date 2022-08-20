// @Vendors
import React from 'react';

// Components
interface Props {
  readonly title: string;
  children: JSX.Element;
}

export const PrivateLayout = ({
  title = 'Not title assigned',
  children,
}: Props): JSX.Element => {
  document.title = title;
  return (
    <>
      <main>{children}</main>
    </>
  );
};
