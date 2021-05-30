import React from "react"
import "./tableau.css"
import * as embed from "./embed.js"
// eslint-disable-next-line no-unused-vars
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vizID: "vizID-" + Math.random().toString(36).substr(2, 10),
      vizObj: null,
      viz: props.viz,
    };
  }

  componentDidMount() {
    console.log(embed)
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
      onFirstVizSizeKnown: (event) => {
        embed.default.resizeVizContainerDiv(event)
      },
      onFirstInteractive: (event) => {
        embed.default.adjustForWorksheetOrDashboard(event)
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
      <div id={embed.default.nameOfOuterDivContainingTableauViz}>
        <div id={this.state.vizID} className="vizDiv" />
      </div>
    );
  }
}
