const XLSX = require("xlsx");
const express = require("express");
const { connection } = require("./Config/db");
const cors = require("cors");
const { ExcelModel } = require("./Models/excel.model");

const app = express();
app.use(express.json());
app.use(cors());

// ExcelModel.collection.deleteMany()

const parse = (path) => {
  const workbook = XLSX.readFile(path);
  return Object.keys(workbook.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(workbook.Sheets[name]),
  }));
};

const saveData = async (inp) => {
  const data = await new ExcelModel({ name: inp.name, data: inp.data });
  data.save();
};

parse("file_example_XLS_10.xls").map((el) => {
  saveData(el);
});

app.get("/", async (req, res) => {
  let data = await ExcelModel.find();
  res.send(data);
});

// const workbook = XLSX.readFile(
//   "C:/Users/Hisamuddin Shaikh/Downloads/file_example_XLS_10.xls"
// );

// const worksheet1 = workbook.Sheets[workbook.SheetNames[0]];
// const worksheet2 = workbook.Sheets[workbook.SheetNames[1]];
// // console.log(worksheet2);

// for (let i = 2; i < 11; i++) {
//   let sheet1 = {
//     Sr_no: worksheet1[`A${i}`].v,
//     First_name: worksheet1[`B${i}`].v,
//     Last_name: worksheet1[`C${i}`].v,
//     Gender: worksheet1[`D${i}`].v,
//     Country: worksheet1[`E${i}`].v,
//     Age: worksheet1[`F${i}`].v,
//     Date: worksheet1[`G${i}`].v,
//     ID: worksheet1[`H${i}`].v,
//   };
//   console.log(sheet1);
// }

// for (let x = 2; x < 52; x++) {
//   let Sheet2 = {
//     Sr_no: worksheet2[`A${x}`].v,
//     First_name: worksheet2[`B${x}`].v,
//     Last_name: worksheet2[`C${x}`].v,
//     Gender: worksheet2[`D${x}`].v,
//     Country: worksheet2[`E${x}`].v,
//     Age: worksheet2[`F${x}`].v,
//     Date: worksheet2[`G${x}`].v,
//     ID: worksheet2[`H${x}`].v,
//   };
//   console.log(Sheet2)
// }

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB Connected successfully");
  } catch (err) {
    console.log(err);
  }

  console.log(`Server running on PORT ${PORT}`);
});
