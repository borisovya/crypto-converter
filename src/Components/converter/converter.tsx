import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import s from '../../App.module.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';


export const Converter = () => {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        marginTop: theme.spacing(10),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string);
    };

    return (
        <Grid xs={5}>
            <Item className={s.container}>
                <div>
                    <FormControl>
                        <TextField id="outlined-basic" label="Amount" variant="outlined"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="label1">Currency</InputLabel>
                        <Select
                            labelId="label1"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Currency"
                            className={s.selectStyle}
                        >
                            <MenuItem value={1}>USD</MenuItem>
                            <MenuItem value={2}>ETH</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={s.currencyLine}>
                    <FormControl>
                        <TextField id="outlined-basic" label="Amount" variant="outlined"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="label2">Currency</InputLabel>
                        <Select
                            labelId="label2"
                            id="demo-simple-select-standard"
                            value={age2}
                            onChange={handleChange2}
                            label="Currency"
                            className={s.selectStyle}
                        >
                            <MenuItem value={1}>USD</MenuItem>
                            <MenuItem value={2}>ETH</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Typography variant="h5" gutterBottom className={s.blockMargin}>
                    1 ETH = 1200 USD
                </Typography>
            </Item>
        </Grid>
    );
};
