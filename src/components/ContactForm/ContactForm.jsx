import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(1, "Too short!").max(50, "too long!").required(),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in format 000-00-00")
      .min(3, "Too short!")
      .max(50, "too long!")
      .required(),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" className={css.input} id={nameId} />
          <ErrorMessage name="name" component="div" className={css.error} />

          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field type="tel" name="number" className={css.input} id={numberId} />
          <ErrorMessage name="number" component="div" className={css.error} />

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
