import React from 'react';
import FroalaEditorFunctionality from './FroalaEditorFunctionality.jsx';

export default class FroalaEditorA extends FroalaEditorFunctionality {
  render () {
    return (
      <a ref={this.setElementRef}>{this.props.children}</a>
    );
  }
}
