import { Form, Forms } from "../components/Forms";
import { JSONForm } from "../components/Forms/types";
import personalInformation from "../forms/personal-information.json";
import personalHealthQuestionare from "../forms/personal-health-questionare.json";
import { Button, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
            <>
              <div>
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormLabel id="demo-radio-buttons-group-label"><h2>Form onReset</h2></FormLabel><br/>

                </Box>

                  {/* data - 1 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Little interest or pleasure in doing things</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 2 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Feeling down, depressed, or hopeless</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 3 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Feeling tired or having little energy</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 4 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Poor Appetite</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 5 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Over eating</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 6 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Feeling bad about yourself or that you are a failure or have let yourself or your family down</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 7 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Trouble concentrating on things, such as reading the newspaper or watching television</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 8 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                  {/* data - 9 */}
                <Box
                  sx={{
                    mb: 3,
                    background: "white",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><b>Thoughts that you would be better off dead, or of hurting yourself</b></FormLabel><br/>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Not at all." control={<Radio />} label="Not at all." />
                      <FormControlLabel value="Several Days" control={<Radio />} label="Several Days" />
                      <FormControlLabel value="More than half days." control={<Radio />} label="More than half days." />
                      <FormControlLabel value="Nearly every days." control={<Radio />} label="Nearly every days." />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Button variant="contained" size="large" onClick={helpers.submitForm}>Submit</Button>
              </div>
            </>
          );
        }}
      </Form>
    </Forms>
  );
}
