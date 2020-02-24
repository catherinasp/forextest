import React from "react";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import CurrencyInfo from 'components/CurrencyInfo';
import Box from '@material-ui/core/Box';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { Button } from '@material-ui/core';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: {},
            msg: '',
            newCurrency: ''
        };
    }
    
    componentDidMount() {
    }
    handleClick(currency) {
        let temp = this.state.currencies;
        delete temp[currency];

        this.setState({
            currencies: temp
        })
    }
    submitNewCurrency() {
        const baseApi = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=';
        axios({
            url: `${baseApi}${(this.state.newCurrency).toUpperCase()}`,
            method: 'get'
        }).then((result) => {
            let temp = this.state.currencies;
            temp[`${(this.state.newCurrency).toUpperCase()}`] = result.data.rates[`${(this.state.newCurrency).toUpperCase()}`].toFixed(2);
            this.setState({
                currencies: temp
            })
        }).catch(error => {
            console.log(error.response.data.error)
            this.setState({
                msg: error.response.data.error
            })
        });
    }
    handleInputChange(e) {
        this.setState({
            newCurrency: e.target.value
        })
    }
    render() {
        const Currencies = () =>
        Object.entries(this.state.currencies).map(([currency, v]) => (
            <CurrencyInfo 
                currency={currency}
                value={v}
                key={currency}
                handleClick={() => this.handleClick(currency)}
            />
        ));
        return (
            <div className="content">
                <Grid container spacing={4}>
                    <Grid item xs={10} sm={10} md={10} lg={6}  className={"main-area"}>
                        <Grid item xs={12} sm={12} md={12} lg={12} className={"base-currency-area"}>
                            <div className={"text italic grey-secondary mb-20"}>USD - United States Dollars</div>
                            <div style={{ width: '100%' }}>
                                <Box display="flex" justifyContent="space-between">
                                    <Box p={1}>
                                        <span className={"text lg bold white-primary"}>USD</span>
                                    </Box>
                                    <Box p={1}>
                                        <span className={"text lg bold white-primary"}>10.00</span>
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className={"other-currency-area"}>
                            {this.state.currencies.length}
                            <Grid container className={"other-currency-list"}>
                                <Currencies />
                            </Grid>
                            <Grid container className={"input-area"}>
                                <Grid item xs={12} sm={12} md={12} lg={9}>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Input Currencies</InputLabel>
                                        <Input onChange={(e) => this.handleInputChange(e)} aria-describedby="my-helper-text" />
                                        {
                                          this.state.msg !== '' && 
                                            <FormHelperText id="my-helper-text">
                                                {this.state.msg}
                                            </FormHelperText>
                                        }
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={3}>
                                    <Button variant="contained" color="primary" onClick={() => this.submitNewCurrency()}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Home;