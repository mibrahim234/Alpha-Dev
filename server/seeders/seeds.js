const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 5; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  await User.collection.insertMany(userData);


//   for (let i = 0; i < 5; i++) {
//     const title = faker.company.catchPhrase();
//     const role = faker.name.findName();
//     const time = faker.random.number();
//     const description = faker.lorem.paragraphs();

//     devData.push({ title, role, time, description });
//   }
//   await devData.collection.insertMany(bookData);

  console.log('all done!');
  process.exit(0);
});
