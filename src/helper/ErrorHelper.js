const ErrorHelper = error => {
  if (
    error.message ==
    '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]'
  ) {
    return true;
  }
  return true;
};

export default ErrorHelper;
