import notifier from "./notifier.js";

function registerUser(user) {
  // Emit an event when a user registers
  notifier.emit("userRegistered", user);

  return user;
}

export default registerUser;
