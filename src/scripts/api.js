const API_KEY = "45a5da8097414999a13193103250904";
const API_URL = "http://api.weatherapi.com/v1";

const api = {
    // Headers for API requests
  headers: {
    'key': API_KEY,
    'q': 'auto:ip'
  },

    async getCurrentWeather() {
        try {
            const response = await fetch(`${API_URL}/current.json?key=${API_KEY}&q=auto:ip&aqi=no`);
            
            if (!response.ok) {
              throw new Error('Failed to fetch current weather');
            }
            
            return await response.json();
          } catch (error) {
            console.error('Error fetching current weather:', error);
            throw error;
          }
    }
};

export default api;