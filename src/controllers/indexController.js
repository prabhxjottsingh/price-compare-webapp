const fetchAPI = require('../utils/fetchAPI');

async function getIndex(req, res) {
  try {
    const [productsArray, companiesArray] = await Promise.all([
      fetchAPI('products'),
      fetchAPI('companies')
    ]);

    console.log('Fetched Products:', productsArray);
    console.log('Fetched Companies:', companiesArray);

    res.render('index', { productsArray, companiesArray });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = getIndex;
