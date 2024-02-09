import { IconProps } from "./interface";

function ArrowLeftIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={color}
        strokeWidth={1.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.165 6.918L4.083 14l7.082 7.081M23.916 14H4.281" />
      </g>
    </svg>
  );
}

export default ArrowLeftIcon;
