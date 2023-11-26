// Function to fetch data from the Mock API
async function fetchAPI(source) {
  try {
    //fetching the data from the Mock API
    const response = await fetch(`http://localhost:3000/${source}`);

    // Parsing the response body as JSON
    return await response.json();
  } catch (error) {
    // Handling errors in fetching data from the API
    console.error(`Error fetching ${source} from API:`, error.message);
    return [];
  }
}

module.exports = fetchAPI;
