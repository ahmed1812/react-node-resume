import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
require('dotenv').config();


export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  
     activeMarker: {},          
     selectedPlace: {}          
   };
   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <div>
      <Map
        google={this.props.google}
        zoom={14}
        
        initialCenter={{ lat: 42.0593632, lng: -88.0823994}}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Shaumburg, IL'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        
      </Map>
      </div>

    )
}
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDxTdbiQM9NRtUgYe3cYN86iuXIleDgb04"
})(MapContainer);