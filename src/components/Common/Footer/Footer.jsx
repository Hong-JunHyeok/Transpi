import { getCurrentYear } from "lib/getCurrentYear"
import React from "react"
import styled from "styled-components"

function Footer({ intro }) {
    return (
        <FooterDiv color={"#353646"}>
            <IntroDiv>{intro}</IntroDiv>
            <CopyrightDiv>
                Copyrightⓒ{getCurrentYear()} Hong-JunHyeok X Kakao All rights reserved.
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
`
const IntroDiv = styled.div`
    color: #f2f2f2;
    margin-bottom: 1rem;
`

const CopyrightDiv = styled.div`
    color: #f2f2f2;
`

export default Footer
