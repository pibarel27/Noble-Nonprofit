import React from "react"
import {Context} from "./context/context"
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {ProductOverView} from "./pages/ProductOverView"
import {Header} from "./components/header/Header"
import {Footer} from "./components/footer/Footer"
import {BtnScroll} from "./components/btn-scroll/BtnScroll"
import Dashboard from "./components/pages/Dashboard"
import LoginReg from "./components/pages/auth/LoginReg"
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail"
import Registration from "./components/pages/auth/Registration"

export default function App() {
    const productId = {id: 0}

    return (
        <main>
            <Context.Provider value={productId}>
                <Header />
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>
                    <Route path='/products/:id' element={ <ProductOverView /> }/>
                    <Route path="/LoginReg" element={<LoginReg />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/ProductOverView" element={<ProductOverView/>} />
                    <Route path="/sendPasswordResetEmail" element={<SendPasswordResetEmail/>} />
                </Routes>
                <BtnScroll />
                <Footer/>
            </Context.Provider>
        </main>
    )
}

