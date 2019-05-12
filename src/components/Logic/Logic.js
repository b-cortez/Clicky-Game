import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import ClickItem from "../ClickItem/Clickitem";

const images = [
    {id: 1, url: "./images/jakemusic.png"},
    {id: 2, url: "./images/bmo.png"},
    {id: 3, url: "./images/bubblegum.png"},
    {id: 4, url: "./images/gunter.png"},
    {id: 5, url: "./images/iceking.png"},
    {id: 6, url: "./images/marceline.png"},
    {id: 7, url: "./images/finn.png"},
    {id: 8, url: "./images/fireprincess.png"},
    {id: 9, url: "./images/lsp.png"},
    {id: 10, url: "./images/rainicorn.png"},
    {id: 11, url: "./images/ppb.png"},
    {id: 12, url: "./images/susan.png"}
  ]
  class Logic extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clickedId: [],
  };
  
   componentWillMount = () => {
    this.loadImages(images)
  }
  
  loadImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
  }
  handleImageClick = id => {
    let currentScore = this.state.score
    if (this.state.clickedId.indexOf(id) < 0) {
      this.state.clickedId.push(id)
      if (this.state.status === "start" || "end") {
      this.setState({status: ""})
      }
      currentScore = this.state.score + 1;
      this.setState({score: currentScore})
    }
    else {
      if (currentScore > this.state.topScore){
        this.setState({topScore: currentScore})
      }
      this.setState({ score: 0,status: "end",clickedId: []})
    }
    this.loadImages(images)
  }

  render() {
    return (
     
        <div>
          <Navbar score={this.state.score} topScore={this.state.topScore} status={this.state.status}/>
          <Background>
  
          </Background>
          <Container>
          {images.map(img => {
           return <ClickItem key={img.id}
                             id={img.id}
                             style={{backgroundImage: `url(${img.url})`}}
                             onClick={() => this.handleImageClick(img.id)}
                             className={(this === "end") ? "click-item shake" : "click-item"}
           />
           })}
       </Container>
          <Footer>
  
          </Footer>
        </div>
    );
  }}
  
  export default Logic;
  