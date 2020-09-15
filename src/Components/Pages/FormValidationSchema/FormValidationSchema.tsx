import React from 'react';
import Form from '@rjsf/material-ui';
import { JSONSchema7 } from 'json-schema';
import { Grid } from '@material-ui/core';
import { TitleColor } from '../../Utils/TitleColor';

const FormValidationSchema = () => {
  const schema: JSONSchema7 = {
    type: 'object',
    required: ['name', 'surname', 'email', 'pass1', 'pass2'],
    properties: {
      name: {
        type: 'string',
        title: 'First name',
        minLength: 2,
        maxLength: 30,
      },
      surname: {
        type: 'string',
        title: 'Last name',
        minLength: 2,
        maxLength: 30,
      },
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
      },
      pass1: {
        title: 'Password',
        type: 'string',
        minLength: 6,
      },
      pass2: {
        title: 'Repeat password',
        type: 'string',
        minLength: 6,
      },
      PHONE: { $ref: '#/definitions/phone' },
    },
    definitions: {
      phone: {
        type: 'object',
        properties: {
          countryCode: { type: 'number', minLength: 1, maxLength: 3 },
          number: { type: 'number', minLength: 8, maxLength: 12 },
        },
        required: ['countryCode', 'number'],
      },
    },
  };
  function validatePass(formData: any, errors: any) {
    if (formData.pass1 !== formData.pass2) {
      errors.pass2.addError("Passwords don't match");
    }
    return errors;
  }
  const uiSchema = {
    classNames: {
      name: {
        'ui:autofocus': true,
        'ui:emptyValue': '',
      },
      surname: {
        'ui:emptyValue': '',
      },
    },
  };

  const log = (type: any) => console.log.bind(console, type);

  return (
    <Grid container justify='center'>
      <TitleColor text={'Validation Schema'} />
      <Grid item sm={8}>
        <Form
          schema={schema}
          validate={validatePass}
          uiSchema={uiSchema}
          onChange={log('changed')}
          onError={log('errors')}
          onSubmit={log('submitted')}
        ></Form>
      </Grid>
    </Grid>
  );
};
export { FormValidationSchema };
