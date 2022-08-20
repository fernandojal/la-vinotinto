// @Vendors
import React from 'react';

// Constants
import { appName } from 'config/constants';

interface Props {
  readonly title: string;
  children: JSX.Element;
}

export const PublicLayout: React.FC<Props> = ({
  title = 'Not title assigned',
  children,
}) => {
  document.title = `${appName} | ${title}`;
  return <main className="min-h-screen">{children}</main>;
};
