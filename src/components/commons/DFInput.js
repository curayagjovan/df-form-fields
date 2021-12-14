import React from "react";
import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

function DFInput({ name, label, control, rules, gutterBottom, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState, formState: { errors } }) => (
        <FormControl
          style={gutterBottom ? { marginBottom: 20 } : {}}
          {...props}
          error={fieldState.invalid}
          fullWidth
        >
          <Typography variant="caption" color="textSecondary">
            {label}
          </Typography>
          <OutlinedInput {...field} placeholder={label} />
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default DFInput;
