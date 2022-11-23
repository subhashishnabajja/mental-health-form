import { Form, Forms } from "../components/Forms";
import { JSONForm } from "../components/Forms/types";
import personalInformation from "../forms/personal-information.json";
import personalHealthQuestionare from "../forms/personal-health-questionare.json";
import { Button, Typography } from "@mui/material";
import Box from "@mui/system/Box";

export default function Home() {
  return (
    <Forms onSubmit={(values) => console.log(values)}>
      <Form
        label="personal-information"
        render={personalInformation as { [key: string]: any }}
      >
        {(fields, helpers) => {
          return (
            <>
              <Box
                sx={{
                  mb: 3,
                  background: "white",
                  px: 3,
                  py: 4,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4">Personal information</Typography>
              </Box>
              {fields}
              <Button variant="contained" onClick={helpers.submitForm}>
                Submit
              </Button>
            </>
          );
        }}
      </Form>
      <Form
        label="personal-health-questionare"
        render={personalHealthQuestionare as { [key: string]: any }}
      >
        {(fields, helpers) => {
          return (
            <div>
              Form onReset
              {fields}
              <button onClick={helpers.submitForm}>Submit</button>
            </div>
          );
        }}
      </Form>
    </Forms>
  );
}
