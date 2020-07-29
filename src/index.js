//import * as $ from "jquery";
import Post from "./Post";
import json from "./assets/title";
import "./styles/styles.css";
import logo from "./assets/logo.png";

const post = new Post("Webpack Title", logo);

console.log("Post to string: ", post.toString());

console.log("JSON:", json);
