import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import ClickItem from "./components/ClickItem/Clickitem";

//import NavTabs from "./components/NavTabs";
//import Home from "./components/pages/Home";
//import About from "./components/pages/About";
//import Discover from "./components/pages/Discover";
//import Search from "./components/pages/Search";

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
class App extends Component {
state = {
  currentScore: 0,
  topScore: 0,
  rightWrong: "",
  clicked: [],
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
//this.handleclick = id => {
//  let currentScore = this.state.score
//}

render() {
  return (
   
      <div>
        <Navbar>
        </Navbar>
        <Background>

        </Background>
        <Container>
        {images.map(img => {
         return <ClickItem key={img.id}
                           id={img.id}
                           style={{backgroundImage: `url(${img.url})`}}
                           onClick={() => this.handleClick(img.id)}
                           className={(this === "end") ? "click-item shake" : "click-item"}
         />
         })}
     </Container>
        <Footer>

        </Footer>
      </div>
  );
}}

export default App;
