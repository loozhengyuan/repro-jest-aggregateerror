const axios = require("axios")

test('repro', async () => {
    try {
        await axios.get('http://localhost:8080')
    } catch (err) {
        console.log(err)
        throw err
    }
})
