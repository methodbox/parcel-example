import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="center">Hello, World.</h1>
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Parcel Example</span>
                <p>
                  I built this Parcel example app in about 5 minutes. Click the
                  link below to learn more.
                </p>
              </div>
              <div className="card-action grey lighten-4">
                <a
                  className="blue-text .text-accent-3"
                  href="https://github.com/methodbox/parcel-example"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mountApp = document.getElementById("app");
ReactDOM.render(<App />, mountApp);
