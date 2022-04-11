const { AuthenticationError } = require('apollo-server-express');
// const { User } = require(``)
// TODO: this is where we pull in the model of the user with the info they gave at sign up
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user_id).populate({
                    populate: ''
                    // TODO: this is where we need to put in the last looked at person/ stared person
                })
            }
        }
    }
}