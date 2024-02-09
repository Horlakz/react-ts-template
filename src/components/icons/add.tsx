import { IconProps } from "./interface";

function AddIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        data-name="add"
      >
        <path d="M12 19L12 5" />
        <path d="M5 12L19 12" />
      </g>
    </svg>
  );
}

export default AddIcon;
