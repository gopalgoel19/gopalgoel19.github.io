import React, { Component } from 'react';
class AboutMeContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-male"></i>
            </div>
            <div class="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
                <h2>About Me</h2>
                <div class="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.3s" >
                    <p>Gopal did his graduation from Jadavpur University, Kolkata, India.</p>
                    <p>He has knowledge of Data Structures, Algorithms, Database Management, Computer Networks and Web Technology. Self-learning is his key. He work on things that are exciting, challenging, and are the best use of his time. He is looking for a full-time job opportunity as a Software Engineer. Anything that involves an application of his course knowledge and offers him a great learning opportunity. A good peer group, challenging work, and an impactful work environment are the most important things he is looking for in a job.</p>
                    <p>His main objective in life is to be a productive person.</p>
                </div>
            </div>
        </div>
    )
  }
}
export default AboutMeContainer;
