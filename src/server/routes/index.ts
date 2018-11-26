import express from "express";
import path from "path";

const viewsFolder = path.join(__dirname + "../../../views");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    console.log(`${viewsFolder}/index.html`);
    res.sendFile(`${viewsFolder}/index.html`);
});

/* GET admin home page. */
router.get("/admin", (req, res, next) => {
    console.log(`${viewsFolder}/admin/index.html`);
    res.sendFile(`${viewsFolder}/admin/index.html`);
});

export default router;
