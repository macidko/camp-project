import React from "react";
import Categories from "./Categories";
import CourseList from "../pages/CourseList";
import "./Dashboard.css"
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from "react-router-dom";
import CourseDetail from "../pages/CourseDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import CourseAdd from "../pages/CourseAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" Component={CourseList} />
              <Route path="/courses" Component={CourseList} />
              {/* useParams router-dom'daki parametreleri alır. ":id" */}
              <Route path="/courses/:id" Component={CourseDetail} />
              <Route path="/cart" Component={CartDetail} />
              <Route path="/course/add" Component={CourseAdd} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
