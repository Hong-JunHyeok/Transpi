import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function Button({ children, onClick }) {
    return <ButtonDiv onClick={onClick}>{children}</ButtonDiv>
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

const ButtonDiv = styled.div`
    background-color: ${(props) => props.buttonColor || "#459de6"};
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "60px"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.color || "#f2f2f2"};
    cursor: pointer;
    :hover {
        filter: brightness(95%);
    }
`

export default Button
