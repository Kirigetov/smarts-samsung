import purifycss from "purify-css"
const purifycss = require("purify-css")

let content = ""
let css = ""
let options = {
    output: "filepath/output.css"
}
purify(content, css, options)