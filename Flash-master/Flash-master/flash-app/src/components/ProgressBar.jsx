import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Circle from "./Circle.jsx";
import {Circle} from 'react-shapes';
import '../css/progressbar.css'
//import '../css/circle.css'

class ProgressBar extends Component {

  static propTypes = {
    questionNum: PropTypes.number
  };

  static defaultProps = {
    questionNum: -1
  }

    renderEmptyCircle() {
	    return (
	      <div>
	        <Circle r={8} fill={{color:'white'}} stroke={{color:'#0178CD'}} strokeWidth={2} />
	      </div>
	    )
  	}

    renderShadeCircle() {
	    return (
	      <div>
	        <Circle r={8} fill={{color:'black'}} stroke={{color:'#0178CD'}} strokeWidth={2} />
	      </div>
	    )
  	}

   renderAllCircles(index,totalCir) {

	var circleArray = [];
	for (var i = 0; i < totalCir; i++) {
	  if (i <= index){
	  	circleArray.push(<Circle r={8} fill={{color:'black'}} stroke={{color:'#0178CD'}} strokeWidth={2} />)
	  }
	  else {
	  	circleArray.push(<Circle r={8} fill={{color:'white'}} stroke={{color:'#0178CD'}} strokeWidth={2} />);
	  }

	}
	return circleArray;
  }

    render() {
		return (
			<div className='progress-bar'>
				{this.renderAllCircles(this.props.questionNum,this.props.totalQuestions)}
			</div>
		);
	}

	//display totalQuestions circles
	//highlight questionNum of them

  };
  export default ProgressBar;