import React from 'react';

export class FeedBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedBack = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutralFeedBack = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBadFeedBack = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback() {
    let totalFeedback = 0;
    totalFeedback = this.state.bad + this.state.good + this.state.neutral;
    return totalFeedback === 0 ? 0 : totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    let PositiveFeedbackPercentage = this.state.good / this.totalFeedback;
    console.log(this.totalFeedback);

    return PositiveFeedbackPercentage;
  }
  render() {
    return (
      <div>
        <>
          <h1>Please live your feedback</h1>
          <button type="button" onClick={this.handleGoodFeedBack}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralFeedBack}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadFeedBack}>
            Bad
          </button>
        </>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              good:<span>{this.state.good}</span>
            </li>
            <li>
              neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              bad: <span>{this.state.bad}</span>
            </li>
            {this.countTotalFeedback() && <li>{this.countTotalFeedback()}</li>}
            {this.countPositiveFeedbackPercentage() && (
              <li>{this.countPositiveFeedbackPercentage()}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
