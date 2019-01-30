import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/button.css'

class Button extends Component {

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    color: "teal",
    size: "medium",
    text: "",
    onClick: () => null
  }

  shouldComponentUpdate(nextState) {
    return false;
  }

  render() {
    const { color, onClick, size, text } = this.props;
    const colorClass = "button--" + color;
    const sizeClass = "button--" + size;
    const buttonClasses = colorClass + " " + sizeClass;

    return (
      <div className={buttonClasses}>
        <button onClick={onClick}>
          { text }
        </button>
      </div>
    );
  }
}

export default Button;
