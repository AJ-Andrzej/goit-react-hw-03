import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import css from './ContactForm.module.css'


export default function ContactForm() {
    const fieldId = useId()
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }   
            }
            onSubmit={handleSubmit}
        >
            <Form className={css.wrapper}>
                <div className={css.fileld}>
                    <label className={css.label} htmlFor={`${fieldId}-name`}>Name</label>
                    <Field type="text" name="name" id={`${fieldId}-name`}></Field>
                </div>
                <div className={css.fileld}>
                    <label className={css.label} htmlFor={`${fieldId}-number`}>Number</label>
                    <Field type="tel" name="number" id={`${fieldId}-number`}></Field>
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}