// Import the required 'axios' library
const axios = require('axios');

// Define the function to communicate with the elxyz API
async function elxyz(prompt) {
  // Prepare the data to be sent in the POST request
  let postData = {
    prompt: prompt,
    sessionId: '-', // Session ID is currently set to an empty string
    character: `Kamu adalah elxyz, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`
  };

  try {
    // Send a POST request to the elxyz API
    let response = await axios({
      url: "https://nodec.mediathektv.com",
      method: 'POST',
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error during chat request:", error);
    // Return an error message if the request fails
    return "An error occurred during the chat process.";
  }
}

// Define the function to send requests indefinitely
async function sendRequestsIndefinitely() {
  const requestsPerSecond = 1000; // Number of requests to send per second

  while (true) {
    let promises = []; // Array to hold the promises for each request
    let startTime = Date.now(); // Record the start time for the requests

    // Send the desired number of requests in one second
    for (let i = 0; i < requestsPerSecond; i++) {
      promises.push(elxyz(`nama gw zaki, nama lu siapa?`)); // Send a request with the specified prompt
    }

    // Wait for all the requests to complete
    await Promise.all(promises);

    let endTime = Date.now(); // Record the end time for the requests
    let elapsedTime = endTime - startTime; // Calculate the time taken for the requests

    // If requests were sent faster than 1 second, wait for the remaining time
    if (elapsedTime < 1000) {
      await new Promise(resolve => setTimeout(resolve, 1000 - elapsedTime));
    }

    // Log the number of requests sent and the time taken
    console.log(`Executed ${requestsPerSecond} requests in ${elapsedTime / 1000} seconds`);
  }
}

// Start sending requests indefinitely
sendRequestsIndefinitely();
