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

module.exports = compare;