function logout()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_page.html"
}

function addRoom()
{
    window.location = "Kwitter_room.html"
}