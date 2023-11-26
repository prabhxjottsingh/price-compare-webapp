// Importing the fetchAPI utility function
const fetchAPI = require('../utils/fetchAPI');

// Controller function to handle rendering the index page
async function getIndex(req, res) {
  try {
    // Fetching products and companies concurrently using Promise.all
    const [productsArray, companiesArray] = await Promise.all([
      fetchAPI('products'), // Fetching products data
      fetchAPI('companies') // Fetching companies data
    ]);

    // Logging fetched data for debugging purposes
    console.log('Fetched Products:', productsArray);
    console.log('Fetched Companies:', companiesArray);

    // Rendering the 'index' view with fetched data
    res.render('index', { productsArray, companiesArray });
  } catch (error) {
    // Handling errors that occur during data fetching
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
}

// Exporting the getIndex function to be used by other modules
module.exports = getIndex;
