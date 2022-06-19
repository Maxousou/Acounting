import express from "express";
import PersoModel from "../models/PersoModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    body: { titre, entry },
  } = req;
  const entries = Number(entry);

  try {
    const item = await PersoModel.query().insertAndFetch({
      titre,
      entry,
    });
    res.send(item);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).send({ error: "oops." });
  }
});
router.get("/", async (req, res) => {
  const query = PersoModel.query();

  res.send(await query);
});
router.get("/:id", async (req, res) => {
  const {
    params: { id },
  } = req;

  const query = PersoModel.query();

  if (id) {
    query.findById(id);
  }

  res.send(await query);
});
router.delete("/:id", async (req, res) => {
  const {
    params: { id },
  } = req;

  const item = await PersoModel.query().findById(id);

  if (!item) {
    res.status(404).send({ error: "not found" });
  }

  await item.$query().delete();
  res.send(item);
});

router.put("/:id", async (req, res) => {
  const {
    params: { id },
    body: { titre, entry },
  } = req;

  const item = await PersoModel.query().findById(id);
  if (!item) {
    res.status(404).send({ error: "not found" });
    return;
  }

  try {
    const updatedItem = await PersoModel.query().patchAndFetchById(id, {
      titre,
      entry,
    });
    res.send(updatedItem);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.send({ error: "oops." });
  }
});

export default router;
