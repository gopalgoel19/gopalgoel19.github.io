import React, { Component } from 'react';
class SocialMediaLinksContainer extends Component {
  render() {
    return (
        <div class="section-wrapper z-depth-1">
            <div class="section-icon col s12 m12 l2">
                <i class="fa fa-hand-o-up"></i>
            </div>
            <div class="interests col s12 m12 l10 wow fadeIn" data-wow-delay="0.1s">
                <h2>Links</h2>
                <ul> 
                    <li><a href="https://github.com/gopalgoel19" target="_blank"><i class="fa fa-github tooltipped" data-position="top" data-delay="50" data-tooltip="Github"></i></a></li>
                    <li><a href="https://in.linkedin.com/in/gopal-goel-790430b2" target="_blank"><i class="fa fa-linkedin tooltipped" data-position="top" data-delay="50" data-tooltip="LinkedIn"></i></a></li>
                    <li><a href="https://twitter.com/goel_gopal" target="_blank"><i class="fa fa-twitter tooltipped" data-position="top" data-delay="50" data-tooltip="Twitter"></i></a></li>
                    <li><a href="https://plus.google.com/u/0/+GopalGoel19" target="_blank"><i class="fa fa-google-plus tooltipped" data-position="top" data-delay="50" data-tooltip="Google Plus"></i></a></li>
                    <li><a href="https://www.quora.com/profile/Gopal-Goel-1" target="_blank"><i class="fa tooltipped" data-position="top" data-delay="50" data-tooltip="Quora">Q</i></a></li>
                </ul> 
                <ul> 
                    <li><a href="https://www.codechef.com/users/gopalgoel19" target="_blank"><i class="fa tooltipped" data-position="top" data-delay="50" data-tooltip="Codechef">CC</i></a></li>
                    <li><a href="https://www.interviewbit.com/profile/gopalgoel19" target="_blank"><i class="fa tooltipped" data-position="top" data-delay="50" data-tooltip="Interview Bit">iB</i></a></li>
                    <li><a href="https://www.hackerrank.com/gopalgoel19" target="_blank"><i class="fa tooltipped" data-position="top" data-delay="50" data-tooltip="HackerRank">H</i></a></li>
                    <li><a href="https://www.instagram.com/gopalgoel19/" target="_blank"><i class="fa fa-instagram tooltipped" data-position="top" data-delay="50" data-tooltip="Instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/sarcasticgopal" target="_blank"><i class="fa fa-facebook-official tooltipped" data-position="top" data-delay="50" data-tooltip="Facebook"></i></a></li>
                </ul> 
            </div>
        </div>
    )
  }
}
export default SocialMediaLinksContainer;