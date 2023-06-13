import { useState } from "react";
import { ArrowContainer, DataInput, DataInputContainer, Divider, HR, InputContainer, InputLabel, MainContainer, Result, ResultContainer, AgeCalculateContainer } from "./styles";

const Calculator = () => {
    const [bornData, setBornData] = useState({
		day: '00',
		month: '00',
		year: '0000'
	});
    const [ageData, setAgeData] = useState({
		days: '--',
		months: '--',
		years: '--'
	});
	return (
	<>
		<MainContainer>
            <DataInputContainer>
                <InputContainer>
                    <InputLabel>DAY</InputLabel>
                    <DataInput onChange={e => handleChangeBornData(e.target, bornData, setBornData)} name="day" placeholder="DD"></DataInput>
                </InputContainer>
                <InputContainer>
                    <InputLabel>MONTH</InputLabel>
                    <DataInput onChange={e => handleChangeBornData(e.target, bornData, setBornData)} name="month" placeholder="MM"></DataInput>
                </InputContainer>
                <InputContainer>
                    <InputLabel>YEAR</InputLabel>
                    <DataInput onChange={e => handleChangeBornData(e.target, bornData, setBornData)} name="year" placeholder="YYYY"></DataInput>
                </InputContainer>
            </DataInputContainer>
            
            <Divider>
                <HR></HR>
                <ArrowContainer  onClick={() =>handleChangeYearData(bornData,ageData, setAgeData)}>
                    <img src="./images/icon-arrow.svg" alt="" />
                </ArrowContainer>
            </Divider>
            <AgeCalculateContainer>
                <ResultContainer>
                    <Result>{ageData.years}</Result>
                    <h2>years</h2>
                </ResultContainer>
                <ResultContainer>
                    <Result>{ageData.months}</Result>
                    <h2>months</h2>
                </ResultContainer>
                <ResultContainer>
                    <Result>{ageData.days}</Result>
                    <h2>days</h2>
                </ResultContainer>
            </AgeCalculateContainer>
        </MainContainer>
	</>
	);
};

const handleChangeBornData = (input, bornData, setBornData) => {
	setBornData({ ...bornData, [input.name]: input.value });
};
const handleChangeYearData = (bornData,ageData, setAgeData) => {
    const today =new Date();
    const day = today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear();

    let yearAge = year - bornData.year;
    let monthAge;
    let dayAge;

    if (month >= bornData.month){
        monthAge = month - bornData.month;
    }
    else {
        yearAge--;
        monthAge = 12 + month - bornData.month;
    }

    
    if (day >= bornData.day){
        dayAge = day - bornData.day;
    }
    
    else {
    monthAge--;
    dayAge = 31 + day -  bornData.day;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    console.log(dayAge,monthAge,yearAge);
	setAgeData({ days:dayAge, months:monthAge, years:yearAge });
    
};

export default Calculator;
