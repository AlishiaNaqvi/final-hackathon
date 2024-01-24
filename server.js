// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
// server.js
const PORT = process.env.PORT || 3002;


app.use(express.json());

const users = [];

app.post('/signup', async (req, res) => {
  // ... (existing signup route logic)
});

app.post('/login', async (req, res) => {
  // ... (existing login route logic)
});

// Simple route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the authentication server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// // server.js
// const express = require('express');
// const bcrypt = require('bcrypt');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());

// const mongoURI = 'your-mongodb-connection-string';
// const dbName = 'your-database-name';

// async function connectToMongoDB() {
//   const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     return client.db(dbName);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }

// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const db = await connectToMongoDB();
//     const usersCollection = db.collection('users');

//     await usersCollection.insertOne({
//       username,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ... (other routes)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
