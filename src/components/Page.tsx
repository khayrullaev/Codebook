import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

type ContainerProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const Page = forwardRef(
  ({ title, children, ...rest }: ContainerProps, ref: any) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);

export default Page;
