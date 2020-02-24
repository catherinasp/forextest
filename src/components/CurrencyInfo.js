import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
class CurrencyInfo extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} className={"mt-20 currency-detail-area"}>
                <Grid container>
                    <div style={{ width: '100%' }}>
                        <Box display="flex" justifyContent="space-between">
                            <Box p={1}>
                                <span className={"text md bold green-primary"}>{this.props.currency}</span>
                            </Box>
                            <Box p={1}>
                                <span className={"text md bold green-primary"}>{(this.props.value*10).toFixed(2)}</span>
                            </Box>
                        </Box>
                    </div>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={"abbrv-currency"}>
                        <div className={"text italic grey-primary mb-20"}>{this.props.currency}</div>
                    </Grid>
                    <div style={{ width: '100%' }}>
                        <Box display="flex" justifyContent="space-between">
                            <Box p={1}>
                                <div className={"text italic black-primary mb-20"}>USD 1 = {this.props.currency} {this.props.value} </div>
                            </Box>
                            <Box p={1}>
                                <RemoveIcon onClick={() => this.props.handleClick()}/>
                            </Box>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default CurrencyInfo;