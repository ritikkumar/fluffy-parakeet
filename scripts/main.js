const compare = require("../scripts/compare-json.js");

compare("https://reqres.in/api/users/3", "https://reqres.in/api/users/1")
compare("https://reqres.in/api/users/2", "https://reqres.in/api/users/2")
compare("https://reqres.in/api/users?page=2", "https://reqres.in/api/users?page=2")
compare("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=1")
compare("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=2")

