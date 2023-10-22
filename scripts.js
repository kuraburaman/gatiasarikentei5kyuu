const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 黒枠の画像をロード
const baseImage = new Image();
//baseImage.crossOrigin = 'anonymous';  // この行を追加
baseImage.src = 'gatiasari.png';  // 黒枠の画像のパスを指定してください
baseImage.onload = function() {
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);  // この行を修正
}

function previewImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadedImage = new Image();
            //uploadedImage.crossOrigin = 'anonymous';  // この行を追加
            uploadedImage.src = e.target.result;
            uploadedImage.onload = function() {
                // ここで赤枠の位置とサイズを指定してください
                ctx.drawImage(uploadedImage, 326, 213, 100, -111);
            }
        }
        reader.readAsDataURL(file);
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'combined_image.png';
    link.href = canvas.toDataURL();
    link.click();
}
