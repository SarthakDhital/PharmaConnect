function Validation(values) {
    let errors = {};
  
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
  
    return errors;
  }
  
  export default Validation;