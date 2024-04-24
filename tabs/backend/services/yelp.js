import axios from 'axios';

const yelp = () => {
  const client = axios.create({
    baseURL: "https://api.yelp.com/v3",
    withCredentials: false,
  });
  client.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${process.env.YELP_API_KEY}`;
    return config;
  });

  const searchByTermAndLocation = async (term, location) => {
    if (!term) { throw Error("No term provided"); }
    if (!location) { throw Error("No location provided"); }

    const result = await client.get(
      "/businesses/search",
      { params: { term, location } },
    );
    return result;
  };

  return {
    searchByTermAndLocation,
  }
};

export default yelp;
