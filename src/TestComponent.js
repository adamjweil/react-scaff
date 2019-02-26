import React from 'react';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
     };

     componentDidMount() {
       window.navigator.geolocation.getCurrentPosition(
         position =>
         this.setState({lat: position.coords.latitude}),
         err =>
         this.setState({ errorMessage: err.message })
       );
     }
  }

  render() {
    return(
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
};


export default TestComponent;
