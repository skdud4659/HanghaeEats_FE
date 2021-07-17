import axios from "axios";

const instance = axios.create({
  //fake json > public - data에 파일 있음
  baseURL: "http://localhost:3000/data/store.json"
})

export default instance