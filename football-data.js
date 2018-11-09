const axios = require('axios');

axios.get("http://api.football-data.org/v2/competitions/2102", {
    headers: {
        'X-Auth-Token': 'f8c4f8d2292c47699a22dc05e5afc3c4',
    }
})
    .then((response) => {
        console.log(response.data.competitions);
    })
    .catch(function (error) {
        console.log(error);
    });