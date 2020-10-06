import React, { Component } from 'react';
class SideBarInfoContainer extends Component {
  render() {
    return (
        <div class="col l12 m12 s12 sort-info sidebar-item">
            <div class="row">
                <div class="col m12 s12 l3 icon">
                    <i class="fa fa-user"></i>
                </div>
                <div class="col m12 s12 l9 info wow fadeIn a1" data-wow-delay="0.1s" >
                    <div class="section-item-details">
                        <p>Software Engineer <span><b>@Microsoft</b></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default SideBarInfoContainer;