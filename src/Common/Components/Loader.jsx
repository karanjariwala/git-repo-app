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
    let index = this.state.frame % this.props.frameArray.length;
    return <h1 {...this.props}>{this.props.frameArray[index]}</h1>;
  }
}
Loader.defaultProps = {
  interval: 100,
  frameArray: frameArray
};

export default Loader;
