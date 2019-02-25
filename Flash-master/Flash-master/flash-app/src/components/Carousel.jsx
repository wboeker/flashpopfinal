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
        <img alt="flashpopz-large" src="flashpopz-large.png" height='200px'/>
      </div>
    )
  }

  renderCardOne() {
    return (
      <div>
        <h1>高校</h1>
        <h1>High School</h1>
        <h2>高校生なら、月曜日から金曜日まで高校に行かなければなりません。</h2>
      </div>
    )
  }

  renderCardTwo() {
    return (
      <div>
        <h1>新しい</h1>
        <h1>New</h1>
        <h2>新しい服を買って嬉しいです。</h2>
      </div>
    )
  }

  renderCardThree() {
    return (
      <div>
        <h1>自分</h1>
        <h1>oneself</h1>
        <h2>自分で日本語を勉強しています。</h2>
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
        return null;
      default:
        return this.renderTitleContent();
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
