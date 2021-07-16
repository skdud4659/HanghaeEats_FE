import React from "react";
import styled from "styled-components";
import { Grid,Text } from "../elements";

const Footer = () => {
    return(
        <React.Fragment>
            <Grid align="center" height="100%" bg= "#E5E5E5">
                <Grid is_flex>
                    <Grid>
                    <Text size = "13px" bold margin="6px"> FrontEnd</Text>
                    <Text size = "13px" margin="6px"> 김나영 양다현</Text>
                    </Grid>

                    <Grid>
                    <Text size = "13px" bold margin="6px"> BackEnd</Text>
                    <Text size = "13px" margin="6px"> 권오빈 이정원</Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Footer;