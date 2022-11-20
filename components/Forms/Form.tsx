import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { useFormContext } from "./Forms";
import { FormProps } from "./types";
import { getInitialValues } from "./utils/getInitialValues";
import { renderFields } from "./utils/renderFields";

// Render form using formik and json
export function Form(props: FormProps) {
  const {
    registerForm,
    unregisterForm,
    activeForm,
    isLastForm,
    updateFormData,
  } = useFormContext();

  const initialValues = useMemo(() => getInitialValues(props.render), []);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, helper) => {
      console.log(values);
      updateFormData(props.label, values);

      if (isLastForm()) {
        console.log("Should submit");
      }
    },
  });

  const fields = useMemo(
    () => renderFields(props.render, formik),
    [props.render, formik]
  );

  useEffect(() => {
    registerForm(props.label);

    return () => unregisterForm(props.label);
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      onBlur={formik.handleBlur}
    >
      {activeForm}
      {props.children(renderFields(props.render, formik), formik)}
    </form>
  );
}
