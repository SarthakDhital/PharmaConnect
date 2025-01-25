function Validation(values) {
  let errors = {};

  // For pharmacy name
  if (!values.pharmacy_name || values.pharmacy_name.trim() === "") {
    errors.pharmacy_name = "(Empty Field)";
  }

  // For date of establishment
  if (!values.date_of_establishment || values.date_of_establishment.trim() === "") {
    errors.date_of_establishment = "(Empty Field)";
  } else {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    if (!datePattern.test(values.date_of_establishment)) {
      errors.date_of_establishment = "(Invalid Date Format)";
    }
  }

  // For first name
  if (!values.first_name || values.first_name.trim() === "") {
    errors.first_name = "(Empty Field)";
  }

  // For last name
  if (!values.last_name || values.last_name.trim() === "") {
    errors.last_name = "(Empty Field)";
  }

  // For license number (must be alphanumeric)
  const licensePattern = /^[a-zA-Z0-9]+$/;
  if (!values.license_number || values.license_number.trim() === "") {
    errors.license_number = "(Empty Field)";
  } else if (!licensePattern.test(values.license_number)) {
    errors.license_number = "(Invalid License Number)";
  }

  // For location
  if (!values.location || values.location.trim() === "") {
    errors.location = "(Empty Field)";
  }

  // For email
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!values.email || values.email.trim() === "") {
    errors.email = "(Empty Field)";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "(Invalid Email)";
  }

  // For password (must include one number, one special character, and length 6-16)
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
  if (!values.password || values.password.trim() === "") {
    errors.password = "(Empty Field)";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "(Invalid Password)";
  }

  // For phone number (must start with '9' and be exactly 10 digits)
  const phonePattern = /^9\d{9}$/;
  if (!values.phone_number || values.phone_number.trim() === "") {
    errors.phone_number = "(Empty Field)";
  } else if (!phonePattern.test(values.phone_number)) {
    errors.phone_number = "(Invalid Phone Number)";
  }

  return errors;
}

export default Validation;
