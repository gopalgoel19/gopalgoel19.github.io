import React, { Component } from 'react';
class EmailContainer extends Component {
  render() {
    return (
        <div class="col l12 m12 s12  email sidebar-item ">
            <div class="row">
                <div class="col m12 s12 l3 icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="col m12 s12 l9 info wow fadeIn a3" data-wow-delay="0.3s">
                    <div class="section-item-details">
                        <div class="personal">
                            <h4><a href="mailto:codersdiealone@gmail.com" id="mailAdres"></a></h4>
                            <span>personal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default EmailContainer;