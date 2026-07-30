const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "82.197.83.206",
            user: "u484024635",
            password: "Ffenil@123",
            secure: false
        });
        console.log("Connected!");

        const targetDir = "domains/orioninfraworld.com/public_html";
        console.log(`Uploading 'dist/public' to FTP directory: '${targetDir}'`);
        
        // Ensure 404.html is copied for fallback routing just like in GitHub Pages
        fs.copyFileSync("dist/public/index.html", "dist/public/404.html");

        // Navigate to the correct directory
        await client.ensureDir(targetDir);
        
        // Upload everything
        await client.uploadFromDir("dist/public");

        console.log("Upload completed successfully to the correct domain folder!");
    } catch(err) {
        console.error("FTP Error:", err);
    }
    client.close();
}

deploy();
