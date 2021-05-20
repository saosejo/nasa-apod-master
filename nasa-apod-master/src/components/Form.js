import React from 'react';
import { Field, reduxForm } from 'redux-form';

import DatePicker, {
  FieldDatePicker,
  formatDates,
  normalizeDates,
} from './DatePicker';

const Form = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldDatePicker name="dateStart" placeholder="Date" />
    </form>
  );
};

const changeDate = e => {
  e.preventDefault();
  let dateFromInput = e.target[0].value;
};

export default reduxForm({
  form: 'sample',
})(Form);