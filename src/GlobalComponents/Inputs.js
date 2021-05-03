import {Input} from "@progress/kendo-react-inputs";


export const MaterialInput = ({
  label,
  value
}) => (
    <Input className="material-input" label={label} defaultValue={value} />
)
