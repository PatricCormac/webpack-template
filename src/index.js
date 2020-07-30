//import * as $ from "jquery";
import Post from "./model/Post";
import json from "./assets/title";
import "./styles/styles.css";
import logo from "./assets/logo.png";
import "./styles/main.less";
import "./styles/main.sass";

const post = new Post("Webpack Title", logo);
const unused = 42;
console.log("unused: ", unused);

console.log("Post to string: ", post.toString());

console.log("JSON:", json);
