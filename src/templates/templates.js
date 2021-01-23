import c_data from "./c";
import cmake_data from "./cmake";
import cpp_data from "./cpp";
import go_data from "./go";
import java_data from "./java";
import labview_data from "./labview";
import node_data from "./node";
import python_data from "./python";
import r_data from "./r";
import ruby_data from "./ruby";
import rust_data from "./rust";

// Templates obtained from https://github.com/github/gitignore

export const initialTemplates = [
  { name: "c", data: c_data, checked: false },
  { name: "cmake", data: cmake_data, checked: false },
  { name: "c++", data: cpp_data, checked: false },
  { name: "go", data: go_data, checked: false },
  { name: "java", data: java_data, checked: false },
  { name: "labview", data: labview_data, checked: false },
  { name: "node", data: node_data, checked: false },
  { name: "python", data: python_data, checked: false },
  { name: "r", data: r_data, checked: false },
  { name: "ruby", data: ruby_data, checked: false },
  { name: "rust", data: rust_data, checked: false },
];
