import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useState } from "react";

//


const Routing = (props) => {
  //  const [pickUpCoords, setPickUpCoords] = useState({});
  //  const [dropOffCoords, setDropOffCoords] = useState ({})
    const {pickUpCoords} = props
    const {dropOffCoords} = props
    console.log('props for pickup', pickUpCoords)
    console.log('props for dropoff', dropOffCoords)

    const pickUpLat = props.pickUpCoords ? props.pickUpCoords.lat : null; 
    const pickUpLng = props.pickUpCoords ? props.pickUpCoords.lng : null; 
    const dropOffLat = props.dropOffCoords ? props.dropOffCoords.lat : null; 
    const dropOffLng = props.dropOffCoords ? props.dropOffCoords.lng : null; 


  const map = useMap();
  const routing = L.Routing.control({
    waypoints: [L.latLng(pickUpLat, pickUpLng), L.latLng( dropOffLat, dropOffLng)],
    router: L.Routing.mapbox('sk.eyJ1Ijoia2xldmluZTg4IiwiYSI6ImNsNzUxeDVoeTFuazUzcG1xb3ZuOGd3aXcifQ.gTCOe2GB8DcStiCKcoowJw'),
  // your other options go here
    }).addTo(map)
}

export default Routing;
