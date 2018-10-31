import React, { Component } from 'react';
import image from './pp.jpg';
class ImageContainer extends Component {
  render() {
    return (
        <div class="feature-img">
            <a href="index.html"><img src={image} class="responsive-img" alt="Gopal Goel's profile pic"/></a>
        </div>
    )
  }
}
export default ImageContainer;