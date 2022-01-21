const REQUIRED_FIELD = 'Need to fill';

export const titleValidation = {
  required: REQUIRED_FIELD,

}

export const descriptionValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 6) {
      return 'Description must be longer than 6 symbol'
    }
    return true;
  }
}
