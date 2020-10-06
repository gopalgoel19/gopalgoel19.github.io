import React, { Component } from 'react';
class TestScoresContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-trophy"></i>
            </div>
            <div class="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
            <h2>Test Scores </h2>
                <div class="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s" >
                    <h3>West Bengal Joint Entrance Examination(WBJEE)</h3>
                    <span>MAY 2014</span>
                    <p>Scored a rank of 1127.</p>
                </div>
            </div>
        </div>
    )
  }
}
export default TestScoresContainer;