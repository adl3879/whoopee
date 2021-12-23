import * as React from "react";

export default function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12.9613" r="10.5" fill="url(#paint0_linear_6_59)" />
      <path
        d="M15.9103 16.1725L16.3767 13.2089H13.4589V11.2865C13.4589 10.4756 13.8657 9.6846 15.1726 9.6846H16.5V7.16155C16.5 7.16155 15.2959 6.9613 14.1452 6.9613C11.7411 6.9613 10.1712 8.38101 10.1712 10.9501V13.2089H7.5V16.1725H10.1712V23.3372C10.7075 23.4193 11.2562 23.4613 11.8151 23.4613C12.374 23.4613 12.9226 23.4193 13.4589 23.3372V16.1725H15.9103Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_59"
          x1="12"
          y1="2.4613"
          x2="12"
          y2="23.399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#18ACFE" />
          <stop offset="1" stop-color="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
