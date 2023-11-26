const fetchAPI = require('../utils/fetchAPI');

async function postCompare(req, res) {
  try {
    const requestedData = [];
    const productSelect = req.body.productSelect;
    const selectedCompanies = req.body.selectedCompanies || [];
    const sortBasis = req.body.sortBasis;
    const sortOrder = req.body.sortOrder;
    const topN = req.body.topN;

    console.log('Selected Product ID:', productSelect);
    console.log('Selected Companies:', selectedCompanies);

    const companiesArray = await fetchAPI('companies');

    // Fetch products from selected companies and format data
    await Promise.all(companiesArray
      .filter(company => selectedCompanies.includes(company.id))
      .map(async (company) => {
        const allProducts = await fetchAPI(company.name);
        const foundProduct = allProducts.find(product => product.id === productSelect);
        if (foundProduct) {
          const { id, ...productWithoutId } = foundProduct;
          requestedData.push(productWithoutId);
        }
      })
    );

    // Sort requested data based on sort basis and order
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
    console.error('Error in comparison:', error.message);
    res.status(500).send('Error in comparison');
  }
}

module.exports = postCompare;
