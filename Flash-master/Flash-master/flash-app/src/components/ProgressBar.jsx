import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/progressbar.css'

class ProgressBar extends Component {

  render() {
		return (
			<div className='progress-bar'>
				<h1>Hi, I have {String(this.props.questionNum)} out of {this.props.totalQuestions}</h1>
			</div>
		);
	}

	//display totalQuestions circles
	//highlight questionNum of them

  };
  export default ProgressBar;