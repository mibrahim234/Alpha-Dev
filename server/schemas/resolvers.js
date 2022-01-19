const { User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().select("-__v -password");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select("-__v -password");
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select("-__v -password");

                return userData;
            }

            throw new AuthenticationError("Not logged in");
        }
    },
    
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user)
            return { token, user };

        }, 
        updateDevUser: async (parent, args, context) => {
            // console.log(args)
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                {position: args.position},
                {new: true}
            )
            return updatedUser
        },
        updateCompanyUser: async (parent, args, context) => {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                {$push: {position: args.CompanyDetails}},
                {new: true}
            )
            return updatedUser
        },
    }
};

module.exports = resolvers;