import Label from '../../other-projects-section/label'
import "./contacts.css"
import { useState,useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapCom() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}





const Contacts = () => {
return (
 <div className="contacts-main-container">
    <Label text="Контакти" />
     <div className="contacts-container">
        <div className="text-info">
            <div className="general">
                <h1 className="general-header">
                    Загальні
                </h1>
                <ul>
                    <li><b>0 98 545 4225 </b> – мобільний Київстар</li>
                    <li><b>0 50 545 4225 </b> – мобільний Vodafone</li>
                    <li><b>0 93 170 0950 </b> – мобільний lifecell</li>
                    <li><b>0 800 307 800 </b> – безкоштовні дзвінки зі стаціонарних телефонів</li>
                </ul>
                <div className="mail">
                    <a href="mailto:sales@masteram.ua">sales@masteram.ua</a>
                    <span> – відділ продажів </span>
                </div>
            </div>

            <div className="tech-sup">
                
            <h1 className="general-header">
            Технічна підтримка
                </h1>
            <div className="mail">
                    <a href="mailto:support@masteram.ua">support@masteram.ua</a>
                    <span>  – відділ технічної підтримки </span>
                </div>
                
            </div>
            <div className="service-center">
            <h1 className="general-header">
            Сервісний центр
                </h1>
            <div className="mail">
                    <a href="mailto:servicecenter@masteram.ua">servicecenter@masteram.ua</a>
                    <span> - відділ ремонтів <br /></span>
                    <span> <b>044 392 05 40</b> – запитання щодо гарантійного та післягарантійного ремонту обладнання</span>
                </div>
            </div>
        </div>
        {/* <div className="map-main-container">
        <GoogleMapCom/>
        </div> */}
     </div>
 </div>
);
};

export default Contacts;