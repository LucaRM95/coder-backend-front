import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface Props {
    text: string;
    type: string;
    handleShowPassword?: any;
    onChange: any;
    showPassword?: boolean;
    htmlFor: string;
    label: string;
    icon?: any;
}

const FormControlAtom = ({ type, handleShowPassword, showPassword, htmlFor, label, icon, text, onChange  }: Props) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={htmlFor}>{text}</InputLabel>
      <OutlinedInput
        id={htmlFor}
        onChange={onChange}
        type={type === 'password' && !showPassword ? "password" : "text"}
        endAdornment={
          <InputAdornment position="end">
            {type === 'password' ? (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ): (
              icon
            )}
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default FormControlAtom;
