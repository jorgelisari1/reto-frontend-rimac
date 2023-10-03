import React, { SVGProps } from "react";

type Props = {
  size?: "sm" | "md";
} & SVGProps<SVGSVGElement>;

export const GlSmDownIcon = ({ size = "sm", ...props }: Props) => {
  if (size === "sm") {
    return (
      <svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7 10.425 2.446 5.867l1.233-1.234L7 7.949l3.322-3.316 1.233 1.234L7 10.425Z"
          fill="#0A051E"
        />
      </svg>
    );
  }

  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m8 11.915-5.205-5.21 1.41-1.41L8 9.085l3.795-3.79 1.41 1.41L8 11.915Z"
        fill="#03050F"
      />
    </svg>
  );
};
