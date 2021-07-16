import React from "react";
import { Grid,Text } from "../elements";

const Footer = () => {
    return(
        <React.Fragment>
            <Grid padding="16px" align="center" width="100%" bg= "#E5E5E5">
                <Grid>
                <Text size = "13px" bold> FrontEnd</Text>
                <Text size = "13px" bold> 김나영 양다현</Text>
                </Grid>

                <Grid>
                <Text size = "13px" bold> BackEnd</Text>
                <Text size = "13px" bold> 권오빈 이정원</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Footer;