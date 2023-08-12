import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    //since its js, enclose with {}
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file have been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyerror) {
    } else {
    }
  });

/*
Used the inquirer npm package to get user input
used the qr-image package to turn the user entered URL into a QR code image
created a text file to save the user input using the native fs node module
*/
