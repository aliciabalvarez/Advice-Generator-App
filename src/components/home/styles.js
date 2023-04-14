import styled from 'styled-components';

const StyledNumber = styled.p`
color: #53FFAA;
font-size: 10px;
letter-spacing: 2px;
`
const StyledText = styled.p`
color: #CEE3E9;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
`
const StyledButton = styled.img`

`

const StyledBox = styled.div`
background-color: #313A48;
border: none;
padding: 30px;
border-radius: 20px;
text-align: center;
width: 300px;
position: relative;
`
const StyledImg = styled.img`
margin-bottom: 30px;
margin-top: 15px;
`
const StyledBoxButton = styled.div`
background-color: #53FFAA;
display: inline-flex;
padding: 15px;
border-radius: 50%;
position: absolute;
bottom: -26px;
left: 153px;
    &:hover,
    &:focus {
        box-shadow: 0px 0 15px rgb(83, 255, 170);
    }
    
`


export { StyledText, StyledNumber, StyledButton, StyledBox, StyledImg, StyledBoxButton };
