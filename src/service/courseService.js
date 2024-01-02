import axios from "axios";

export default class CourseService {
  getCourses() {
    return axios.get("http://localhost:5006/api/Courses/getall");
  }

  getCourseById(courseId) {
    return axios.get("http://localhost:5006/api/Courses/getbyid?id=" + courseId);
  }
}
