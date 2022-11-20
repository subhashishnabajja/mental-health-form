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

  // Register form on mount
  const registerForm = useCallback((label: string) => {
    setForms((forms) => {
      const newForms = forms;

      newForms[label] = { index: count.current, data: {} };
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
    setActiveForm((curr) => Math.min(curr + 1, Object.keys(forms).length - 1));
  }, []);

  const prevForm = useCallback(() => {
    setActiveForm((curr) => Math.max(0, curr - 1));
  }, []);

  const isLastForm = useCallback(() => {
    return activeForm === Object.keys(forms).length - 1;
  }, []);

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
        unregisterForm,
        activeForm,
        nextForm,
        prevForm,
        isLastForm,
        updateFormData,
      }}
    >
      {props.children}
      <button onClick={() => nextForm()}>Next</button>
      <button onClick={() => prevForm()}>Prev</button>
    </FormContext.Provider>
  );
}
