import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import CourseService from '../service/courseService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function ProductList() {
  //bir fonksiyonu çağırmak istenmesi
  const dispatch = useDispatch()

  const [courses, setCourses] = useState([])

  useEffect(() => {
    let courseService = new CourseService();
    courseService.getCourses()
      .then(result => setCourses(result.data.data))
  }, [])

  const handleAddToCart = (course) => {
    dispatch(addToCart(course))
    toast.success(`${course.courseName} sepete eklendi`)
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Kurs Adı</Table.HeaderCell>
          <Table.HeaderCell>Kurs Açıklaması</Table.HeaderCell>
          <Table.HeaderCell>Fiyat</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          courses.map(course => (
            <Table.Row key={course.categoryId}>
              <Table.Cell><Link to={`/courses/${course.courseId}`}>{course.courseName}</Link></Table.Cell>
              {/* 
              <Table.Cell as="NavLink" to={`/courses/${course.courseId}`}></Table.Cell>
              */}
              <Table.Cell>{course.description}</Table.Cell>
              <Table.Cell>{course.price}</Table.Cell>
              <Table.Cell><Button onClick={() => handleAddToCart(course)}>Sepete Ekle</Button></Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
