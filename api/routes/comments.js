const router = require("express").Router();
const User = require("../models/User");
const Comment = require("../models/Comment");

//CREATE Comment
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Comment
// router.put("/:id", async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.params.id);
//     if (comment.username === req.body.username) {
//       try {
//         const updatedComment = await Comment.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedComment);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your Comment!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE COMMENT
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.username === req.body.username || req.body.username === "admin") {
      try {
        await comment.delete();
        res.status(200).json("Comment has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your comment!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Comment
// router.get("/:id", async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.params.id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET ALL Comments
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let comments;
      comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
