import React from 'react'
import Header from './template/Header'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './component/Home'
import Add from './component/Add'
import Edit from './component/Edit'
import Detail from './component/Detail'

const App =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component ={Home} />
            <Route path="/add" component ={Add} />
            <Route path="/edit/:id_produk" component ={Edit} />
            <Route path="/detail/:id_produk" component ={Detail} />
        </BrowserRouter>
    )
}

export default App