import React, { Component } from 'react';
import { FormProvider, FormContext } from '../context/formContext'

export default class ClassesList extends Component {
  render() {
    const { classes } = this.context
    return (
      <ol>
        {classes.map(c => (<li
          key={c.id}>
            {c.value}
        </li>
        ))}
      </ol>
    )
  }
}

ClassesList.contextType = FormContext
