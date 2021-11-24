// JavaScript Document

document.getElementById("order-button1").onclick = function (e) {
    var url = "/api/payment/order"
    var params = {
        amount: document.getElementById("order-amt").value,
        currency: "INR",
        receipt: "wthcoding001",
        payment_capture: '1'
    };
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function (res) {
        if (xmlHttp.readyState === 4) {
            res = JSON.parse(xmlHttp.responseText);
            document.getElementById("rzp-text").value = res.sub.id
        }
    }
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(params));
}


document.getElementById("rzp-button1").onclick = function (e) {
    var options = {
        "key": "<%= key %>",
        "currency": "INR",
        "name": "WTH Coding",
        "description": "WtH Coding Transaction",
        "order_id": document.getElementById("rzp-text").value,
        "handler": function (response) {
            document.getElementById('order-pay-id').value = response.razorpay_payment_id;
            document.getElementById('order-id').value = response.razorpay_order_id;
            document.getElementById('order-sig').value = response.razorpay_signature;
        },
        "theme": {
            "color": "#0EB9F2"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
}
document.getElementById('verify-button1').onclick = function (e) {
    var url = '/api/payment/verify';
    var params = {
        razorpay_order_id: document.getElementById('order-id').value,
        razorpay_payment_id: document.getElementById('order-pay-id').value,
        razorpay_signature: document.getElementById('order-sig').value
    };
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function (res) {
        if (xmlHttp.readyState === 4) {
            alert(xmlHttp.responseText);
        }
    }
    xmlHttp.open("POST", url, true); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(params));
}