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
import { changeValue } from "lib/changeValue"
import Button from "components/Common/Button"

function App() {
    const [srcLang, setSrcLang] = useState("kr")
    const [targetLang, setTargetLang] = useState("en")
    const [query, setQuery] = useState("안녕")
    const [result, setResult] = useState("")

    const langData = getAllLangList()
    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        const data = await axiosRequest(queryStyle(srcLang, targetLang, query))
        console.log(data)
        setResult(data.translated_text)
    }

    const onChangeLang = (event) => {
        const { value, name } = event.target
        console.log(value, name)
        if (name === "src") {
            setSrcLang(value)
        } else if (name === "target") {
            setTargetLang(value)
        }
    }
    const onChangeQuery = (event) => {
        const { value } = event.target
        setQuery(value)
    }
    return (
        <>
            <NavBar title={"Transpi"} />
            <Body>
                <TransBox>
                    <TransBoxHeader>
                        <TransBoxLangDiv>
                            <div
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                번역할 언어
                            </div>
                            <TransBoxLangInput value={srcLang} onChange={onChangeLang} name="src">
                                {langData}
                            </TransBoxLangInput>
                        </TransBoxLangDiv>
                        <CgArrowsExchange
                            size={"2rem"}
                            style={{
                                marginTop: "2rem",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                changeValue(srcLang, targetLang, setSrcLang, setTargetLang)
                            }
                        />
                        <TransBoxLangDiv>
                            <div
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                번역될 언어
                            </div>
                            <TransBoxLangInput
                                value={targetLang}
                                onChange={onChangeLang}
                                name="target"
                            >
                                {langData}
                            </TransBoxLangInput>
                        </TransBoxLangDiv>
                    </TransBoxHeader>
                    <TransBoxBody>
                        <TransBoxTextInput value={query} onChange={onChangeQuery} />
                        <TransBoxTextInput
                            style={{
                                borderRight: "none",
                            }}
                            readOnly
                            value={result}
                        ></TransBoxTextInput>
                    </TransBoxBody>
                </TransBox>
                <TransBoxButtonDiv>
                    <Button onClick={() => request()}>번역하기</Button>
                </TransBoxButtonDiv>
            </Body>
            <Footer intro={intro} />
        </>
    )
}

const Body = styled.div`
    padding: 1rem;
    height: 80vh;
    background-color: #f2f2f2;
    padding: 3rem;
`

const TransBox = styled.div`
    width: 100%;
    height: 90%;
    background-color: white;
    border: 1px solid #ced4da;
`
const TransBoxHeader = styled.div`
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #ced4da;
    display: flex;
`
const TransBoxLangDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TransBoxLangInput = styled.select`
    padding: 1rem;
    outline: none;
    border: 1px solid #ced4da;
    width: 50%;
`
const TransBoxBody = styled.div`
    display: flex;
    height: 100%;
`
const TransBoxTextInput = styled.textarea`
    flex: 1;
    height: 80%;
    outline: none;
    resize: none;
    border: none;
    border-right: 1px solid #ced4da;
    font-size: 20px;
    padding: 1rem;
`
const TransBoxButtonDiv = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default App
