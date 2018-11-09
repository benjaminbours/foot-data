// const axios = require('axios');
var HTMLParser = require('node-html-parser');
// const root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
// console.log(root.querySelector(""));

// axios.get("https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/detaillierteleistungsdaten/spieler/58864/plus/")
//     .then((response) => {
//         const root = HTMLParser.parse(response.data);
//         // console.log(root.querySelectorAll(".ply.name").childNodes[0]);
//         console.log(root.querySelector("#yw1 .").toString());
//         // console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/leistungsdatendetails/spieler/58864/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        // const root = HTMLParser.parse(response.data);
        var test = page.evaluate(function () {
            var rows = document.querySelectorAll(".box");
            return rows[0];
            // console.log(rows);
            // for (var i = 0; i < rows.length; i++) {
            //     const goalNumber = rows[i].childNodes[5].textContent;
            //     goals.push(goalNumber);
            //     // console.log(rows[i]);
            // }
            // // console.log(document);
            // return goals;
            // return document.querySelector("#yw1 tbody tr").childNodes[5].textContent;
            //   return document.querySelectorAll("");
        });
        //         // console.log(root.querySelectorAll(".ply.name").childNodes[0]);
        // console.log(Object.keys(rows));
        // rows.map(function(item) {
        //     console.log(item.textContent);
        // });
        console.log(test);
    }
    phantom.exit();
});

// page.onLoadFinished = function() {

// }

// page.render