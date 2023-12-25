import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../service/productService';


export default function ProductDetail() {
  let { id } = useParams();

  const [course, setCourse] = useState({})

  useEffect(() => {
    let courseService = new ProductService();
    courseService.getCourseById(id)
      .then(result => setCourse(result.data.data))
  }, [])

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/jenny.jpg'
            />
            <Card.Header>{course.courseName}</Card.Header>
            <Card.Meta>Kurs Fiyatı: {course.price} ₺</Card.Meta>
            <Card.Description>Açıklama: {course.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
