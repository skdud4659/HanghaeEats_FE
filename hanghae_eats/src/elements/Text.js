import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold, color, size, children, cursor, width, margin} = props;

    const styles = {
        bold, color, size, width, margin, cursor
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
<<<<<<< Updated upstream
=======
    _onClick: () => {},
>>>>>>> Stashed changes
    cursor: false,
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