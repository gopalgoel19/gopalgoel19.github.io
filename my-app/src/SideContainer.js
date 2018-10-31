import React, { Component } from 'react';
import AboutMeContainer from './AboutMeContainer';
import ExperienceContainer from './ExperienceContainer';
import TestScoresContainer from './TestScoresContainer';
import ProjectsContainer from './ProjectsContainer';
import SocialMediaLinksContainer from './SocialMediaLinksContainer';
import EducationContainer from './EducationContainer';
class SideContainer extends Component {
  render() {
    return (
        <section class="col s12 m12 l8 section">
            <div class="row">
                <AboutMeContainer />
                <ExperienceContainer />
                <EducationContainer />
                <TestScoresContainer />
                <ProjectsContainer />
                <SocialMediaLinksContainer />
            </div>
        </section>
    )
  }
}
export default SideContainer;