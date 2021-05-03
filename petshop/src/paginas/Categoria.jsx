import React, { useEffect, useState } from 'react'
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import SubCategoria from './SubCategoria'

const Categoria = () => {
    const {id} = useParams()
    const {url ,path} = useRouteMatch()
    const [ subcategorias, setSubcategorias ] = useState([])
    console.log("path: " + path)
    console.log("url: " + url)

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <ListaCategorias/>

        <ul className="lista-categorias container flex">
            {
                subcategorias.map((subcategoria) => (
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                        <Link to={`${url}/${subcategoria}`}>
                            {subcategoria}
                        </Link>
                    </li>
                ))
            }
        </ul>

    <Switch>
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}/>
        </Route>

        <Route exact path={`${path}/:subcategoria`}>
            <SubCategoria />
        </Route>


    </Switch>
        
        </>
    )
}

export default Categoria