document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const output = document.getElementById('output');
        const fileType = file.type.split('/')[0]; // 'image' or 'video'

        // Display the uploaded file
        if (fileType === 'image') {
            const reader = new FileReader();
            reader.onload = function(e) {
                output.innerHTML = `<h2>Uploaded Photo:</h2><img src="${e.target.result}" style="max-width: 100%; height: auto;">`;
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'video') {
            const reader = new FileReader();
            reader.onload = function(e) {
                output.innerHTML = `<h2>Uploaded Video:</h2><video controls style="max-width: 100%;"><source src="${e.target.result}" type="${file.type}">Your browser does not support the video tag.</video>`;
            };
            reader.readAsDataURL(file);
        }
    }
});
