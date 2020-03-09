
import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8)
    .required("Must enter phone"),

  firstName: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter First Name"),

  secondName: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter second Name"),

  passportNumber: Yup.string()
    .min(8, "Must have a character")
    .max(20, "Must be shorter than 255")
    .required("Must enter passportNumber")
});


