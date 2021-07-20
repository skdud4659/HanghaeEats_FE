import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const {bold, color, size, children, cursor, width, margin, _onClick} = props;


    const styles = {
        bold, color, size, width, margin, cursor
    };

    return(
        <React.Fragment>
            <P {...styles} onClick={_onClick}> {children} </P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    width: "auto",
    children: null,
    bold: false,
    color: "#222831",
    margin: "auto",
    size: "17px",
    cursor: false,

    _onClick: () => {},
}; 
    

const P = styled.p`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};   
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "700" : "400")};
    ${(props) => props.cursor ? `cursor : pointer` : ""};
`;

export default Text;