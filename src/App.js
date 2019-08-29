import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Card from "./components/card"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Card />
            <Footer />
        </div>
    )
}

export default App