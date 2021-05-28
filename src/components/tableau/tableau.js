import React from "react"
import "./tableau.css"
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

let vizObj;
const vizID = "vizID-" + Math.random().toString(36).substr(2, 10);

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viz: props.viz,
      height: props.height,
      width: props.width,
    };
  }

  componentDidMount() {
    this.initViz()
  }

  componentWillUnmount() {
    if (vizObj) { vizObj.dispose() }
  }

  initViz() {
    const viz = this.state.viz;
    const vizContainer = document.getElementById(vizID);
    const vizOptions = {
      width: this.state.width,
      height: this.state.height,
      onFirstVizSizeKnown: () => {
      },
      onFirstInteractive: () => {
      }
    };

    if (!apiTableau) { return; }
    // If a previous viz object exists, delete it.
    if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    vizObj = new tableau.Viz(vizContainer, viz, vizOptions);
  }

  render() {
    return (
      <div id={vizID} className="vizDiv" />
    );
  }
}
