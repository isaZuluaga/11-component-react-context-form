import React, { Component } from 'react';
import { FormProvider } from '../context/formContext'
import ClassesForm  from './ClassesForm'
import ClassesList from './ClassesList'
import UsernameForm from './UsernameForm'

export default class Form extends Component {
  render() {
    return (
      <form>
        <FormProvider>
          <UsernameForm />
          <ClassesForm />
          <ClassesList />
        </FormProvider>
      </form>
    )
  }
}
