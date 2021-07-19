import axios from "axios";

const instance = axios.create({
  //fake json > public - data에 파일 있음
  baseURL: "http://3.36.97.199/"
})

export default instance