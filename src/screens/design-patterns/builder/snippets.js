const getBeerById = () => (
  `
  function getBeerById(id, callback) {
    // Make request for beer by ID, then return the beer data.
    asyncRequest('GET', 'beer.uri?id=' + id, function (resp) {
      // callback response
      callback(resp.responseText);
    });
  }
`
);

const getBeerByIdBridge = () => (
  `
  var el = document.querySelector('#test');
  
  el.addEventListener('click', getBeerByIdBridge, false);
  
  function getBeerByIdBridge(e) {
    getBeerById(this.id, function (beer) {
      console.log('Requested Beer: ' + beer);
    });
  }
`
);

export {
  getBeerById,
  getBeerByIdBridge,
}