import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../component/Product'

const Home = () => {
  return (
    <main>
      <Container>
        <Row>
          {
            products.map(item => {
              return(
                <Col>
                  <Product p={item} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  )
}

export default Home