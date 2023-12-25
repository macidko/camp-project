import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../service/productService'

export default function ProductList() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    let courseService = new ProductService();
    courseService.getCourses()
      .then(result => setCourses(result.data.data))
  }, [])
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Kurs Adı</Table.HeaderCell>
          <Table.HeaderCell>Kurs Açıklaması</Table.HeaderCell>
          <Table.HeaderCell>Fiyat</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          courses.map(course => (
            <Table.Row key={course.categoryId}>
              <Table.Cell>{course.courseName}</Table.Cell>
              <Table.Cell>{course.description}</Table.Cell>
              <Table.Cell>{course.price}</Table.Cell>
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
