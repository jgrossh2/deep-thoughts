const { User, Thought } = require('../models');
// data coming from above const, so no parameters needed here
// but can be set up to pass the data source, aka database model
// use parents as a placeholder to get to username in second parameter
const resolvers = {
    Query: {
      thoughts: async (parents, { username }) => {
          const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      thought: async (parent, { _id}) => {
          return Thought.findOne({ _id });
      }, 
    // get all users
      users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
      },
    //   get a user by username
    user: async (parent, { username }) => {
        return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
    },
    }
  };
  
  module.exports = resolvers;