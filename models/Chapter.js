const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema(
  {
    name: String,
    questionBank: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "questionBank",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

ChapterSchema.virtual("questions", {
  ref: "Question",
  localField: "_id",
  foreignField: "chapter",
  justOne: false,
});
module.exports = mongoose.model("Chapter", ChapterSchema);
