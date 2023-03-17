function submit() {
    var password = document.getElementById("pass").value;
    window.location.replace(`/${password}`);
}
