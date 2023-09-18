const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUserById(req, res) {
      try {
        const userData = await User.findOneAndDelete(req.params.id);
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },




    async updateUserById(req, res) {
      try {
        //const userData = await User.findOneAndUpdate(req.params.id);
        //const userData = await User.findOneAndUpdate(req.params.userById, req.body, 
        // { new: true, }
        const userData = await User.findOneAndUpdate({ _id: req.params.userId }
          //const userData = await User.findOneAndUpdate({ _id: req.params.id }
           // const userData = await User.findOneAndUpdate(req.params.userId 
      );
  
        if (!userById) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
  
        res.json(userData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },











};
