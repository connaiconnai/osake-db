import { Box, TextField as MuiTextField } from "@mui/material";

export default function TextField({
  value = "",
  type = "text",
  error = "",
  name = "",
  placeholder = "",
  onChange = (v: string) => console.log(v),
  dataTestid = "",
  ...props
}) {
  return (
    <Box>
      <MuiTextField
        variant="outlined"
        fullWidth
        name={name}
        value={value}
        type={type}
        error={error ? true : false}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputProps={{ "data-testid": dataTestid }}
        {...props}
      />
    </Box>
  );
}
