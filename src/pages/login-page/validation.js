const REQUIRED_FIELD = 'Need to fill';

export const loginValidation = {
  required: REQUIRED_FIELD,
}

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 6) {
      return 'Password must be longer than 6 symbol'
    }
    return true;
  }
}
