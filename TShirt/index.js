// Function to generate the invoice HTML

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from actually submitting
      vaildate();
      openInvoiceWindow(); // Open the invoice in a new window
    });
  }
});

function generateInvoice() {
  // Retrieve form input values
  const name = document.getElementById('text_input').value.trim();
  const email = document.getElementById('email_input').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const tagline = document.getElementById('text_input').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const color = document.getElementById('color_input').value.trim();
  const file = document.getElementById('file_input').value.trim();
  const budget = document.getElementById('range_input').value.trim();
  const specialRequest = document.getElementById('text_input').value.trim();
  const size = document.getElementById('size').value.trim();
  const quantity = document.getElementById('number_input').value.trim();

  


  // Create an invoice HTML
  const invoiceHTML = `
      <html>
      <head>
          <title>Invoice</title>
      </head>
      <body>
          <h2>Invoice</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Delivery Address:</strong> ${address}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Tagline:</strong> ${tagline}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Color:</strong> ${color}</p>
          <p><strong>Budget:</strong> $${budget}</p>
          <p><strong>Special Request:</strong> ${specialRequest}</p>
          <p><strong>Size:</strong> ${size}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
      </body >
      </html >
  `;
  
    return invoiceHTML;
  }
  
  // Function to open a new window with the invoice content
  function openInvoiceWindow() {
    const invoiceHTML = generateInvoice();
  
    // Open a new window or tab with the invoice content
    const newWindow = window.open('', 'Invoice', 'width=600,height=400');
    newWindow.document.open();
    newWindow.document.write(invoiceHTML);
    newWindow.document.close();
  }
  
  // Add a submit event listener to the form
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    openInvoiceWindow(); // Open the invoice in a new window
  });
  
  function vaildate(){
    const name = document.getElementById('text_input').value.trim();
    const email = document.getElementById('email_input').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const tagline = document.getElementById('text_input').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color_input').value.trim();
    const file = document.getElementById('file_input').value.trim();
    const budget = document.getElementById('range_input').value.trim();
    const specialRequest = document.getElementById('text_input').value.trim();
    const size = document.getElementById('size').value.trim();
    const quantity = document.getElementById('number_input').value.trim();

    if(name.length < 2){
      alert("Enter a valid name")
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Name should not contain numbers.");
      return;
  }
    if(phone.length != 10 ){
      alert("Number should be of 10 digits")
    }
    if(phone[0] == 0){
      alert("Number shoulden't start from 0")
    }

  }