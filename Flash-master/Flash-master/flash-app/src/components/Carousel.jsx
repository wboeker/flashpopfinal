import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/carousel.css'

class Carousel extends Component {

  static propTypes = {
    cardNumber: PropTypes.number
  };

  static defaultProps = {
    cardNumber: -1
  }

  renderTitleContent() {
    return (
      <div>
        test title content
      </div>
    )
  }

  renderCardOne() {
    return (
      <div>
        card one
      </div>
    )
  }

  renderCardTwo() {
    return (
      <div>
        card two
      </div>
    )
  }

  renderCardThree() {
    return (
      <div>
        card three
      </div>
    )
  }

  renderCardFour() {
    return (
      <div>
        card four LAST CARD
      </div>
    )
  }

  renderContent(index) {
    switch(index) {
      case 0:
        return this.renderTitleContent();
      case 1:
        return this.renderCardOne();
      case 2:
        return this.renderCardTwo();
      case 3:
        return this.renderCardThree();
      case 4:
        return this.renderCardFour();
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='carousel' >
        { this.renderContent(this.props.cardNumber) }
      </div>
    );
  }
}

export default Carousel;
