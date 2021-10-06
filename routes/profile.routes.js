const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const auth = require("../middleware/auth.middleware");

router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.patch("/:id/edit", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      avatar: req.body.avatar,
    });
    res.status(201).json(user.avatar);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
