import { getCurrentYear } from "lib/getCurrentYear"
import React from "react"
import styled from "styled-components"

function Footer({ intro }) {
    return (
        <FooterDiv color={"#353646"}>
            {/* <IntroDiv>{intro}</IntroDiv> */}
            <CopyrightDiv>
                Copyrightⓒ{getCurrentYear()}{" "}
                <HighLight color={"#ffe812"}>Hong-JunHyeok X Kakao Developer</HighLight> All rights
                reserved.
            </CopyrightDiv>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
`
const IntroDiv = styled.div`
    color: #f2f2f2;
    margin-bottom: 1rem;
`

const CopyrightDiv = styled.div`
    color: #f2f2f2;
`
const HighLight = styled.span`
    color: ${(props) => props.color};
    font-weight: bold;
`

export default Footer
