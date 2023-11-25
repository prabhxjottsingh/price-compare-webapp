
async function fetchAPI(source) {
  try {
    const response = await fetch(`http://localhost:3000/${source}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${source} from API:`, error.message);
    return [];
  }
}

module.exports = fetchAPI;
