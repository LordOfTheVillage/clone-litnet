import { ReactNode } from "react";

interface ElementWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ElementWrapper = ({
  children,
  className,
}: ElementWrapperProps) => {
  return (
    <div
      className={`w-full rounded p-3 shadow dark:shadow-white  ${className}`}
    >
      {children}
    </div>
  );
};
