"use client";

export const Button = ({ children }: { children: React.ReactElement | string }, { ...props }: { props: any }) => {
  return <button {...props} className="btn">{children}</button>;
};
