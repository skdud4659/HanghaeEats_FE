import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const {m_size, bold, color, size, children, m_margin, cursor, width, margin, _onClick, _onChange} = props;


    const styles = {
        m_size, bold, color, size, width, margin, cursor, m_margin
    };

    return(
        <React.Fragment>
            <P {...styles} onClick={_onClick} onChange={_onChange}> {children} </P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    width: "auto",
    children: null,
    bold: false,
    color: "#222831",
    margin: "auto",
    size: "1.1em",
    m_size: "15px",
    m_margin:"auto",
    _onClick: () => {},
    _onChange: () => {},
    cursor: false,
};

const P = styled.p`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};   
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "700" : "400")};
    ${(props) => props.cursor ? `cursor : pointer` : ""};

    @media only screen and (max-width:500px) {
        ${(props) => props.m_size ? `font-size : ${props.m_size}` : `font-size : ${props.size}`};
        ${(props) => props.m_margin ? `margin : ${props.m_margin}` : `margin : ${props.margin}`};
    }
`;

export default Text;