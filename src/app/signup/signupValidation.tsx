function Validation(values) {
  let errors = {};

  // For first name
  if (values.firstName === "") {
    errors.firstName = "(Empty Field)";
  } else if (values.firstName && values.firstName.trim().length === 0) {
    errors.firstName = "(Empty Field)";
  }

  // For last name
  if (values.lastName === "") {
    errors.lastName = "(Empty Field)";
  } else if (values.lastName && values.lastName.trim().length === 0) {
    errors.lastName = "(Empty Field)";
  }

  // For email
  let email_pattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (values.email === "") {
    errors.email = "(Empty Field)";
  } else if (values.email && values.email.trim().length === 0) {
    errors.email = "(Empty Field)";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "(Invalid Email)";
  }

  // For password
  let password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
  if (!values.password || values.password.trim() === "") {
    errors.password = "(Empty Field)";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "(Invalid Password)";
  }

  // For phone number
  let phone_pattern = /^9\d{9}$/;
  if (values.phoneNumber === "") {
    errors.phoneNumber = "(Empty Field)";
  } else if (values.phoneNumber && values.phoneNumber.trim().length === 0) {
    errors.phoneNumber = "(Empty Field)";
  } else if (!phone_pattern.test(values.phoneNumber)) {
    errors.phoneNumber = "(Invalid Phone Number)";
  }

  return errors;
}

export default Validation;
