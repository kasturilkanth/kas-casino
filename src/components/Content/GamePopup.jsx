// import React, { Component } from "react";
// // import "./gamePopup.scss";

// export class GamePopup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       wheels: [
//         {
//           id: 1,
//           symbols: [
//             { id: 1, symbol: "♣", name: "clubs" },
//             { id: 2, symbol: "♦", name: "dimond" },
//             { id: 3, symbol: "♥", name: "heart" },
//             { id: 4, symbol: "♠", name: "spade" }
//           ]
//         },
//         {
//           id: 2,
//           symbols: [
//             { id: 1, symbol: "♣", name: "clubs" },
//             { id: 2, symbol: "♦", name: "dimond" },
//             { id: 3, symbol: "♥", name: "heart" },
//             { id: 4, symbol: "♠", name: "spade" }
//           ]
//         },
//         {
//           id: 3,
// symbols: [
//   { id: 1, symbol: "♣", name: "clubs" },
//   { id: 2, symbol: "♦", name: "dimond" },
//   { id: 3, symbol: "♥", name: "heart" },
//   { id: 4, symbol: "♠", name: "spade" }
// ]
//         },
//         {
//           id: 4,
//           symbols: [
//             { id: 1, symbol: "♣", name: "clubs" },
//             { id: 2, symbol: "♦", name: "dimond" },
//             { id: 3, symbol: "♥", name: "heart" },
//             { id: 4, symbol: "♠", name: "spade" }
//           ]
//         }
//       ],
//       positions: [0, 1, 2, 3],
//       rotationDegree: 0,
//       isRotating: false,
//       result: {},
//       hasClickedStartButton: false
//     };
//   }

//   //generate random number between 0 and 4, 4 not inclusive
//   generateRandomNumber = () => {
//     return Math.floor(Math.random() * 4);
//   };

//   startRotation = () => {
//     if (this.state.isRotating) {
//       return;
//     }
//     this.setState(
//       { isRotating: true, result: {}, hasClickedStartButton: true },
//       () => {
//         this.rotateTimer = setInterval(() => this.rotateWheel(), 50);
//         this.rotateTimeout = setTimeout(() => {
//           if (this.state.isRotating) {
//             this.stopRotation();
//           } else {
//             clearTimeout(this.rotateTimeout);
//           }
//         }, 10000);
//       }
//     );
//   };

//   //rotate wheel and generate random symbol
//   rotateWheel = () => {
//     const positions = [...Array(4).keys()];
//     positions.forEach((el, i) => {
//       positions[i] = this.generateRandomNumber();
//     });
//     this.setState({ positions });
//     this.setState({ rotationDegree: this.state.rotationDegree + 10 });
//   };

//   //stop rotation
//   stopRotation = () => {
//     this.clearTimer();
//   };

//   //clear timeout and interval
//   clearTimer = () => {
//     clearInterval(this.rotateTimer);
//     clearTimeout(this.rotateTimeout);
//     this.setState({ isRotating: false }, () => {
//       this.decideResult();
//     });
//   };

//   decideResult = () => {
//     const positions = [...this.state.positions];
//     //check unique count, if count is 0, game is lost, else game is won
//     const uniqueCount = positions.length - new Set(positions).size;
//     if (uniqueCount > 0) {
//       let price = "$10";
//       // all are the same, price money is $100
//       if (uniqueCount + 1 === positions.length) {
//         price = "$100";
//       } else {
//         //find consecutive, if found, price money is $10
//         positions.forEach((el, i) => {
//           if (
//             positions[i] === positions[i - 1] ||
//             positions[0] === positions[positions.length - 1]
//           ) {
//             price = "$20";
//           }
//         });
//       }
//       this.setState(
//         { result: { type: 1, text: "Winner", price: price } },
//         () => {}
//       );
//     } else {
//       this.setState({ result: { type: 2, text: "Lost" } });
//     }

//     this.setState({ positions }, () => {
//       setTimeout(() => {
//         this.setState({ result: {} });
//       }, 4000);
//     });
//   };

//   componentDidMount() {
//     //start rotation is user doesn't do anything in 5 seconds
//     setTimeout(() => {
//       if (!this.state.hasClickedStartButton) {
//         this.startRotation();
//       }
//     }, 5000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.rotateTimer);
//     clearTimeout(this.rotateTimeout);
//   }

//   render() {
//     const { rotationDegree, positions, isRotating, result } = this.state;
//     return (
//       <div className="app">
//         <div className="wheels">
//           <div
//             className="each-wheel"
//             style={{ transform: `rotate(${rotationDegree}deg)` }}
//           >
//             {this.state.wheels.map((wheel, i) => (
//               <div className="each-wheel-section" key={i}>
//                 <span>
//                   <img
//                     src={wheel.symbols[positions[i]].symbol}
//                     alt={wheel.symbols[positions[i]].name}
//                   />
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="actions">
//           <button onClick={() => this.stopRotation()} disabled={!isRotating}>
//             Stop
//           </button>
//           <button onClick={() => this.startRotation()} disabled={isRotating}>
//             Start
//           </button>
//         </div>
//         {result.type && (
//           <div
//             className="toast show"
//             style={{
//               backgroundColor: result.type === 1 ? "#4BB543" : "#bb2124"
//             }}
//           >
//             {result.type === 1 ? (
//               <div>You just won {result.price}</div>
//             ) : (
//               <div>You lost, try again later</div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default gamePopup;

