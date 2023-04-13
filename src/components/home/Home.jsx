import { StyledBox, StyledBoxButton, StyledButton, StyledImg, StyledNumber, StyledText } from "./styles.js";
import React, { useEffect, useState } from 'react';


const Home = () => {
    const [data, setData] = useState(0);
    const [change, setChange] = useState(false);

    const fetchData = async (url, setData) => {
        const request = await fetch(url);
        const data = await request.json();
        setData(data);
        console.log(data.slip.id);
        console.log(data.slip.advice);
    }


    useEffect(() => {
        fetchData('https://api.adviceslip.com/advice', setData);
    }, [change]);

    if (data) {
        return (
            <>
                <StyledBox>
                    <StyledNumber>ADVICE #{data.slip.id}</StyledNumber>
                    <StyledText>"{data.slip.advice}"</StyledText>
                    <StyledImg src="pattern-divider-mobile.svg" alt="" />
                    <StyledBoxButton>
                        <StyledButton onClick={(ev) => setChange(ev)} src="icon-dice.svg"></StyledButton>
                    </StyledBoxButton>
                </StyledBox>
            </>
        )
    } else {
        return (
            <>
                <StyledText>cargando...</StyledText>
            </>
        )
    }

}



export default Home;

