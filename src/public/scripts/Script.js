
const file = document.getElementById("load_file");

document.querySelector("#uploadFile").addEventListener("click", (evt) => {
    evt.preventDefault();
    uploadFile(file.files[0]);
})

function uploadFile(file) {
    fetch("/upload_file", {
        method: 'POST',
        body: file,
        headers:{ 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))
    .then(response => console.log('Response: ', response));
}
