import React, { Component } from 'react';
class ExperienceContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-suitcase"></i>
            </div>
            <div class="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
                <h2>Experience </h2>
                <div class="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s" >
                    <h3>Software Engineer <span><b>@Microsoft</b></span></h3>
                    <span>June 2018 – Present </span>
                    <p>Bangalore <br/>
                    Gopal is working on a chat-based teams communication tool called Microsoft Teams.</p>
                </div>
                <div class="custom-content-wrapper wow fadeIn a4" data-wow-delay="0.4s" >
                    <h3>Software Engineering Intern <span><b>@Samsung Electronics</b></span></h3>
                    <span>May 2017 – June 2017 </span>
                    <p>Bangalore <br/>He Worked in the Web Services Division at SRIB. Did a research project on a NoSQL database, CouchDB. The project included understanding the working of CouchDB in detail and set up clusters of the fully configured database for an application. Worked on multiple remote Linux machines. Performed Benchmarking. Learnt the basics of Distributed Systems, Scaling, etc. The aim was to research if CouchDB would be a good choice for an existing application at Samsung.</p>
                </div>
            </div>
        </div>
    )
  }
}
export default ExperienceContainer;