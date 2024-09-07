const allBtn = document.querySelectorAll(".all-btn");

let count = 0;

for (btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const textName = event.target.innerText;
    const ticketPrice = getValueElementById("ticket-price");
    count = count + 1;

    event.target.disabled = true;

    const dynamicText = document.getElementById("dynamic-text");
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = textName;
    p2.innerText = "Economic";
    p3.innerText = ticketPrice;

    div.classList.add("dynamic");
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    dynamicText.appendChild(div);

    totalCost();
    grandtotalTaka();
    seatCount("seat-count", count);
    myBackgroundColor(this, "#1dd100");
    leftSeatCount("left-seat");
  });
}

function myBackgroundColor(element, value) {
  element.style.backgroundColor = value;
}

function totalCost() {
  const ticketPrice = getValueElementById("ticket-price");
  const totalTaka = getValueElementById("total-cost");
  const total = ticketPrice + totalTaka;
  const totalBudgetCost = document.getElementById("total-cost");
  totalBudgetCost.innerText = total;
}

function grandtotalTaka(control) {
  const totalPrice = getValueElementById("total-cost");

  const couponCode = document.getElementById("coupon-code").value;
  const coupon = couponCode.toLowerCase();

  if (control) {
    if (coupon === "new15") {
      const discount = totalPrice * 0.15;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    } else if (coupon === "coupon20") {
      const discount = totalPrice * 0.2;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    } else {
      alert("Invalid Your coupon. Enter Your Valid code!");
    }
  } else {
    document.getElementById("grand-total").innerText = totalPrice;
  }
}

// const seatValue = getValueElementById("seat-count", count);

function seatCount(elementId, value) {
  getValueElementById(elementId);
  const element = (document.getElementById("seat-count").innerText = value);
  if (element > 4) {
    alert("Your Seat Budget Full !");
    return;
  }
}
function leftSeatCount(elementId) {
  getValueElementById(elementId);
  const element = (document.getElementById("left-seat").innerText = 40 - count);
  if (element > 40) {
    alert("Your Seat Budget Full !");
    return;
  }
}

function showHidden() {
  hiddenSection("index");
  showSection("next");
}
