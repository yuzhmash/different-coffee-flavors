import { useFormik } from "formik";
import * as Yup from "yup";

import "./Footer.sass"

const Footer = () => {

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
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
        <div className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="footer__contact">
                        <div className="footer__info_title">
                            contact me
                        </div>
                        <div className="footer__info_item">
                            mobile: + 46 76 677 67 67
                        </div>
                        <div className="footer__info_item">
                            email: myemail@gmail.com
                        </div>
                        <address className="footer__info_item">
                            Address: Costas Of Sweden, Kungsgatan 46B 90326 Umeå, Sweden
                        </address>
                    </div>
                    <div className="footer__shop">
                        <div className="footer__info_title">
                            shop
                        </div>
                        <div className="footer__info_item">
                            extra cheese
                        </div>
                        <div className="footer__info_item">
                            peach and melon
                        </div>
                        <div className="footer__info_item">
                            blend of coca and latte
                        </div>
                        <div className="footer__info_item">
                            original blend of chocolade and banana
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email && (<div className="error">{formik.errors.email}</div>)}
                            <button type="submit"/>
                    </form>
                </div>
                <div className="footer__privacy">
                    <div className="footer__privacy_item">
                        Privacy Policy   
                    </div>
                    <div className="footer__privacy_item">
                        Terms & Conditions ©
                    </div>
                    <div className="footer__privacy_item">
                        2024 Kaznaceevas Coffee Inc. All Rights Reserved.
                    </div>
                    <div className="footer__privacy_payment">
                        xyi4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;