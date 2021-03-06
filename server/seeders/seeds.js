// add a fake account to db for development
const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await User.collection.insertMany([ { username: 'admin', password: 'password', email: 'email@email.com' } ]);

  console.log('all done!');
  process.exit(0);
});



// const faker = require('faker');

// const db = require('../config/connection');
// const { User } = require('../models');

// db.once('open', async () => {
//   await User.deleteMany({});

//   // create user data
//   const userData = [];

//   for (let i = 0; i < 5; i++) {
//     const username = faker.internet.userName();
//     const email = faker.internet.email(username);
//     const password = faker.internet.password();

//     userData.push({ username, email, password });
//   }

//   await User.collection.insertMany(userData);

//   // Developer Seed Data 
// // {
// //   "Developer": [
// //     {
// //       "preferredRole": "Front End",
// //       "language": "HTML+CSS",
// //       "length": "One month",
// //       "commitment": "Full-Time",
// //       "startDate": "Immediately",
// //       "id": 1
// //     },
// //     {
// //       "preferredRole": "Back End",
// //       "language": "JavaScript",
// //       "length": "Two Weeks Or Less",
// //       "commitment": "Part-Time",
// //       "startDate": "One To Two Weeks",
// //       "id": 2
// //     },
// //     {
// //       "preferredRole": "Full Stack",
// //       "language": "React",
// //       "length": "Three Months",
// //       "commitment": "Hourly",
// //       "startDate": "One Month",
// //       "id": 3
// //     },
// //     {
// //       "preferredRole": "Back End",
// //       "language": "Python",
// //       "length": "Six Months",
// //       "commitment": "Full-Time",
// //       "startDate": "I'll Decide Later",
// //       "id": 4
// //     },
// //     {
// //       "preferredRole": "Front End",
// //       "language": "React",
// //       "length": "One month",
// //       "commitment": "Full-Time",
// //       "startDate": "Immediately",
// //       "id": 5
// //     }
// //   ]
// // }
// //   for (let i = 0; i < 5; i++) {
// //     const title = faker.company.catchPhrase();
// //     const role = faker.name.findName();
// //     const time = faker.random.number();
// //     const description = faker.lorem.paragraphs();

// //     devData.push({ title, role, time, description });
// //   }
// //   await devData.collection.insertMany(bookData);

//   console.log('all done!');
//   process.exit(0);
// });
