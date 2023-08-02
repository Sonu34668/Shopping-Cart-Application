
  function paymentProcess(e){
    var options = {
            key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
            amount: JSON.parse(sessionStorage.getItem('TotalAmount'))*100 ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "MyShop portal",
            description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            theme: {
              color: "#122620",
            },
            image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
            handler: function () { // run a function when your payment is successfull
              sessionStorage.removeItem('TotalAmount');
              location.href = "../shop";
            },
            options: {
              checkout: {
                method: {
                  netbanking: 0,
                  card: 0,
                  upi: 1,
                  wallet: 0,
                },
              },
            },
          };

    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    e.preventDefault();
};

paymentProcess();