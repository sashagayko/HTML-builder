const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'secret-folder');
// console.log(path.join(directoryPath, 'style.css'));
fs.readdir(directoryPath, {withFileTypes: true}, (err,files) => {
    if (err) {
        console.log(err);
    }else{
        files.forEach(el => {
            if (el.isFile()) {
                fs.stat(path.join(directoryPath, el.name), (err, stats)=> {
                    if (err) {
                        console.log(err);
                    } else {
                        const fileName = el.name.split('.')[0];
                        const fileExt = el.name.split('.')[1];
                        console.log(`${fileName} - ${fileExt} - ${stats.size}b`);
                    }
                })
            }
        });
    }
})
