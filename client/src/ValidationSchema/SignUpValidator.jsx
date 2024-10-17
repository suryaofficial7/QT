import * as Yup from "yup"

export const SignUpValidatorSchema = new Yup.object({


    fullName: Yup.string().required("Full Name is Required!"),
    email:Yup.string().email().required("email is Required!"),
    contact:Yup.string().min(10).max(10).required("Contact no is Required!"),
    password:Yup.string().required("Password is Required!")


})