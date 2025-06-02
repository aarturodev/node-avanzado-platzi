import notifier from "../notifier.js";

function sendEmailNotification(user) {
  // Simulate sending an email notification
  console.log(`Sending email to ${user.email}...`);
  console.log(`Email sent to ${user.email} with subject: Welcome ${user.name}!`);
}

// Listen for the userRegistered event
notifier.on("userRegistered", (user) => {
  sendEmailNotification(user);
});

export default sendEmailNotification;