import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import products from '../products'
import { Link, useParams } from 'react-router-dom'
import './description.css'

const Description = () => {

    const params = useParams()

    const p = products.find(item => {
        return item.title === params.title
    })

  return (
    <Container>
      <Row>
        <Link to="/" className='btn btn-dark'>
                <p className='bg'>
                    بازگشت به صفحه اصلی
                </p>
        </Link>
      </Row>
      <Row>
        <Col className='title'>
            <h2>
            {p.title}
            </h2>
        </Col>
      </Row>
      <Row>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <p className='p'>
                    {p.description}
                </p>
            </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  )
}

export default Description
