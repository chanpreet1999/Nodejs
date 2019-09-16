var fs = require("fs");
fs.unlink("demoFile2.txt", function (err) {
    if (err) {
        throw err
    }
    console.log("File Deleted Successfully");
});