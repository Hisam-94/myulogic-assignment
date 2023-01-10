const mongoose = require("mongoose")

const ExcelSchema = mongoose.Schema({
    name:String,
    data:Array
})

const ExcelModel = mongoose.model("data",ExcelSchema)

module.exports = {
    ExcelModel
}