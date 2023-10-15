// JavaScript for dynamic content (e.g., order history)
document.addEventListener("DOMContentLoaded", function () {
    // Simulated order data, you should replace this with actual data from your database
    const orders = [
        { id: 1, date: "2023-10-01", total: 50.00 },
        { id: 2, date: "2023-09-15", total: 35.00 },
        { id: 3, date: "2023-08-30", total: 75.00 },
    ];

    const orderList = document.getElementById("orderList");

    // Populate the order history
    orders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Order #${order.id} - Date: ${order.date}, Total: $${order.total.toFixed(2)}`;
        orderList.appendChild(listItem);
    });

    // Edit profile button functionality (you can add an event listener for editing)
    const editProfileButton = document.getElementById("editProfile");
    editProfileButton.addEventListener("click", () => {
        // Add code to open an edit profile form/modal
        alert("Edit Profile Clicked");
    });
});
// ... (Previous JavaScript code) ...

// Simulated cart data, you should replace this with actual cart data from your website
const cartItems = [
    { id: 101, name: "Product A", price: 25.00 },
    { id: 102, name: "Product B", price: 15.00 },
    { id: 103, name: "Product C", price: 10.00 },
];

const cartList = document.getElementById("cartList");

// Populate the shopping cart
cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
});

// Track order button functionality (you can add an event listener for tracking)
const trackOrderButton = document.getElementById("trackOrder");
trackOrderButton.addEventListener("click", () => {
    const orderId = document.getElementById("orderId").textContent;
    // Add code to redirect to the order tracking page or show tracking details
    alert(`Tracking order #${orderId}`);
});

// Populate the shopping cart
cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
});

trackOrderButton.addEventListener("click", () => {
    const orderId = document.getElementById("orderId").textContent;
    // Add code to redirect to the order tracking page or show tracking details
    alert(`Tracking order #${orderId}`);
});

// ... (Remaining JavaScript code) ...
