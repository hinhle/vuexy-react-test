import { selectThemeColors } from "@utils";
import Select from "react-select";

const colorOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isFixed: true },
  { value: "purple", label: "Purple", color: "#5243AA", isFixed: true },
  { value: "red", label: "Red", color: "#FF5630", isFixed: false },
  { value: "orange", label: "Orange", color: "#FF8B00", isFixed: false },
  { value: "yellow", label: "Yellow", color: "#FFC400", isFixed: false },
];


const MultiSelectOptions = ({placeholder}) => {
  return (
    <Select
      isClearable={false}
      theme={selectThemeColors}
      defaultValue={[]}
      isMulti
      name="colors"
      options={colorOptions}
      className="react-select"
      classNamePrefix="select"
      placeholder={placeholder}
    />
  );
};
export default MultiSelectOptions;
