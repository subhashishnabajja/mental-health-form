import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { FormContext, FormsProps, FormType, GenericProps } from "./types";

const FormContext = createContext({} as FormContext);

export const useFormContext = () => useContext(FormContext);

export function Forms(props: FormsProps) {
  const count = useRef(0);
  const [forms, setForms] = useState({} as { [key: string]: FormType }); // Store all the forms

  const [activeForm, setActiveForm] = useState(0); // Track the current active form

  const isActive = useCallback(
    (label: string) => {
      if (forms[label] && forms[label].index === activeForm) {
        return true;
      }

      return false;
    },
    [activeForm, forms]
  );

  // Register form on mount
  const registerForm = useCallback((label: string) => {
    setForms((forms) => {
      const newForms = forms;

      newForms[label] = {
        index: count.current,
        active: Object.keys(forms).length === 0,
        data: {},
      };
      count.current++; // Increment the counter

      return newForms;
    });
  }, []);

  // Unregister form on unmount
  const unregisterForm = useCallback((label: string) => {
    setForms((forms) => {
      const newForms = forms;

      delete newForms[label];
      count.current--;

      return newForms;
    });
  }, []);

  const nextForm = useCallback(() => {
    setActiveForm((curr) => {
      return Math.min(curr + 1, Object.keys(forms).length - 1);
    });
  }, [forms]);

  const prevForm = useCallback(() => {
    setActiveForm((curr) => Math.max(0, curr - 1));
  }, []);

  const isLastForm = useCallback(() => {
    return activeForm === Object.keys(forms).length - 1;
  }, [forms, activeForm]);

  const handleFinalSubmission = () => {
    props.onSubmit(forms);
  };

  const updateFormData = useCallback((label: string, data: {}) => {
    setForms((forms) => {
      const newForms = forms;

      newForms[label].data = data;

      return newForms;
    });
  }, []);

  return (
    <FormContext.Provider
      value={{
        registerForm,
        forms,
        unregisterForm,
        activeForm,
        nextForm,
        prevForm,
        isLastForm,
        updateFormData,
        handleFinalSubmission,
        isActive,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
