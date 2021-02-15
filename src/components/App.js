import React from "react"
import "styles/reset.css"
import Footer from "./Common/Footer/Footer"
import NavBar from "./Common/NavBar/NavBar"
import { intro } from "data/footerInfo.json"
import styled from "styled-components"

function App() {
    return (
        <>
            <NavBar title={"Transpi"} />
            <Body>번역 바디</Body>
            <Footer intro={intro} />
        </>
    )
}

const Body = styled.div`
    padding: 1rem;
    min-height: 80vh;
`

export default App
