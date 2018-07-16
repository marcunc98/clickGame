import React, { Component } from "react";
import ImageCards from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.images to the images json array

  state = {
    images,
    score: 0,
    topScore: 0
  };

  shuffleTest() {
    console.log("CLICKED HAPPENED");
    console.log("IMAGES:", this.state.images);
    this.setState({
      images: this.shuffleImages(this.state.images)
    });
  }

  // Now working
  shuffleImages = images => {
    console.log("SHUFFLE FIRED!");
    var j, x, i;
    for (i = images.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = images[i];
      images[i] = images[j];
      images[j] = x;
    }

    return images;
    // let i = images.length - 1;
    // while (i > 0) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   const temp = images[i];
    //   images[i] = images[j];
    //   images[j] = temp;
    //   i--;
    // };
    // console.log("IMAGES: ", images)
    // this.setState({
    //   images:images
    // })
    // return images;
  };
  handleClick = id => {
    let guessedCorrect = false;
    console.log("handle click");
    const newData = this.state.images.map(item => {
      const newImage = { ...item };
      if (newImage.id === id) {
        console.log("GUESSED CORRECT!");
        guessedCorrect = true;
      }

      return newImage;
      if (guessedCorrect) {
        // function for guess correct
        newData;
      } else {
        // function incorrect guesses
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Message />
        {this.state.images.map(image => (
          <ImageCards
            clickCount={this.shuffleImages}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
