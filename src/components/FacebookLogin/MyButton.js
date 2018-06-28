import React, {Component} from 'react';

class MyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  render() {
    return (
      <div class="fb-login-button" data-max-rows="1" data-size="medium" 
      data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false"
       data-use-login-as="false"></div>
    )}
  }

  export default MyButton;