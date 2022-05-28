
import './App.css';
import Card from './components/Card';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { GetNewGame } from './oriflamme';
import CardDisplay from './components/CardDisplay';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {

  const [game, setGame] = useState(JSON.parse(localStorage.getItem("currentGame")))
  const [gameChanged,setGameChanged] = useState(false)
  const particlesInit = async (main) => {


    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {

  };
  const generateNewGame = () => {
    var newGame = GetNewGame()
    setGame(newGame)
  }
  useEffect(()=>{
    var currentGame = JSON.parse(localStorage.getItem("currentGame"));

    if(currentGame){
      setGame(currentGame)
    }
    else{
      var newGame = GetNewGame()
      setGame(newGame)
    }
  },[])
  useEffect(() => {
    setGameChanged(gc => !gc)
  }, [game])



  return (
    <div className="App">
      <div className="App-Main">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#282c34",
          },
          links: {
            color: "#282c34",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
        <div className="but">
        <Button  variant='outlined'  onClick={generateNewGame} >
          Generate again
        </Button>
        </div>
        

        <CardDisplay cards={game} gameChanged={gameChanged}/>
        
      </div>
    </div>
  );
}

export default App;
