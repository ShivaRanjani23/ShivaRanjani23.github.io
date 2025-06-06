const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <p><button id="btnLogin">Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
    document.getElementById('btnLogin').addEventListener('click', () => {
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPass').value;
        if(email && pass){
            showWelcome(email);
        } else {
            alert('Please enter email and password');
        }
    });
}

const showRegister = () => {
    let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <p><button id="btnRegister">Register</button></p>
    <p><button onclick='showLogin()'>Already have an account?</button></p>
    </div>
    `
    root.innerHTML = str
    document.getElementById('btnRegister').addEventListener('click', () => {
        const name = document.getElementById('txtName').value;
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPass').value;
        if(name && email && pass){
            alert(`Registration successful for ${name} with email ${email}`);
            showLogin();
        } else {
            alert('Please fill all fields');
        }
    });
}

const showWelcome = (email) => {
    let str=`
    <div class='App-Container'>
    <h1>Welcome</h1>
    </div>
    `
    root.innerHTML = str
}
