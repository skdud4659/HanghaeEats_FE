import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const instance = axios.create({
  //fake json > public - data에 파일 있음
  baseURL: "http://3.36.97.199/",
  headers: { authorization: `Bearer ${getCookie("token")}` }
})

export default instance