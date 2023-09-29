const users = require('../models/userModel')

exports.getAllUsers = async(req, res) => {
  const data = await users.find({});
  res.json(data);
}

exports.getUser = async (req, res) =>{
  const userId =req.params.id; 
  const data = await users.findById(userId)
  if (!data) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(data);
}

exports.addUser = async (req, res) =>{
    await users.create(req.body)
    res.status(201).json({success: 'user created successfully'});
}

exports.editUser = async (req, res) =>{
  try {
    const userId = req.params.id;
    const updates = req.body;
    const updatedUser = await users.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({updatedUser, success: 'user updated successfuly!'});
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.deleteUser = async (req, res) =>{
  try {
    const userId = req.params.id;
    const deletedUser = await users.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}