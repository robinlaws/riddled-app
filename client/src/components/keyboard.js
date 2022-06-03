import React from 'react';
import Keyboard from 'react-simple-keyboard';
import '../App.css';

export function InputKeyboard(){
return (
  <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
)
}