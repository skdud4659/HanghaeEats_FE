import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold, color, size, children, width, margin} = props;

    const styles = {
        bold:bold, color:color, size:size, width, margin
    };

    return(
        <React.Fragment>
            <P {...styles}> {children} </P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    color: "#222831",
    size: "15px",
    width: "auto",
    margin: "auto",
};

const P = styled.p`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};   
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
`;

export default Text;