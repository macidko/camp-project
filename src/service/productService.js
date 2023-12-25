import axios from "axios"

export default class ProductService{
    getCourses(){
        return axios.get("http://localhost:5006/api/Courses/getall");
    }
}