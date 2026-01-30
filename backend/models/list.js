const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  items: [
    {
      product: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("List", listSchema);
