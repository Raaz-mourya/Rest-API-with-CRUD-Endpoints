const User = require("../model/user");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({},{password: 0});
    res.status(200).json(users);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;

  // const user = await User.findOne({ id: id }).exec();
  try {
    const user = await User.findById(id,{password: 0});
    // console.log(user);
    res.status(302).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.replaceUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
