import React from "react";


// This is just for fun Loader inspired by loading dots taught by @coryhouse in pluralsight course.  :)

const frameArray = [
  "\\¯_(ツ)_¯/", //00
  "\\¯_(ツ)_/¯", //01
  "¯\\_(ツ)_/¯", //11
  "¯\\_(ツ)_¯/", //10
  "\\¯_(ツ)_¯/" //00
];

class Loader extends React.Component {
  state = { frame: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { frameArray, interval, as , children,  ...rest }= this.props
    let index = this.state.frame % this.props.frameArray.length;
    return React.createElement( 
        as,
        rest,
        [...[this.props.frameArray[index]]]
    )
  }
}
Loader.defaultProps = {
  interval: 100,
  frameArray: frameArray,
  as:'h1',
};

export default Loader;
