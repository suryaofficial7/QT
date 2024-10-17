import * as Yup from "yup"


export const SignInValidatorSchema = Yup.object({
    email:Yup.string().required("Email is Required!"),
    password:Yup.string().required("Password is required!")
})