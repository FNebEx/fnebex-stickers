const fetch = require('node-fetch');

module.exports = () => {
  
  return fetch('https://api.airtable.com/v0/appN16FUXQMKEFXMG/Sticker%20Info', {
    headers: {
      'Authorization': 'Bearer keyx8ptYtJr13jjs6'
    }
  })
  .then(response => response.json())
  .then(data => data.records);
}