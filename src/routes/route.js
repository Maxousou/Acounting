import express from "express";
import PersoModel from "../models/PersoModel";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    body: { title, entry },
  } = req;
  const entries = Number(entry);

  try {
    const post = await PersoModel.query().insertAndFetch({
      title,
      entries,
    });
    res.send(post);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).send({ error: "oops." });
  }
});
router.get("/:commentId", comments_get);
router.delete("/:commentId", comments_delete);
router.put("/:id", comments_update);

export default router;
