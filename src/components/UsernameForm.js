import React, { Component } from 'react';
import { FormContext } from '../context/formContext'

export default class UsernameForm extends Component {
  render() {
    const { updateUsername } = this.context
    return (
      <input
        type='text'
        name='username'
        id='username'
        className='username'
        placeholder='username'
        onChange={updateUsername}
      />
    )
  }
}

UsernameForm.contextType = FormContext
