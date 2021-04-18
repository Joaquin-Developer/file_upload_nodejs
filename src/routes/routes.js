const router = require("express").Router();

router.get("/", function(req, res) {
    res.render("index.html");
});

router.post("/upload_file", (req, res) => {
    let file = req.files.file;
    file.mv(`./files/${file.name}`, error => {
        console.log(`Subido: ${file.name}`);
        if(error) return res.status(500).send({ error : error });
        return res.status(200).send({ message : 'File upload' });
    });
});

module.exports = router;