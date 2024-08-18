const bankCards = [
    "Visa",
    "MasterCard",
    "American Express",
    "Discover",
    "Diners Club"
  ];
  
  const shippingAddresses = [
    "1234 Elm Street, Cityville",
    "5678 Maple Avenue, Townsville",
    "9101 Oak Road, Villageland",
    "1212 Pine Lane, Hamletville",
    "1313 Cedar Court, Villageburg"
  ];
  
  function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    // Replace 'your_password' with the correct password for validation
    if (passwordInput === 'password') {
      // Change the background image
      document.body.classList.add("exit-background");
  
      // Hide password box and display other elements
      document.getElementById("password-box").style.display = "none";
      document.getElementById("bank-card-box").style.display = "block";
      document.getElementById("shipping-address-box").style.display = "block";
      document.getElementById("order-summary-box").style.display = "block";
      document.getElementById("place-order-button").style.display = "block";
  
      generateBankCardOptions();
      generateShippingAddressOptions();
      generateOrderSummary();
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  
  
  
  function generateBankCardOptions() {
    const bankCardSelect = document.getElementById("bank-card-select");
    bankCards.forEach((card) => {
      const option = document.createElement("option");
      option.value = card;
      option.innerText = card;
      bankCardSelect.appendChild(option);
    });
  }
  
  function generateShippingAddressOptions() {
    const shippingAddressSelect = document.getElementById("shipping-address-select");
    shippingAddresses.forEach((address) => {
      const option = document.createElement("option");
      option.value = address;
      option.innerText = address;
      shippingAddressSelect.appendChild(option);
    });
  }
  
  function generateOrderSummary() {
    const orderItem = document.getElementById("order-item");
    const orderPrice = document.getElementById("order-price");
    const orderShippingDate = document.getElementById("order-shipping-date");
  
    // Replace with your logic to generate random items and prices
    const items = ["Gadget 1", "Gadget 2", "Gadget 3", "Gadget 4", "Gadget 5"];
    const prices = ["$99.99", "$149.99", "$199.99", "$249.99", "$299.99"];
    const shippingDates = ["August 15, 2023", "August 18, 2023", "August 20, 2023", "August 22, 2023", "August 25, 2023"];
  
    const randomIndex = Math.floor(Math.random() * items.length);
  
    orderItem.innerText += items[randomIndex];
    orderPrice.innerText += prices[randomIndex];
    orderShippingDate.innerText += shippingDates[randomIndex];
  }
  
  function proceedToContact() {
    // Redirect to "contact.html"
    window.location.href = "contact.html";
  }
  