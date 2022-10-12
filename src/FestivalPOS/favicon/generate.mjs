import { favicons } from "favicons";
import fs from "fs";
import { EOL as newline } from "os";
import path from "path";

const response = await favicons("favicon.svg", {
  appName: "FestivalPOS",
  appDescription: "FestivalPOS",
  developerName: "Rasmus Melchior Jacobsen",
  developerURL: "https://github.com/rmja",
  background: "#f3f3f4",
  theme_color: "#550000",
  orientation: "portrait-primary",
});

const promises = [];
for (const file of response.images) {
  promises.push(
    fs.promises.writeFile(path.resolve("../wwwroot/", file.name), file.contents)
  );
}

for (const file of response.files) {
  promises.push(
    fs.promises.writeFile(path.resolve("../wwwroot/", file.name), file.contents)
  );
}

promises.push(
  fs.promises.writeFile(
    path.resolve("./snippet.html"),
    response.html.join(newline)
  )
);

await Promise.all(promises);
