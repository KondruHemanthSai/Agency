const { Jimp } = require('jimp');
async function run() {
    try {
        const img = await Jimp.read('public/favicon.png');
        console.log("Original size:", img.bitmap.width, "x", img.bitmap.height);
        
        let minX = img.bitmap.width, minY = img.bitmap.height, maxX = 0, maxY = 0;
        
        for (let y = 0; y < img.bitmap.height; y++) {
            for (let x = 0; x < img.bitmap.width; x++) {
                const color = img.getPixelColor(x, y);
                const a = color & 0xFF; // Jimp v1 uses RGBA hex format, so A is the last byte
                if (a > 10) { // Not fully transparent
                    if (x < minX) minX = x;
                    if (y < minY) minY = y;
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }
        }
        
        const w = maxX - minX;
        const h = maxY - minY;
        
        console.log(`Found bounds: x:${minX}, y:${minY}, w:${w}, h:${h}`);
        
        img.crop({x: minX, y: minY, w: w, h: h});
        
        // Add 10% padding
        const pad = Math.floor(Math.max(w, h) * 0.1);
        const s = Math.max(w, h) + pad * 2;
        
        // Create new background
        const bg = new Jimp({ width: s, height: s, color: 0x00000000 });
        bg.composite(img, (s - w) / 2, (s - h) / 2);
        
        bg.resize({ w: 512, h: 512 });
        await bg.write('public/favicon.png');
        console.log("success");
    } catch(e) {
        console.error(e);
    }
}
run();
