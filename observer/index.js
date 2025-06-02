import './listeners/emailListener.js';
import './listeners/statsListener.js';

import registerUser from './Userregistration.js';

const user1 = {
  name: 'John Doe',
  email: 'jon@example.com',
  password: 'password123',
};

const user2 = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  password: 'password456',
};

// Register users
registerUser(user1);
registerUser(user2);