// controllers.js
const fetchAPI = require('../utils/fetchAPI');

async function getIndex(req, res) {
  try {
    // Fetch products and companies data from the API
    const [productsArray, companiesArray] = await Promise.all([
      fetchAPI('products'),
      fetchAPI('companies')
    ]);

    // Log fetched data for debugging
    console.log('Fetched Products:', productsArray);
    console.log('Fetched Companies:', companiesArray);

    // Render the 'index' view with the fetched data
    res.render('index', { productsArray, companiesArray });
  } catch (error) {
    // Handle errors and send a 500 Internal Server Error response
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
}

async function postCompare(req, res) {
  try {
    // Initialize an array to store requested data
    const requestedData = [];
    const productSelect = req.body.productSelect;
    const selectedCompanies = req.body.selectedCompanies || [];
    const sortBasis = req.body.sortBasis;
    const sortOrder = req.body.sortOrder;
    const topN = req.body.topN;

    console.log('Selected Product ID:', productSelect);
    console.log('Selected Companies:', selectedCompanies);

    // Fetch the list of companies
    const companiesArray = await fetchAPI('companies');

    // Iterate over selected companies and fetch product data
    for (const company of companiesArray) {
      if (selectedCompanies.includes(company.id)) {
        const allProducts = await fetchAPI(company.name);
        const foundProduct = allProducts.find(product => product.id == productSelect);
        if (foundProduct) {
          const { id, ...productWithoutId } = foundProduct;
          requestedData.push(productWithoutId);
        }
      }
    }

    // Sort the requested data based on sort basis and order
    if (sortBasis && sortOrder) {
      requestedData.sort((a, b) => {
        const aValue = a[sortBasis];
        const bValue = b[sortBasis];
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      });
    }

    // Get the top N items from the sorted data
    const topNData = requestedData.slice(0, topN);

    // Render the 'comparisonPage' view with the requested data
    res.render('comparisonPage', { requestedData: topNData, productSelect, selectedCompanies });
  } catch (error) {
    // Handle errors and send a 500 Internal Server Error response
    console.error('Error in comparison:', error.message);
    res.status(500).send('Error in comparison');
  }
}

// Export the functions to be used as controllers
module.exports = { getIndex, postCompare };
