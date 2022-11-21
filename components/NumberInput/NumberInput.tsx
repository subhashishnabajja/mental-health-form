import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

export default function TextInput(props: {
  label: string;
  name: string;
  onChange: () => void;
  value: string;
  placeholder?: string;
}) {
  return (
    <Box
      sx={{
        mb: 3,
        background: "white",
        px: 3,
        py: 4,
        borderRadius: 2,
        width: "100%",
      }}
    >
      <FormControl>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          {props.label}
        </Typography>

        <Input
          id={props.name}
          type="number"
          name={props.name}
          aria-describedby={props.label}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
        />
      </FormControl>
    </Box>
  );
}
