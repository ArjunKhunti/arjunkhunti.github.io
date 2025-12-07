
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const walk = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (/\.(png|jpe?g)$/i.test(file)) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
};

const convertImages = async () => {
    const files = walk('public/assets');
    console.log(`Found ${files.length} images to convert.`);

    for (const file of files) {
        const ext = path.extname(file);
        const newFile = file.replace(ext, '.webp');

        console.log(`Converting ${file} -> ${newFile}`);

        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(newFile);
            console.log(`✅ Converted: ${newFile}`);
        } catch (err) {
            console.error(`❌ Error converting ${file}:`, err);
        }
    }
};

convertImages();
