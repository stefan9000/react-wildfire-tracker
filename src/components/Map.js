import { useState } from 'react'

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = (  { eventData, center, zoom} ) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}/>
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKey={{ key: 'AIzaSyA1QWCgtzLf3ImOTEiYayLgEu1oHMyxPaM' }}
                defaultCenter={ center }
                defaultZoom={ zoom }>
                    {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo} /> }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.3209,
        lng: 21.8958
    },
    zoom: 6
}

export default Map
