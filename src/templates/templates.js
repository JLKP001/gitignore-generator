import c_data from "./c";
import cpp_data from "./cpp";
import python_data from "./python";
import labview_data from "./labview";

export const initialTemplates = [
  { name: "c", data: c_data, checked: false },
  { name: "c++", data: cpp_data, checked: false },
  { name: "altium", data: "Some data", checked: false },
  { name: "python", data: python_data, checked: false },
  { name: "labview", data: labview_data, checked: false },
];
