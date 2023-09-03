/* eslint-disable no-bitwise */
import { Dispatch, SetStateAction } from 'react';

export const validateForErrors = (
  fieldsToCheckForError: {
    [key: string]: string;
  },
  setErrorsState: Dispatch<SetStateAction<{ [key: string]: string }>>
) => {
  const errors: { [key: string]: string } = {};
  // Your validation logic here
  if (fieldsToCheckForError.fullName === '') {
    errors.fullName = 'Full name is required';
  }

  if (fieldsToCheckForError.message === '') {
    errors.message = 'Message field is required';
  }
  if (fieldsToCheckForError.email === '') {
    errors.email = 'Email address is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      fieldsToCheckForError?.email
    )
  ) {
    errors.email = 'Invalid email format';
  }
  setErrorsState(errors);
  console.log(errors);
  return errors;
};
