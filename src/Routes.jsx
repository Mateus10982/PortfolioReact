import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Sobre" element={<Sobre />} ></Route>
                <Route path="/Contatos" element={<Contatos />} ></Route>
                <Route path="/Projetos" element={<Projetos />} ></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
