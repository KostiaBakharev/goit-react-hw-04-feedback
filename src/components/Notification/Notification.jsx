import { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  state = {};
  render() {
    return <h2 className={css.title}>{this.props.message}</h2>;
  }
}
