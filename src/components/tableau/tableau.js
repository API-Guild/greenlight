import React from "react"
import "./tableau.css"
import * as embed from "./embed.js"
// eslint-disable-next-line no-unused-vars
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export let vizUrl;

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viz: props.viz,
    };
  }

  componentDidMount() {
    vizUrl = this.state.viz;
    embed.default.initViz()
  }

  componentWillUnmount() {
    embed.default.disposeViz()
  }

  render() {
    return (
      <div id={embed.default.nameOfOuterDivContainingTableauViz} className="outer-div">
        <div id={embed.default.vizID} className="vizDiv" />
      </div>
    );
  }
}
