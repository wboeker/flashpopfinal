import React, {Component} from 'react';
import Button from "./Button.jsx";
import Carousel from "./Carousel.jsx";
import ProgressBar from "./ProgressBar.jsx";
import '../css/card.css'
import '../css/typography.css'
import '../css/icons.css'

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardCount: 0
    };
  }

  shouldComponentUpdate(nextState) {
    return this.state.cardCount !== nextState.cardCount;
  }

  handlePrevious() {
    this.setState({
      cardCount: this.state.cardCount - 1
    });
  }

  handleNext() {
    this.setState({
      cardCount: this.state.cardCount + 1
    });
  }

  render() {
    const onNext = this.handleNext.bind(this);
    const onPrevious = this.handlePrevious.bind(this);

    return (
      <div className="card app-container">

        <div className='card__panel'>
          <a href="localhost:3000">
            <div className="card__panel__logo"></div>
          </a>
          <div className="card__panel__banner">
            <span>
              <ProgressBar totalQuestions={5} questionNum= {this.state.cardCount}/>
            </span>
          </div>
          <div className="card__panel__control-panel">
            <a href="localhost:3000"><i type="glyph-cross-soft"></i></a>
            <div className="icon icon--cancel"></div>
          </div>
        </div>

        <div className='card__screens'>
          <h2>Season 1 Episode 1: Now the Flower Blooms</h2>
          <Carousel cardNumber={this.state.cardCount}/>
        </div>

        <div className='card__navigation'>
          <div className='card__navigation--left'>
            <Button id="previous" text="previous" onClick={ onPrevious }></Button>
          </div>
          <div className='card__navigation--right'>
            <Button id="next" text="next" onClick={ onNext }></Button>
          </div>
        </div>

      </div>
    );
  }
}

export default Card;
