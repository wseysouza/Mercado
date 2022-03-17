import React, { useState } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  LoadScript,
} from "@react-google-maps/api";
import { Map } from "./styles";


export interface MapPageProps {}



export const GoogleMaps = ({ origin, dest }) => {


  const [test, setTest] = useState(dest);
  const [map, setMap] = useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] =
    useState<google.maps.places.SearchBox>();

  const [searchBoxB, setSearchBoxB] =
    useState<google.maps.places.SearchBox>();
  const [pointA, setPointA] = useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = useState<google.maps.LatLngLiteral>();

  // const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(
  //   orig
  // );
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(dest);

  const [response, setResponse] =
    useState<google.maps.DistanceMatrixResponse | null>(null);

  const position = {
    lat: -29.35913211079724,
    lng: -50.81280467550441,
  };



  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };


  // const onPlacesChangedA = () => {
  //   console.log('searchBoxA >> ', searchBoxA);


  //   const places = searchBoxA!.getPlaces();
  //   console.log(places);
  //   const place = places![0];
  //   const location = {
  //     lat: place?.geometry?.location?.lat() || 0,
  //     lng: place?.geometry?.location?.lng() || 0,
  //   };

  //   setPointA(location);
  //   setOrigin(null);
  //   setDestination(null);
  //   setResponse(null);
  //   map?.panTo(location);
  // };

  // const onPlacesChangedB = () => {
  //   console.log('searchBoxB >> ', searchBoxB);

  //   const places = searchBoxB!.getPlaces();
  //   console.log(places);
  //   const place = places![0];
  //   const location = {
  //     lat: place?.geometry?.location?.lat() || 0,
  //     lng: place?.geometry?.location?.lng() || 0,
  //   };
  //   setPointB(location);
  //   setOrigin(null);
  //   setDestination(null);
  //   setResponse(null);
  //   map?.panTo(location);
  // };

  // const traceRoute = () => {
  //   if (pointA && pointB) {

  //     console.log(">>>>>>>>>>", pointA, pointB)

  //     setOrigin(pointA);
  //     setDestination(pointB);
  //   }
  // };



  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {


      console.log('test >> ', origin, destination)

      return {
        origin,
        destination: dest,
        travelMode: "DRIVING",
        // provideRouteAlternatives: { origin, destination },
      };
    }, [origin, destination]);



  const directionsCallback = React.useCallback((res) => {

    console.log('call back >> ', res)

    if (res !== null && res.status === "OK") {
      setResponse(res);
      console.log(' resTruE >>> ', res);
    } else {
      console.log(' resFalse >>> ', res);
    }
  }, [origin, destination]);



  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);

  // AIzaSyCrC_ofgCEUhk-PaOGN3deVzh2yC4InQ58

  //AIzaSyBF_tXJO8TcRzP_dNgD5T_XydVi9xZmSXo
  return (
    <Map>
      <LoadScript
        googleMapsApiKey="AIzaSyBF_tXJO8TcRzP_dNgD5T_XydVi9xZmSXo"
        libraries={["places"]}
      >
        <GoogleMap

          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}

        >
          {/* <Address>
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <AddressField
                placeholder="Digite o endereço inicial"
                // value={orig}
              />

            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <AddressField
                placeholder="Digite o endereço final"
                value={dest}
              />
            </StandaloneSearchBox>
            <button onClick={traceRoute}>Traçar rota</button>
          </Address> */}

          {/* {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />} */}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </Map >
  );
};

