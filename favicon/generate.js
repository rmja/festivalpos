const favicons = require("favicons");
const fs = require("fs");
const path = require("path");

const newline = require('os').EOL;

favicons("favicon.svg", {
    appName: 'FestivalPOS',
    appDescription: 'FestivalPOS',
    developerName: 'Rasmus Melchior Jacobsen',
    developerURL: 'https://github.com/rmja',
    background: '#f3f3f4',
    theme_color: '#550000'
}, async (error, response) => {
    if (error) {
        console.error(error);
        return;
    }

    const promises = [];
    for (const file of response.images) {
        promises.push(fs.writeFileSync(path.resolve('../wwwroot/', file.name), file.contents));
    }

    for (const file of response.files) {
        promises.push(fs.writeFileSync(path.resolve('../wwwroot/', file.name), file.contents));
    }

    promises.push(fs.writeFileSync(path.resolve('./snippet.html'), response.html.join(newline)));

    await Promise.all(promises);
});
