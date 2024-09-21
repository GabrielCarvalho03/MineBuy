import { SVGProps } from "react";
const BarHero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={670}
    height={96}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M.309 142.658 337.915 23.503 669.41 142.658v48.884H.309v-48.884ZM43.183 108.597 336.266.457l2.677 7.256L45.86 115.852z"
    />
    <path
      fill="#fff"
      d="m336 .458 286.219 105.768-3.063 8.288L332.937 8.746z"
    />
  </svg>
);
export default BarHero;
