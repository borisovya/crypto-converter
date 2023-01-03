import React from 'react';
import {Converter} from "./Components/converter/converter";
import {CryptoTable} from "./Components/cryptoTable/cryptoTable";


function App() {

    return (
        <div>
            <CryptoTable/>
            <Converter/>
        </div>
    );
}

export default App;
