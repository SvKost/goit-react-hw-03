import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "User name must have at least 3 characters!")
    .max(50, "User name must be less than 50 characters!")
    .required("User name is required!"),
  number: Yup.string()
    .matches(/^[0-9()+\- ]+$/, "The number must contain only digits!")
    .min(7, "The number must contain at least 5 digits!")
    .max(15, "The number must contain no more than 15 characters!")
    .required("The field is required!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (contactData, formActions) => {
    onAddContact(contactData);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={PhonebookSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name"></Field>
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="text" name="number"></Field>
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
