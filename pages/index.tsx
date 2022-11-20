import { Form, Forms } from "../components/Forms";
import { JSONForm } from "../components/Forms/types";
import personalInformation from "../forms/personal-information.json";
import personalHealthQuestionare from "../forms/personal-health-questionare.json";

export default function Home() {
  return (
    <Forms onSubmit={(values) => console.log(values)}>
      <Form
        label="personal-information"
        render={personalInformation as { [key: string]: any }}
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
      <Form
        label="personal-health-questionare"
        render={personalHealthQuestionare as { [key: string]: any }}
      >
        {(fields, helpers) => {
          return (
            <div>
              Form onReset
              {fields}
            </div>
          );
        }}
      </Form>
    </Forms>
  );
}
