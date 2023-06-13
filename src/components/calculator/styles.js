import styled from "styled-components";

const MainContainer = styled.main`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 56px;

    width: 840px;
    height: 651px;

    /* White */

    background: #FFFFFF;
    border-radius: 24px 24px 200px 24px;
`;
const DataInputContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

    width: 728px;
    height: 101px;
`;
const InputContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 160px;
    height: 101px;

`;
const InputLabel = styled.label`
    
    font-weight: 700;
    font-size: 14px;
    color: #716F6F;

`;
const DataInput = styled.input`
    
    width: 100%;   
    font-weight: 700;
    font-size: 32px;
    padding: 12px 24px;
    background: none;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
`;


const Divider = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 728px;
    height: 96px;

`;
const ArrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;   
    width: 96px;
    height: 96px;
    background: #854DFF;
    border-radius: 216px;
    cursor: pointer;
    :hover{
        fill: #151515;
        transition: all 0.3s ease-in-out;
    }
`;
const HR = styled.div`
    width: 632px;
    height: 1px;
    background: #DCDCDC;
`;
const AgeCalculateContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 728px;
    height: 342px;
`;
const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: 728px;
    height: 114px;
    font-size: 64px;
    font-style: italic;
    font-weight: 800;
    color: #151515;
`;
const Result = styled.h2`
    color: #854DFF;
`;

export {MainContainer,DataInputContainer, InputContainer, InputLabel,DataInput,Divider,ArrowContainer,HR,AgeCalculateContainer,ResultContainer,Result};