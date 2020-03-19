const axios = require("axios");

module.exports = app => {
    app.get('api/search', (req, res) => {
        console.log('api/search hit in api-route file')
        const initSearch = 'pie'
    });
};