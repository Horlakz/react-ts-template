import { IconProps } from "./interface";

function Spinner({ size = 20, color = "#222" }: IconProps) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </svg>
  );
}

export default Spinner;
