const connection = require('../config/connection');
const { User, Thought,Reaction } = require('../models');
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
const users = [
  {
    username:'Amy',
    email:'amy@gmail.com',
  },{
  username:'Tam',
    email:'tam@gmail.com',
    },{
      username:'Bonie',
      email:'bonie@gmail.com',
    },{
      username:'Fonda',
      email:'fonda@gmail.com',
    },{
      username:'Vikki',
      email:'vikki@gmail.com',
    },{
    username:'Tony',
    email:'tony@gmail.com',
    }
  ];
  const thoughts = [
    {
        thoughtText: "Have lots of work to finish",
        username: "Tam"
    },
    {
        thoughtText: "Its a good app",
        username: "Bonie"
    }
];
await User.collection.insertMany(users);

// Add thoughts to the collection and await the results
await Thought.collection.insertMany(thoughts);

// Log out the seed data to indicate what should appear in the database
console.table(users);
console.table(thoughts);
console.info('Seeding complete! 🌱');
process.exit(0);
  });