import { Box } from "@mui/material";
import {
  InputLabel,
  InputError,
  TextField as AtomTextField,
} from "@ui-elements/index";
import { ReactElement } from "react";

export default function TextField({
  label = "",
  value = "",
  type = "text",
  error = "",
  name = "",
  placeholder = "",
  onChange = () => false,
  ...props
}): ReactElement {
  return (
    <Box>
      <InputLabel label={label} htmlFor={name} />
      <AtomTextField
        value={value}
        type={type}
        error={error}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      <InputError message={error} />
    </Box>
  );
}
