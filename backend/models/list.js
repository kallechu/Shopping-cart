const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  items: [
    {
      product: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("List", listSchema);
