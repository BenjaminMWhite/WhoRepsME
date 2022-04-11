const db = require('./connection')
const { User } = require('../models')

db.once(`open`, async () => {
    await User.deleteMany();

    await User.create({
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        state: 'ohio',
        city: 'columbus',
        address: '1000 columbus drive'
    });

    console.log('website has been seeded!!');

    process.exit();
})