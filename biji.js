const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.post('https://ngl.link/api/submit', 'username=menfessmanda1&question=hai, aku hengker 😂&deviceId=&gameSlug=&referrer=', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://ngl.link/menfessmanda1'
      }
    });
    if (response.status === 200) {
      console.log('Pesan terkirim');
    } else {
      console.log('Gagal mengirim');
    }
  } catch (error) {
    console.error('Gagal mengirim');
  }
};

const sendRequestsPerSecond = async (requestsPerSecond) => {
  const interval = 1000 / requestsPerSecond;

  setInterval(() => {
    for (let i = 0; i < requestsPerSecond; i++) {
      sendRequest();
    }
  }, interval);
};

sendRequestsPerSecond(10);
