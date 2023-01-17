import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Signal from '../images/signal.gif';

function HelpLanding() {
  const [loading, setLoading] = useState(false);
  const { userlocale, username } = useParams();
  const [origin, setOrigin] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getAddress = async (location) => {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
    );
    const address = response.data.results[0].formatted_address;
    setOrigin(address);
  };

  const getOrigin = () => {
    setLoading(() => true);
    navigator.geolocation.getCurrentPosition((location) => {
      getAddress(location);
      setLoading(() => false);
    });
    setOrigin('');
  };

  const routeToDriver = () => {
    window.location.replace(
      `https://www.google.com/maps/dir/?api=1&origin=${origin}+singapore&destination=${userlocale}+singapore&travelmode=driving`
    );
  };

  useEffect(() => {
    getOrigin();
  }, []);

  //   console.log(userlocale);
  //   console.log(username);
  return (
    <div className="min-h-full h-[100vh] w-full flex flex-col justify-center items-center gap-4">
      {loading ? (
        <img className="mix-blend-multiply" src={Signal} alt="Loading.." />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-400">HDB Carpark App</h1>
          <h1 className="font-bold text-4xl text-red-600">
            {username} is in trouble and needs your help!!!
          </h1>
          <h1 className="font-bold text-2xl text-blue-400">
            We have received his SOS and sent you a route to reach his location
          </h1>
          <p className="font-semibold">By clicking on the button below</p>
          <p className="text-red-400 font-semibold">
            You have agreed to the terms of releasing your location to us
          </p>
          <button
            onClick={routeToDriver}
            className="btn btn-circle px-4 text-white hover:bg-green-500 hover:border-green-500"
          >
            Go
          </button>
        </>
      )}
    </div>
  );
}

export default HelpLanding;
