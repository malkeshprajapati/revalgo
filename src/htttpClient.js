const useApiRequest = () => {
  const apiRequest = async (url, method = "GET", data = null, headers = {}) => {
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };

      if (data && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
        options.body = JSON.stringify(data);
      }

      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const completeUrl = `${baseUrl}${url}`;
      const response = await fetch(completeUrl, options);

      if (!response.ok) {
        const res = await response.json();

        return {
          status: response.status,
          statusText: response.statusText,
          message: res.message,
        };
      } else {
        return await response.json();
      }
    } catch (error) {
      return { error };
    }
  };

  return apiRequest;
};

export default useApiRequest;
