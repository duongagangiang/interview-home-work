import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from '../../routes'

const Content = () => (
    <>
        {renderRoutes(routes)}
    </>
)

export default Content
