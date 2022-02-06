export const fetchingData = async () => {

      const response = await fetch("http://localhost:4500/quote");
      let data = await response.json();
      return data;
  };