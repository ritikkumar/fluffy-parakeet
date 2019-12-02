const axios = require('axios')

async function callUrl(url) {
    const response = await axios.get(url)
    return response.data
}

async function compare(firstUrl, secondUrl) {
    try {
        let firstResp = await callUrl(firstUrl)
        let secondResp = await callUrl(secondUrl)
        console.log(firstUrl + (JSON.stringify(firstResp) == JSON.stringify(secondResp) ? "" : " not") + " equals " + secondUrl)
        return JSON.stringify(firstResp) == JSON.stringify(secondResp)
    } catch (e) {
        console.log(e.message)
    }
}

// Try for 1500 request
for (var i = 0; i <= 3000; i++) {
    compare("https://reqres.in/api/users/3", "https://reqres.in/api/users/1")
    compare("https://reqres.in/api/users/2", "https://reqres.in/api/users/2")
    compare("https://reqres.in/api/users?page=2", "https://reqres.in/api/users?page=2")
    compare("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=1")
    compare("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=2")
}