import React, {useEffect} from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import s from "../../App.module.css";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import {getCurrency} from "../../Store/currency-reducer";
import {useAppDispatch, useAppSelector} from "../../Store/Store";

export const CryptoTable = () => {

            const dispatch = useAppDispatch()
            const items = useAppSelector(state=>state.currency.data)

            useEffect(() => {
                dispatch(getCurrency())
            }, [])

            return (
                <TableContainer component={Paper} className={s.tableBoxContainer}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="left">Full Name</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">volume24hour</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row) => (
                                <TableRow
                                    key={row.CoinInfo.Name}
                                >
                                    <TableCell className={s.coinImg} component="th" scope="row">
                                        <img src={`https://www.cryptocompare.com${row.CoinInfo.ImageUrl}`} alt='Coin icon'/>
                                    </TableCell>
                                    <TableCell align="left">{row.CoinInfo.FullName}</TableCell>
                                    <TableCell align="left">{row.CoinInfo.Name}</TableCell>
                                    <TableCell align="left">${row.RAW.USD.PRICE.toFixed(3)}</TableCell>
                                    <TableCell align="left">${row.RAW.USD.VOLUME24HOUR.toFixed(3)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }

