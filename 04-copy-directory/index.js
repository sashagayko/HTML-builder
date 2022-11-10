const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'files-copy');
fs.mkdir(filePath, { recursive: true }, (err)=> {
    if (err) {
        console.log(err);
    }
})
fs.readdir(path.join(__dirname, 'files'), (err, files)=> {
    if (err) {
        console.log(err);
    } else {
        files.forEach(el => {
            fs.copyFile(path.join(__dirname,'files', `${el}`), path.join(__dirname,'files-copy', `${el}`), err=> {
                if (err) {
                    console.log(err);
                }
            })
        });
    }
})
