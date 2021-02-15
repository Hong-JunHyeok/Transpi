import React from "react"
import styled from "styled-components"

function NavBar({ title }) {
    return (
        <NavBarDiv color={"#353646"}>
            <Title color={"#ffe812"}>{title}</Title>
        </NavBarDiv>
    )
}

const NavBarDiv = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${(props) => props.color};
    padding: 1rem;
`
const Title = styled.div`
    color: ${(props) => props.color};
    font-size: 2rem;
    font-weight: bold;
    ::after {
        content: "심플하게 번역하자!";
        font-size: 12px;
        font-weight: lighter;
    }
`

export default NavBar
