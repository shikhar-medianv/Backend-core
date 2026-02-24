// Node Core Modules

const fs = require('fs')
const path = require('path')
const os = require('os')

// Path Module
const filePath = path.join(__dirname, 'text.txt')

// fs Module
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err.message)
        return
    }

    console.log("📄 File Content:")
    console.log(data)
});

// OS Module
console.log("\n💻 System Information:")
console.log("Platform:", os.platform())
console.log("OS Type:", os.type())
console.log("Total Memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB")
console.log("Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB")
console.log("CPU Cores:", os.cpus().length)
console.log("Home Directory:", os.homedir())
console.log("-------------------")