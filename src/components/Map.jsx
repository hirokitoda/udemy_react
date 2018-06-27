import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
  </GoogleMap>
));

const Map = props => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div />)}
  />
);

export default Map;
