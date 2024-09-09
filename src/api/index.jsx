import axios from "axios"

const Api = axios.create({
  baseURL:
    "https://script.google.com/macros/s/AKfycbwMNc-zcElTwbaBrdB-9n-_e8OIfjLqdYw4pd1cXzBxB5G2P5AdTO6-vEzMHxrI5PSc/exec",
})

export default Api
