import { useFormik } from "formik";
import * as Yup from "yup";

import "./form.sass"

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, "Minimum 2 characters")
                    .required("Required field!"),
            email: Yup.string()
                    .email("Invalid email address")
                    .required("Required field!"),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values, null, 2))
            resetForm()
        }
    })

    return (
        <div className="form">
            <div>
                <h2 className="form__title">
                    Didn´t get it?
                </h2>
                <h3 className="form__subtitle">
                    Fill it out and we´ll contact you
                </h3>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <input 
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange} />
                {formik.errors.name && formik.touched.name && (<div className="error">{formik.errors.name}</div>)}
                <input 
                    id="email"
                    name="email"
                    placeholder="Email" 
                    type="text" 
                    value={formik.values.email}
                    onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email && (<div className="error">{formik.errors.email}</div>)}
                <button type="submit">CONTACT ME</button>
            </form>
        </div>
    )
}

export default Form;