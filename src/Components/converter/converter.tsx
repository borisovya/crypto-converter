import React, {ChangeEvent, useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import s from '../../App.module.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from "../../Store/Store";
import {getCurrency} from "../../Store/currency-reducer";


export const Converter = () => {

    const currencyNamesArray = useAppSelector(state => state.currency.data.map(coin => coin.CoinInfo.Name))
    const currenciesArray = useAppSelector(state => state.currency.data)
    const dispatch = useAppDispatch()

    const [selectValue1, setSelectValue1] = useState('');
    const [selectValue2, setSelectValue2] = useState('');
    const [inputValue1, setInputValue1] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [curFrom, setCurFrom] = useState<number>(0);
    const [curTo, setCurTo] = useState<number>(0);


    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectValue1(event.target.value);
        if (event.target.value) {
            const curFrom = currenciesArray.find(cur => cur.CoinInfo.Name === event.target.value)
            curFrom && setCurFrom(curFrom.RAW.USD.PRICE)
            if (inputValue1 && curFrom && curTo) {
                const convertedCost = (((+inputValue1 * curFrom.RAW.USD.PRICE) / curTo).toFixed(3))
                convertedCost && setInputValue2(convertedCost)
        }
    }};
    const handleSelectChange2 = (event: SelectChangeEvent) => {
        setSelectValue2(event.target.value && event.target.value);
        if (event.target.value) {
            const curTo = currenciesArray.find(cur => cur.CoinInfo.Name === event.target.value)
            curTo && setCurTo(curTo.RAW.USD.PRICE)
            if (inputValue1 && curFrom && curTo) {
                const convertedCost = (((+inputValue1 * curFrom) / curTo.RAW.USD.PRICE).toFixed(3))
                convertedCost && setInputValue2(convertedCost)
            }
        }
    };
    const onHandleCurrencyChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue1(event.currentTarget.value)
        const convertedCost = (((+event.currentTarget.value * curFrom) / curTo).toFixed(3))
        convertedCost && setInputValue2(convertedCost)
    };


    useEffect(() => {
        dispatch(getCurrency())
    }, [])

    return (
        <Grid xs={5}>
            <div className={s.container}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Amount"
                        variant="outlined"
                        value={inputValue1}
                        onChange={onHandleCurrencyChange}
                    />
                    <FormControl>
                        <InputLabel id="label1">Currency from</InputLabel>
                        <Select
                            labelId="label1"
                            id="demo-simple-select-standard"
                            value={selectValue1}
                            onChange={handleSelectChange}
                            label="Currency"
                            className={s.selectStyle}
                        >
                            {currencyNamesArray.map(coin => <MenuItem key={coin} value={coin}> {coin} </MenuItem>)}

                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="label2">Currency to</InputLabel>
                        <Select
                            labelId="label2"
                            id="demo-simple-select-standard"
                            value={selectValue2}
                            onChange={handleSelectChange2}
                            label="Currency"
                            className={s.selectStyle}
                        >
                            {currencyNamesArray.map(coin => <MenuItem key={coin} value={coin}> {coin} </MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <Typography variant="h5" gutterBottom className={s.blockMargin}>
                    {selectValue1 && selectValue2 && inputValue1 && inputValue2 && `${inputValue1} ${selectValue1} = ${inputValue2} ${selectValue2}`}
                </Typography>
            </div>
        </Grid>
    );
};
