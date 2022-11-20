import { JSONForm } from "../types";

export function renderFields(json: JSONForm, formik: any) {
  const _renderedFields = [] as React.ReactElement[];

  Object.keys(json).forEach((key, index) => {
    const element = json[key] as {
      name: string;
      type: string;
      label: string;
      placeholder: string;
      attributes: string[];
      options: { value: string | number; label: string }[];
    };

    if (element["type"] === "radio") {
      _renderedFields.push(
        <div key={element["label"]}>
          <label>{element["label"]}</label>
          <div>
            {element["options"].map((option, index) => (
              <>
                <input
                  type="radio"
                  value={option["value"]}
                  name={element["name"]}
                  onChange={formik.handleChange}
                />
                {option["label"]}
              </>
            ))}
          </div>
        </div>
      );
    }

    if (element["type"] === "text" || element["type"] === "email") {
      _renderedFields.push(
        <div key={element["label"]}>
          <label>{element["label"]}</label>
          <div>
            <input
              type={element["type"]}
              value={formik.values[element["name"]]}
              name={element["name"]}
              placeholder={element["placeholder"]}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      );
    }

    if (element["type"] === "number") {
      _renderedFields.push(
        <div key={element["label"]}>
          <label>{element["label"]}</label>
          <div>
            <input
              type={element["type"]}
              value={formik.values[element["name"]]}
              name={element["name"]}
              placeholder={element["placeholder"]}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      );
    }
  });

  return _renderedFields;
}
