import React from "react"
import "./tableau.css"
import * as scale from "./scaleViz.js"
// eslint-disable-next-line no-unused-vars
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vizID: "vizID-" + Math.random().toString(36).substr(2, 10),
      vizObj: null,
      viz: props.viz,
      height: props.height,
      width: props.width,
    };
  }

  componentDidMount() {
    this.initViz()
  }

  componentWillUnmount() {
    this.disposeViz()
  }

  // Initializes the Tableau visualization
  initViz() {
    const viz = this.state.viz;
    const vizContainer = document.getElementById(this.state.vizID);
    const vizOptions = {
      width: this.state.width,
      height: this.state.height,
      onFirstVizSizeKnown: () => {
      },
      onFirstInteractive: (event) => {
        scale.adjustForWorksheetOrDashboard(event)
      }
    };

    // If a previous viz object exists, delete it.
    this.disposeViz()

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line no-undef
    this.setState({vizObj: new tableau.Viz(vizContainer, viz, vizOptions)})
  }

  // Clears the vizObj if it previously was assigned to a different object
  disposeViz() {
    if (this.state.vizObj) { this.setState({vizObj: this.state.vizObj.dispose()}) }
  }

  render() {
    return (
      <div className="outer-main-div">
        <div id={this.state.vizID} className="vizDiv" />
      </div>
    );
  }
}
