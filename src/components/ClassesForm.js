import React, { Component } from 'react';
import { FormContext } from '../context/formContext'

export default class ClassesForm extends Component {
  state = {
    checkedDwa: false,
    checkedDb: false
  }

  handleAddClass = (value) => (e) => {
    // e.preventDefault() - bug
    const { addClass } = this.context
    if (e.target.name === 'dwa') this.setState({ checkedDwa: e.target.checked })
    if (e.target.name === 'db') this.setState({ checkedDb: e.target.checked })
    addClass(value)
  }

  render() {
    const { username } = this.context
    const { checkedDwa, checkedDb } = this.state
    return (
      <>
        <p>Username: {username}</p>
        <div>
          <input
            type='checkbox'
            id='dwa'
            name='dwa'
            checked={checkedDwa}
            onChange={this.handleAddClass('DWA')}
          />
          <label htmlFor='dwa'>DWA</label>
        </div>

        <div>
          <input
            type='checkbox'
            id='db'
            name='db'
            checked={checkedDb}
            onChange={this.handleAddClass('Bases de datos')}
          />
          <label htmlFor='db'>Bases de datos</label>
        </div>
      </>
    )
  }
}

ClassesForm.contextType = FormContext
