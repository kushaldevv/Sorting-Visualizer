import React from "react";
import { doAnimations } from "./sortingAlgorithms";
import "./Sorts.css";

const NUM_BARS = 50;

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      timeout: [],

    };
  }
  componentDidMount() {
    this.newArr();
  }

  newArr() {
    let arr = [];
    var timeout = [];
    while (arr.length < NUM_BARS) {
      arr.push(Math.random() * (625 - 5) + 5);
    }
    this.setState({ timeout });
    this.setState({ arr });
  }

  resetArr() {
    this.newArr();
    for (let i = 0; i < NUM_BARS; i++)
      document.getElementsByClassName("arr-bar")[i].style.backgroundColor = "#7aa6c0";    

    for(let i = 0; i < this.state.timeout.length; i ++)
        clearTimeout(this.state.timeout[i]);
    this.setState.timeout = [];
  }

  render() {
    let { arr } = this.state;
    return (
      <div className="Container">
        <div className="arr-container">
          {arr.map((val, i) => (
            <div
              className="arr-bar"
              key={i}
              style={{ height: `${val}px` }}
            >
            </div>
          ))}
          <div
            className="arr-bar"
            style={{ height: "625px", opacity: "0" }}
          ></div>
        </div>
        <div className="buttons">
          <button
            onClick={() => this.resetArr()}
            style={{
              fontSize: "16px",
              fontWeight: "500",
              height: "3rem",
              width: "6rem",
            }}
          >
            New Array
          </button>
          <button onClick={() => doAnimations('bubbleSort', this.state.arr, this.state.timeout)}>Bubble Sort</button>
          <button onClick={() => doAnimations('selectionSort', this.state.arr, this.state.timeout)}> Selection Sort</button>
          <button onClick={() => doAnimations('insertionSort', this.state.arr, this.state.timeout)}>Insertion Sort</button>
          <button>Merge Sort</button>
          <button>Heap Sort</button>
          <button>Quick Sort</button>
          <button>Selection Sort</button>
          <button>Counting Sort</button>
        </div>
      </div>
    );
  }
}
