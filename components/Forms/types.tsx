import React from "react";

export interface GenericProps {
  children?: React.ReactNode;
}

export interface FormContext {
  registerForm: (label: string) => void;
  unregisterForm: (label: string) => void;
  activeForm: number;
  nextForm: () => void;
  prevForm: () => void;
  isLastForm: () => boolean;
  updateFormData: (label: string, data: {}) => void;
  handleFinalSubmission: () => void;
  isActive: (label: string) => boolean;
}

export interface FormProps {
  label: string;
  render: JSONForm;
  children: (
    renderedField: React.ReactElement[],
    helpers: {}
  ) => React.ReactNode;
}

export interface FormType {
  index: number;
  data: {};
}

export interface FormsProps extends GenericProps {
  onSubmit: (values: any) => void;
}

export interface JSONForm {
  [key: string]: any;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
}
