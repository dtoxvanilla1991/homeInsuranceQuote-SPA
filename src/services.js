const quoteUrl = "http://localhost:4500/quote";

export const fetchingData = async () => {

      const response = await fetch(quoteUrl);
      let data = await response.json();
      return data;
  };