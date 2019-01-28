var database = [
    {
        username: "John",
        password: "Doe"
    },
    {
        username: "foo",
        password: "bar"
    },
    {
        username: "Olayemi",
        password: "Roheem"
    }
];

var newsfeed = [
    {
        username: "Amazing",
        Timeline: "This is the best JavaScript course ever!"
    },
    {
        username: "Wondeful",
        Timeline: "How I wish I knew this beforehand"
    },
    {
        username: "Mitch",
        Timeline: "JavaScript is pretty cool"
    }
];

function isUserValid(username, password){
    for (i = 0; i < database.length; i++){
        if(database[i].username === username && 
            database[i].password === password){
            return true;
        }
    }; return false;
}

function signIn(username, password) {
    if (isUserValid( username, password) ){
        console.log(newsfeed);
    } else (alert("You've enetered a wrong username and password"))
};

var userNamePrompt = prompt("What\'s your username?")

var passwordPrompt = prompt("What\'s your password?")

signIn(userNamePrompt, passwordPrompt);


