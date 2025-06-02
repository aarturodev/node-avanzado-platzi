import notifier from "../notifier.js";

function logStats(user) {
  // Simulate logging user registration stats
  console.log(`User registered: ${user.name}, Email: ${user.email}`);
}

// Listen for the userRegistered event
notifier.on("userRegistered", (user) => {
  logStats(user);
});

export default logStats;