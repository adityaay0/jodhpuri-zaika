const params = new URLSearchParams(window.location.search);

const table = params.get("table") || "Not Assigned";

document.getElementById("tableNumber").innerText = `Table ${table}`;

function sendOrder(){

  const order = document.getElementById("orderText").value;

  const message = `🍽️ Jodhpuri Zaika Order

Table Number: ${table}

Order:
${order}`;

  const phone = "919999999999";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
