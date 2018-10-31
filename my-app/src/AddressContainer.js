import React, { Component } from 'react';
class AddressContainer extends Component {
  render() {
    return (
        <div class="col l12 m12 s12  address sidebar-item ">
            <div class="row">
                <div class="col l3 m12  s12 icon">
                    <i class="fa fa-home"></i>
                </div>
                <div class="col m12 s12 l9 info wow fadeIn a4" data-wow-delay="0.4s">
                    <div class="section-item-details">
                        <div class="address-details">
                            <h4>
                            Bengaluru Area,<br/>
                            India</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default AddressContainer;