const REQUIRED_FIELD = 'Need to fill';

export const titleValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 4) {
      return 'Title must be longer than 6 symbol'
    } else if (value.length > 20) {
      return 'Title must be  less  than 30 symbol'
    }
    return true;
  }
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
