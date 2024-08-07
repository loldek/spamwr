const axios = require('axios');

async function elxyz(prompt) {
  let postData = {
    prompt: prompt,
    sessionId: '-',
    character: `Kamu adalah elxyz, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`
  };

  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: 'POST',
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
  }
}

async function main() {
  let counter = 0;
  while (true) {
    let response = await elxyz(`nama gw zaki, nama lu siapa?`);
    console.log(response);
    counter++;
    await new Promise(resolve => setTimeout(resolve, 1));
  }
}

main();
