import React from 'react'
import { Card , Col, Row } from 'react-bootstrap'
import './product.css'
import { Link } from 'react-router-dom'

const Product = ({ p }) => {
  return (
    <main className='p-1 m-auto'>
      <Card className='backgroundM'>
        <Row>
          <Row>
            <Col className='text-center' as="h4">
              {p.id}
            </Col>
          </Row>
          <Row>
            <Link to={`/description/${p.title}`} >
              <Col className='text-center m-5 p-2 backgroundT' as="h3">
                {p.title}
              </Col>
            </Link>
          </Row>
          <Row>
            <Col className="text-center" as="p">
              {p.mainText}
            </Col>
          </Row>
          <Row>
            <Link to={`/description/${p.title}`} >
              <Col className=' image'>
                <Card.Img src={p.image} className='m-3 p-2' rounded />
              </Col>
            </Link>
          </Row>
        </Row>
      </Card>
    </main>
  )
}

export default Product