export const fetchWithAuth = async (url, options = {}) => {
  let accessToken = localStorage.getItem('accessToken');
  while (!accessToken) {
    await new Promise(resolve => setTimeout(resolve, 100));
    accessToken = localStorage.getItem('accessToken');
  }

  const headers = {
    ...options.headers,
    "Authorization": `Bearer ${accessToken}`,
    'Content-Type': 'application/json',

  };
  
  try {
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }
    return response;
  } catch (error) {
    throw new Error(error.message || "Request failed");
  }
};
