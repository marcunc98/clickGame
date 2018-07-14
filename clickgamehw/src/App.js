import React, { Component } from 'react';
import ImageCards from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {

  // Setting this.state.images to the images json array

  state = {
    images
  };


  render() {
    return (
    <Wrapper>
      <Navbar/>
      {this.state.images.map(image => (
        <ImageCards
        cycleFriend={this.cycleFriend}
        id={image.id}
        key={image.id}
        name={image.name}
        image={image.image}
        />
      ))}
    <Footer/>
    </Wrapper>
    
    );
  }
}

export default App;
