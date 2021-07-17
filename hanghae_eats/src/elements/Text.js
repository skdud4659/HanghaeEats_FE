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
    width: "auto",
    children: null,
    bold: false,
    color: "#222831",
    margin: "auto",
    size: "17px",
};

const P = styled.p`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};   
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "700" : "400")};
`;

export default Text;