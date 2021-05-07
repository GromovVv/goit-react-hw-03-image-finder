import ImageLoader from "react-loader-spinner";

import { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <ImageLoader
        type="BallTriangle"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={5000}
        style={{textAlign: 'center'}}
      />
    );
  }
}
export default Loader;
