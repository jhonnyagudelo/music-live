interface MeasureProps {
  size?: number;
  unit?: "em" | "px" | "rem";
}

export const handleMeasure = ({ size = 1.5, unit = "em" }: MeasureProps) => {
  return `${size}${unit}`;
};
