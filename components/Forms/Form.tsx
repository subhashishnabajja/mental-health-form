import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "./Forms";
import { FormProps } from "./types";
import { getInitialValues } from "./utils/getInitialValues";
import { renderFields } from "./utils/renderFields";

// Render form using formik and json
export function Form(props: FormProps) {
  const {
    forms,
    registerForm,

    unregisterForm,
    activeForm,
    isLastForm,
    updateFormData,
    handleFinalSubmission,
    isActive,
    nextForm,
  } = useFormContext();

  const initialValues = useMemo(() => getInitialValues(props.render), []);
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, helper) => {
      console.log(values);
      updateFormData(props.label, values);

      if (isLastForm()) {
        handleFinalSubmission();
      }

      nextForm();
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

  useEffect(() => {
    setVisible(forms[props.label].index === activeForm);
  }, [activeForm]);

  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        borderRadius: 2,
        display: visible ? "block" : "none",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        onBlur={formik.handleBlur}
      >
        {props.children(renderFields(props.render, formik), formik)}
      </form>
    </Box>
  );
}
