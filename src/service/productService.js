import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:5006/api/Courses/getall");
    }
}