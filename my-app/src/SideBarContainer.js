import React, { Component } from 'react';
import ImageContainer from './ImageContainer';
import NameTagLineContainer from './NameTagLineContainer';
import SideBarInfoContainer from './SIdeBarInfoContainer';
import AddressContainer from './AddressContainer';
import SkillsContainer from './SkillsContainer';
import EmailContainer from './EmailContainer';
class SideBarContainer extends Component {
  render() {
    return (
        <aside class="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
            <div class="row">
                <div class="heading">
                    <ImageContainer />
                    <NameTagLineContainer />
                </div>
                <div>
                <SideBarInfoContainer />
                <EmailContainer />
                <AddressContainer />
                <SkillsContainer />
                </div>
            </div>
        </aside>       
    )
  }
}
export default SideBarContainer;