import React, { Component } from "react";
import "./Form.css";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Formik } from "formik";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Error from "./Error";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { validationSchema } from "./Validator";

// COMMENT: вынеси в файл validator  +++

class Form extends Component {
  getErrorInput(touched, error) {
    return touched && error && true;
  }

  render() {
    return (
      <Card className="Form">
        <CardContent  className = "FormOrder">
          <Typography
            // className = "FormOrder"
            gutterBottom
            variant="h4"
            component="h2"
            color="textSecondary"
          >
            Форма заказа
          </Typography>
        </CardContent>
        <CardActions>
          <Formik
            initialValues={{
              email: "",
              phone: "",
              firstName: "",
              secondName: "",
              passportNumber: ""
            }}
            validationSchema={validationSchema}
            // COMMENT: вынеси в отдельную функцию
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              this.props.onSuccess();
              this.props.onClose();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form
                className="Form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <FormControl variant="outlined" className="FormGroup">
                  <InputLabel htmlFor="component-outlined">Email</InputLabel>
                  <OutlinedInput
                    labelWidth={50}
                    id="component-outlined"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    // COMMENT: вынеси в отдельную переменную перед render
                    error={this.getErrorInput(touched.email, errors.email)}
                  />
                  <Error touched={touched.email} message={errors.email}></Error>
                </FormControl>

                <FormControl variant="outlined" className="FormGroup">
                  <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                  <OutlinedInput
                    labelWidth={50}
                    id="component-outlined"
                    placeholder="Enter your phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    // COMMENT: вынеси в отдельную переменную перед render
                    error={this.getErrorInput(touched.phone, errors.phone)}
                  />
                  <Error touched={touched.phone} message={errors.phone}></Error>
                </FormControl>
                <FormControl variant="outlined" className="FormGroup">
                  <InputLabel htmlFor="component-outlined">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    labelWidth={100}
                    id="component-outlined"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // COMMENT: вынеси в отдельную переменную перед render
                    error={this.getErrorInput(
                      touched.firstName,
                      errors.firstName
                    )}
                  />
                  <Error
                    touched={touched.firstName}
                    message={errors.firstName}
                  ></Error>
                </FormControl>
                <FormControl variant="outlined" className="FormGroup">
                  <InputLabel htmlFor="component-outlined">
                    Second Name
                  </InputLabel>
                  <OutlinedInput
                    labelWidth={100}
                    id="component-outlined"
                    name="secondName"
                    placeholder="Enter Second Name"
                    value={values.secondName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // COMMENT: вынеси в отдельную переменную перед render
                    error={this.getErrorInput(
                      touched.secondName,
                      errors.secondName
                    )}
                  />
                  <Error
                    touched={touched.secondName}
                    message={errors.secondName}
                  ></Error>
                </FormControl>
                <FormControl variant="outlined" className="FormGroup">
                  <InputLabel htmlFor="component-outlined">
                    PassportNumber
                  </InputLabel>
                  <OutlinedInput
                    labelWidth={120}
                    id="component-outlined"
                    placeholder="Enter your passportNumber"
                    name="passportNumber"
                    value={values.passportNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // COMMENT: вынеси в отдельную переменную перед render
                    error={this.getErrorInput(
                      touched.passportNumber,
                      errors.passportNumber
                    )}
                  />
                  <Error
                    touched={touched.passportNumber}
                    message={errors.passportNumber}
                  ></Error>
                </FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Order
                </Button>
                <Button onClick={this.props.onClose}>
                  <CloseIcon color="secondary" fontSize="large" />
                </Button>
              </form>
            )}
          </Formik>
        </CardActions>
      </Card>
    );
  }
}

export default Form;
