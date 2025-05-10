function CheckLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    document.getElementById('message').innerText = "Checking Authentication...";

    setTimeout(() => {
        if (username.toLowerCase() == 'admin') {
            if (password.toLowerCase() == 'azeemullah') {
                document.getElementById('message').innerText = "Successfull Loged in!"
                setTimeout(() => {
                    window.location.href = "main.html"
                }, 1000);
            }
            else {
                document.getElementById('message').innerText = "Wrong Input."
            }
        }
        else {
            document.getElementById('message').innerText = "Failed Try Again..."
        }
    }, 2000);
}
