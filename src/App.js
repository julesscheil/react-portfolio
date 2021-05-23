import React from 'react';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    id: 1,
    projName: "Bake It Til You Make It 1",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  },
  {
    id: 2,
    projName: "Bake It Til You Make It 2",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  },
  {
    id: 3,
    projName: "Bake It Til You Make It 3",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  },
  {
    id: 4,
    projName: "Bake It Til You Make It 4",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  },
  {
    
    id: 5,
    projName: "Bake It Til You Make It 5",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  },
  {
    id: 6,
    projName: "Bake It Til You Make It 6",
    imageSRC: "bitymi",
    description: "Bake it 'Til You Make It <br> This holiday, find new recipes to treat your loved ones",
    link: "https://julesscheil.github.io/Project-1/"
  }
]

function App() {
  return (
    <div className="App">
      <Nav />
      <Main project={projects} />
    </div>
  );
}

export default App;
