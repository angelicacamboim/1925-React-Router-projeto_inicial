import React from 'react'
import { useParams, Route, useRouteMatch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const SubCategoria = () => {
    const {subcategoria} = useParams()
    const {path} = useRouteMatch()

    return(
        <>
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
        </Route>
        </>
    )
}

export default SubCategoria