import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        required={required}
        render={({ field: { onChange, value } }) => (
          <TextField
            defaultValue=""
            fullWidth
            label={label}
            required={required}
            onChange={onChange}
          />
        )}
      />
    </Grid>
  );
};

//  return (
//     <Grid item xs={12} sm={6}>
//       <Controller
//         as={TextField}
//         name={name}
//         control={control}
//         label={label}
//         fullWidth
//         required={required}
//         error={isError}
//       />
//     </Grid>
//   );
// }
export default FormInput;
