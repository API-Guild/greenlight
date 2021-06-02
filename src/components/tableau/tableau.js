import React from "react"
import "./tableau.css"
import vizLayout from "./vizLayout.js"
// eslint-disable-next-line no-unused-vars
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.vizRef = React.createRef();
    this.state = {
      vizObj: null,
      vizUrl: props.viz,
      height: props.height,
      width: props.width,
      hideTabs: !props.hideTabs ? true : false,
      hideToolbar: !props.hideToolbar ? false : true,
      device: !props.device ? vizLayout().device : props.device,
      windowWidth: vizLayout().width,
      layout: vizLayout().layout,
      fixedLayout: !props.fixedLayout ? false : true,
    };
  }

  componentDidMount() {
    // keeps state up to date with window width and matching device layout
    window.addEventListener('resize', () => {
        this.setState({ 
          device: vizLayout().device, 
          windowWidth: vizLayout().width,
          layout: vizLayout().layout, 
        })
    });
    // server side rendering cannot access the window API, 
    // vizLayout must be called again before initializing the viz
    this.setState({
      device: vizLayout().device, 
      windowWidth: vizLayout().width,
      layout: vizLayout().layout,
    });
    this.initViz()
  }

  // determines if a new viz object should be reloaded given changes to state
  componentDidUpdate(prevProps, prevState, snapshot) {
    // server side rendering means that window layouts cannot be determined at build time
    // therefore it is necessary to reinitialize the viz in this scenario
    if (this.state.layout === undefined) {
      this.initViz()
    }
    // reload the viz with a new device layout if it does not match the previous setting 
    // and the fixedLayout prop has not been declared by the author
    if(!this.state.fixedLayout && (this.state.layout !== prevState.layout)) {
      this.initViz()
    }
  }

  componentWillUnmount() {
    // clean up once the component is removed
    window.removeEventListener('resize', () => {
      this.setState({ 
        device: vizLayout().device, 
        windowWidth: vizLayout().width,
        layout: vizLayout().layout, 
      })
    });
    this.disposeViz()
    
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback) => {
      return;
    };
  }

  // Initializes the Tableau visualization
  initViz() {
    // use React ref to target the embedding <div> https://reactjs.org/docs/refs-and-the-dom.html
    const vizContainer = this.vizRef.current;
    const vizOptions = {
      device: this.state.device,
      width: this.state.width,
      height: this.state.height,
      hideTabs: this.state.hideTabs,
      hideToolbar: this.state.hideToolbar,
      onFirstVizSizeKnown: (event) => {
      },
      onFirstInteractive: (event) => {
      }
    };

    // If a previous viz object exists, delete it.
    this.disposeViz()

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line no-undef
    this.setState({vizObj: new tableau.Viz(vizContainer, this.state.vizUrl, vizOptions)})
  }

  // Clears the vizObj if it previously was assigned to a different object
  disposeViz() {
    if (this.state.vizObj) {
      let vizDispose = this.state.vizObj;
      vizDispose.dispose()
      this.setState({vizObj: vizDispose}) 
    }
  }

  render() {
    return (
      <div className="vizDiv" ref={this.vizRef}/>
    );
  }
}
