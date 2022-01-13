const { User } = require("../models");

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

            // throw new AuthenticationError("Not logged in");
        }
    },
};

module.exports = resolvers;