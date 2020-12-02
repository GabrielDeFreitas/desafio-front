import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = () => {
    return(
        <GoogleMap
            defaultZoom={15}
            resetBoundsOnResize
            zoom={8}
            defaultCenter={{ lat: -27.6001184, lng: -48.6115244}}
        />
    );
}

export default withScriptjs(withGoogleMap(Map));