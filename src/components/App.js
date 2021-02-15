import React, { useEffect, useState } from "react"
import "styles/reset.css"
import Footer from "./Common/Footer/Footer"
import NavBar from "./Common/NavBar/NavBar"
import { intro } from "data/footerInfo.json"
import styled from "styled-components"
import { axiosRequest } from "lib/axiosRequest"
import { queryStyle } from "lib/queryStyle"
import { CgArrowsExchange } from "react-icons/cg"
import { getAllLangList } from "lib/getAllLangList"

function App() {
    const [srcLang, setSrcLang] = useState("kr")
    const [targetLang, setTargetLang] = useState("en")
    const [query, setQuery] = useState("안녕")
    const langData = getAllLangList()
    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        await axiosRequest(queryStyle(srcLang, targetLang, query))
    }

    return (
        <>
            <NavBar title={"Transpi"} />
            <Body>
                <TransBox>
                    <TransBoxHeader>
                        <TransBoxLangDiv>
                            <TransBoxLangInput defaultValue={srcLang}>{langData}</TransBoxLangInput>
                        </TransBoxLangDiv>
                        <TransBoxLangDiv>
                            <TransBoxLangInput defaultValue={targetLang}>
                                {langData}
                            </TransBoxLangInput>
                        </TransBoxLangDiv>
                    </TransBoxHeader>
                </TransBox>
            </Body>
            <Footer intro={intro} />
        </>
    )
}

const Body = styled.div`
    padding: 1rem;
    height: 80vh;
    min-height: 80vh;
    background-color: #f2f2f2;
    padding: 3rem;
`

const TransBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid #ced4da;
`
const TransBoxHeader = styled.div`
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid #ced4da;
    display: flex;
`
const TransBoxLangDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TransBoxLangInput = styled.select``
export default App
