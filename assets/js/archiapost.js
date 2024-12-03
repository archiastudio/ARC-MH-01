function archiapost() {
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let phone = document.getElementById("phonenum").value;
    let email = document.getElementById("emailaddrs").value;
    let message = document.getElementById("msg").value;



    var data = {
        "firstname":firstname,
        "lastname":lastname,
        "phone":phone,
        "email":email,
        "message":message

    }

    var formUrl =
        `https://script.google.com/macros/s/AKfycbzmxkxMD92SnEW2Rll1htXH9pmSzrFCjFhRxYP5J3rTEX3qh857gOZgL_-r4dntAP-e/exec?action=addPost&pass=ARCMH01`

    if (firstname && lastname && phone && email && message) {
        fetch(`${formUrl}`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => alert("Your Record Added | We Will Contact you soon"));
    }else{
        alert("Fill All Fields")
    }

}