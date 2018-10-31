import React, { Component } from 'react';
import ProfessionalSkillsContainer from './ProfessionalSkillsContainer';
class SkillsContainer extends Component {
  render() {
    return (
        <div class="col l12 m12 s12  skills sidebar-item" >
            <div class="row">
                <div class="col m12 l3 s12 icon">
                    <i class="fa fa-calendar-o"></i>
                </div>
                <ProfessionalSkillsContainer />
            </div>
        </div>
    )
  }
}
export default SkillsContainer;