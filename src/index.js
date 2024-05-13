// import the react and the reactDom
import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (success) => this.setState({ lat: success.coords.longitude }),
      (err) => {
        this.setState({ errorMsg: err.message });
      }
    );
  }

  render() {
    if (this.state.lat == null && this.state.errorMsg == "") {
      return <div>Loading</div>;
    }
    if (this.state.lat != null && this.state.errorMsg == "") {
      return <SeasonDisplay lattitude={this.state.lat} />;
    }
    if (this.state.lat == null && this.state.errorMsg != "") {
      return <div>Error Message:{this.state.errorMsg}</div>;
    }
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
