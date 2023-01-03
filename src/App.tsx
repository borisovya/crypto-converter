import React from 'react';
import {Converter} from "./Components/converter/converter";
import {CryptoTable} from "./Components/cryptoTable/cryptoTable";
import Container from '@mui/material/Container';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";


function App() {

    return (
        <div>
            <Header/>
            <Container fixed>
                <Routes>
                    <Route path='/' element={<CryptoTable/>}/>
                    <Route path='/converter' element={<Converter/>}/>
                    <Route path='/404' element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
                    <Route path='*' element={<Navigate to='/404'/>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;
