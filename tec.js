function registerStudent() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const course = document.getElementById('course').value;

  // Send the data to the server to register the student
  // You can use AJAX, fetch API, or any other method to send the data to the server
  // For this example, we will just log the data to the console
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Date of Birth: ${dob}`);
  console.log(`Course: ${course}`);
}
