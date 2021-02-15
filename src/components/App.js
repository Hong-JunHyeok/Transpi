import React, { useEffect, useState } from "react"
import "styles/reset.css"
import Footer from "./Common/Footer/Footer"
import NavBar from "./Common/NavBar/NavBar"
import { intro } from "data/footerInfo.json"
import styled from "styled-components"
import { axiosRequest } from "lib/axiosRequest"
import { queryStyle } from "lib/queryStyle"

function App() {
    const [srcLang, setSrcLang] = useState("kr")
    const [targetLang, setTargetLang] = useState("en")
    const [query, setQuery] = useState("안녕")
    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        await axiosRequest(queryStyle(srcLang, targetLang, query))
    }

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
