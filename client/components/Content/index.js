import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from '../../routes'
import Container from 'react-bootstrap/Container'

const Content = () => (
    <Container>
        {renderRoutes(routes)}
    </Container>
)

export default Content
