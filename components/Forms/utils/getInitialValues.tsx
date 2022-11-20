import { JSONForm } from "../types";

function getTypeInitialValue(type: string) {
  switch (type) {
    case "text":
    case "email": {
      return "";
    }

    case "number": {
      return 0;
    }

    default: {
      return "";
    }
  }
}

export function getInitialValues(json: JSONForm) {
  const _initialValues = {} as { [key: string]: any };

  Object.keys(json).forEach((key, index) => {
    const element = json[key];

    _initialValues[element["name"]] =
      element["defaultValue"] ?? getTypeInitialValue(element["type"]);
  });

  return _initialValues;
}
