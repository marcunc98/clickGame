import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
    <Wrapper>
      <Title> Image List</Title>
      {this.state.images.map(image => (
        <ImageCard
        cycleFriend={this.cycleFriend}
        id={image.id}
        key={image.id}
        name={image.name}
        />
      ))}
    </Wrapper>
    );
  }
}

export default App;
