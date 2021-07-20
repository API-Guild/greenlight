import React from "react"
import classNames from "classnames"
import { vizDiv, placeholder } from "./viz.module.css"
import vizLayout from "./vizLayout/vizLayout.js"
// eslint-disable-next-line no-unused-vars
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export default class Viz extends React.Component {
  constructor(props) {
    super(props);
    this.vizRef = React.createRef();

    this.state = {
      windowWidth: vizLayout().width,
      layout: vizLayout().layout,
      fixedLayout: !props.fixedLayout ? false : true,
      hasMounted: false,
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
      mounted: true,
    });
  }

  // determines if a new viz object should be reloaded given changes to state
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.mounted !== prevState.mounted) {
      this.initViz();
    }
    // server side rendering means that window layouts cannot be determined at build time
    // therefore it is necessary to reinitialize the viz in this scenario
    if (this.state.layout === undefined) {
      this.initViz();
    }
    // reload the viz with a new device layout if it does not match the previous setting 
    // and the fixedLayout prop is false -> resizes on different window sizes 
    if(!this.state.fixedLayout && (this.state.layout !== prevState.layout)) {
      this.initViz();
    }
    // reload the viz whenever vizIndex has changed to allow for navigation within an array of URLs
    if(this.props.vizIndex !== prevProps.vizIndex) {
      this.setState({
        url: this.props.viz[this.props.vizIndex].url,
      });
      this.initViz();
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
    this.disposeViz();
    
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = () => {
      return;
    };
  }

  // Initializes the Tableau visualization
  initViz() {
    // get object at current vizIndex of props.viz to facilitate prop scoping
    const device = this.state.device;
    const localProps = this.props.viz[this.props.vizIndex];

    console.log('scopeOptions result', scopeOptions(localProps, this.props, this.props.defaultOptions))
    const scopedOptions = scopeOptions(localProps, this.props, this.props.defaultOptions);

    const vizOptions = {
      device: device,
      width: scopedOptions.layout[device].width,
      height: scopedOptions.layout[device].height,
      hideTabs: scopedOptions.hideTabs,
      hideToolbar: scopedOptions.hideToolbar,
      onFirstVizSizeKnown: (event) => {
      },
      onFirstInteractive: (event) => {
        // removes disabled property from <VizToolbar> buttons that depend on an initialized viz
        this.props.setLoaded(true);
      }
    };

    // If a previous viz object exists, delete it.
    this.disposeViz();

    let viz;
    // promise is used to chain operations upon success or error
    const embed = new Promise((resolve, reject) => {
      console.log('vizOptions', vizOptions)
      // Create a new viz object and embed it in the container div.
      try {
        // eslint-disable-next-line no-undef
        viz = new tableau.Viz(this.vizRef.current, this.props.viz[this.props.vizIndex].url, vizOptions);
      }
      catch(err) {
        // reference: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#tableauexception_class
        reject(`Tableau Error: ${err}`);
      }
      // passes the new viz object down the chain
      resolve(viz);
    });

    // if promise resolves -> pass viz to setVizObj, else give the user a Tableau error
    embed.then(
      (viz) => {this.props.setVizObj(viz);},
      (err) => {
        this.props.setLoaded(false);
        console.error(err);
      }
    )

    console.count('initViz()')
  }

  // Clears the vizObj if it previously was assigned to a different object
  disposeViz() {
    this.props.setLoaded(false);
    if (this.props.vizObj !== undefined) {
      this.props.setVizObj(this.props.vizObj.dispose());
      console.count('disposeViz()')
    }
  }

  render() {
    const vizDivClass = classNames({
      [`${vizDiv}`]: true,
      [`${placeholder}`]: !this.props.loaded,
    });

    return (
        <div className={vizDivClass} ref={this.vizRef} />
    );
  }
}

// defines embed options with highest priority given to local props,
// then global props and if none are declared it uses default values
const scopeOptions = (locals, globals, defaults) => {
  // used to cycle through supported options via bracket notation
  const optionsList = [
    'layout', 
    'hideTabs', 
    'hideToolbar', 
    'fixedLayout',
  ];

  let embedOptions = {};

  // check for props, if none declared return early with default values
  if (!locals) {
    if (!globals) {
      console.log('no locals or globals declared!')
      return defaults;
    }
  } else {
    for (let i = 0; i < optionsList.length; i++) {
      let property = optionsList[i];
      // check local prop
      if (!locals.hasOwnProperty(property) || locals[property] === undefined) {
        // if local prop not declared check global prop
        if (!globals.hasOwnProperty(property) || globals[property] === undefined) {
          console.log('no local or global prop for: ', property, defaults[property])
          // if global prop not declared use default value
          embedOptions[property] = defaults[property];
        } else {
          console.log('global prop for: ', property, globals[property])
          // use global prop
          embedOptions[property] = globals[property];
        }
      } else {
        console.log('local prop for: ', property, locals[property])
        // use local prop
        embedOptions[property] = locals[property];
      }
    }
  }
  return embedOptions;
}