import { useEffect, useState } from "react";
// import "./App.scss";

function GamePopup() {
  const [wheels, setWheels] = useState([
    {
      id: 1,
      symbols: [
        { id: 1, symbol: "♣", name: "clubs" },
        { id: 2, symbol: "♦", name: "dimond" },
        { id: 3, symbol: "♥", name: "heart" },
        { id: 4, symbol: "♠", name: "spade" }
      ]
    },
    {
      id: 2,
      symbols: [
        { id: 1, symbol: "♣", name: "clubs" },
        { id: 2, symbol: "♦", name: "dimond" },
        { id: 3, symbol: "♥", name: "heart" },
        { id: 4, symbol: "♠", name: "spade" }
      ]
    },
    {
      id: 3,
      symbols: [
        { id: 1, symbol: "♣", name: "clubs" },
        { id: 2, symbol: "♦", name: "dimond" },
        { id: 3, symbol: "♥", name: "heart" },
        { id: 4, symbol: "♠", name: "spade" }
      ]
    },
    {
      id: 4,
      symbols: [
        { id: 1, symbol: "♣", name: "clubs" },
        { id: 2, symbol: "♦", name: "dimond" },
        { id: 3, symbol: "♥", name: "heart" },
        { id: 4, symbol: "♠", name: "spade" }
      ]
    }
  ]);
  const [positions, setPositions] = useState([0, 1, 2, 3]);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [result, setResult] = useState({});
  const [hasClickedStartButton, setHasClickedStartButton] = useState(false);

  //generate random number between 0 and 4, 4 not inclusive
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 4);
  };
  const rotateTimer = setInterval(() => rotateWheel(), 50);
  const rotateTimeout = setTimeout(() => {
    if (isRotating) {
      stopRotation();
    } else {
      clearTimeout(rotateTimeout);
    }
  }, 10000);

  const startRotation = () => {
    if (isRotating) {
      return;
    }
    setIsRotating(true);
    setResult({});
    setHasClickedStartButton(true);
    const rotateTimer = setInterval(() => rotateWheel(), 50);
    // rotateTimer();
    const rotateTimeout = setTimeout(() => {
      if (isRotating) {
        stopRotation();
      } else {
        clearTimeout(rotateTimeout);
      }
    }, 10000);
    // rotateTimeout();
  };
  //rotate wheel and generate random symbol
  const rotateWheel = () => {
    const positions = [...Array(4).keys()];
    positions.forEach((el, i) => {
      positions[i] = generateRandomNumber();
    });
    // this.setState({ positions });
    setPositions({ positions });
    // this.setState({ rotationDegree: this.state.rotationDegree + 10 });
    setRotationDegree({ ...(rotationDegree + 10) });
  };
  //stop rotation
  const stopRotation = () => {
    clearTimer();
  };
  //clear timeout and interval
  const clearTimer = () => {
    clearInterval(rotateTimer);
    clearTimeout(rotateTimeout);
    // this.setState({ isRotating: false }, () => {
    //   this.decideResult();
    // });
    setIsRotating(false);
    decideResult();
  };
  const decideResult = () => {
    // const positions = [...positions];
    //check unique count, if count is 0, game is lost, else game is won
    const uniqueCount = positions.length - new Set(positions).size;
    if (uniqueCount > 0) {
      let price = "$10";
      // all are the same, price money is $100
      if (uniqueCount + 1 === positions.length) {
        price = "$100";
      } else {
        //find consecutive, if found, price money is $10
        positions.forEach((el, i) => {
          if (
            positions[i] === positions[i - 1] ||
            positions[0] === positions[positions.length - 1]
          ) {
            price = "$20";
          }
        });
      }
      // this.setState(
      //   { result: { type: 1, text: "Winner", price: price } },
      //   () => {}
      // );
      setResult({ type: 1, text: "Winner", price: price });
    } else {
      // this.setState({ result: { type: 2, text: "Lost" } });
      setResult({ type: 2, text: "Lost" });
    }

    setPositions({ positions }, () => {
      setTimeout(() => {
        setResult({ result: {} });
      }, 4000);
    });
  };
  useEffect(() => {
    //start rotation is user doesn't do anything in 5 seconds
    setTimeout(() => {
      if (!hasClickedStartButton) {
        startRotation();
      }
    }, 5000);
    clearInterval(rotateTimer);
    clearTimeout(rotateTimeout);
  }, []);

  return (
    <div className="app">
      <div className="wheels">
        <div
          className="each-wheel"
          style={{ transform: `rotate(${rotationDegree}deg)` }}
        >
          {wheels.map((wheel, i) => (
            <div className="each-wheel-section" key={i}>
              <span>
                <img
                  src={wheel.symbols[0].symbol}
                  alt={wheel.symbols[0].name}
                /
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="actions">
        <button onClick={stopRotation} disabled={!isRotating}>
          Stop
        </button>
        <button onClick={startRotation} disabled={isRotating}>
          Start
        </button>
      </div>
      {result.type && (
        <div
          className="toast show"
          style={{ backgroundColor: result.type === 1 ? "#4BB543" : "#bb2124" }}
        >
          {result.type === 1 ? (
            <div>You just won {result.price}</div>
          ) : (
            <div>You lost, try again later</div>
          )}
        </div>
      )}
    </div>
  );
}
export default GamePopup;
