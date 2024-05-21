import axios from 'axios';

const nominatim = () => {
  const client = axios.create({
    baseURL: "https://nominatim.openstreetmap.org",
    withCredentials: false,
  });
  client.interceptors.request.use((config) => {
    config.headers['User-Agent'] = `Mozilla 5.0`;
    return config;
  });

  const searchByStreetAndCity = async (street, city) => {
    if (!street) { throw Error("No street address provided"); }
    if (!city) { throw Error("No city provided"); }

    const result = await client.get(
      "/search",
      {
        params: {
          street,
          city,
          addressdetails: 1,
          format: "jsonv2",
          limit: 2,
        }
      },
    );
    return result.data[0]['address'];
  };

  return {
    searchByStreetAndCity,
  }
};

export default nominatim;
