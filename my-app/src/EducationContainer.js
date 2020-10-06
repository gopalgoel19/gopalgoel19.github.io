import React, { Component } from 'react';
class EducationContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-graduation-cap"></i>
            </div>
            <div class="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
                <h2>Education </h2>
                <div class="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s" >
                    <h3>B.E in Information Technology <span>@Jadavpur University</span></h3>
                    <span>AUG 2014 - July 2018</span>
                    <p>CGPA - 8.5/10. <br/>
                    Data Structure, Algorithms, Web Technology, Database Management Systems, Operating Systems, Computer Architecture, Computer Networks, Object Oriented Systems, etc.</p>
                    <p><b>Activities and Societies:</b> Code Club JUSL, Linux User's Group, etc.
                    </p>
                </div>
                <div class="custom-content-wrapper wow fadeIn a3" data-wow-delay="0.3s" >
                    <h3>Higher Secondary <span>@Sudhir Memorial Institute</span></h3>
                    <span>JUNE 2012 - APRIL 2014 </span>
                    <p>CBSE - 92.8%</p>
                </div>
                <div class="custom-content-wrapper wow fadeIn a4" data-wow-delay="0.4s" >
                    <h3>Secondary <span>@St. Helen's School</span></h3>
                    <span>JUNE 1999 - APRIL 2012 </span>
                    <p>ICSE - 93%</p>
                </div>
            </div>
        </div>
    )
  }
}
export default EducationContainer;