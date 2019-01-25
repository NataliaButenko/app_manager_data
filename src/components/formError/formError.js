import React, {Component} from 'react';
import { Message } from "semantic-ui-react";

export class FormErrors extends Component {
  constructor() {
    super();
  }

  showError = () => {
    const { field } = this.props;
    if(field.length > 0) {
      return(<Message color='red'><p>{field}</p></Message>)
    } else {
      return ''
    }
  };

  render() {
    return (<div>{this.showError()}</div>)
  }
}
