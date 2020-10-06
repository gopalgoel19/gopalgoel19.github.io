import React, { Component } from 'react';
class ProjectsContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-code"></i>
            </div>
            <div class="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
                <h2>Projects </h2>
                <div class="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s" >
                    <h3>E-Banking </h3>
                    <span>JAVA</span>
                    <p>He used java to develop an e-banking program. Used Object Oriented Programming concepts to implement the code. It allows user to open a bank account, deposit money, apply for a loan, etc. It has a log-in feature. The program is menu driven and effort has been applied to make it a full proof system. Error control is done wherever possible.
                    <a href="https://github.com/gopalgoel/eBanking" target="_blank"><span>@github</span></a>
                    </p>
                </div>
                <div class="custom-content-wrapper wow fadeIn a3" data-wow-delay="0.3s" >
                    <h3>Coffee App</h3>
                    <span>Android</span>
                    <p>This project was done as a part of Android App development course. <a href="https://www.udacity.com/course/android-development-for-beginners--ud837" target="_blank"><span>@Udacity</span></a> A very basic app. Learnt the basics of android programming through this project. <a href="https://github.com/gopalgoel/CoffeeApp" target="_blank"><span>@github</span></a></p>
                </div>
            </div>
        </div>
    )
  }
}
export default ProjectsContainer;