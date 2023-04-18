const uservalidation = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!values.email) {
    errors.email = "Email id is required";
  }
  if (!values.mobile_No) {
    errors.mobile_No = "Phone no is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.pan) {
    errors.pan = "PAN NO. is required";
  }
  return errors;
};

export default uservalidation;
