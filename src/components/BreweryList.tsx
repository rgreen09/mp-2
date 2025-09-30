import styled from "styled-components";
import type {Brewery} from "../interfaces/Brewery.ts";

const AllBreweriesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #F0F8FF; /* AliceBlue background for the list container */
    padding: 5%;
    
    @media (max-width: 768px) {
        padding: 2%;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        padding: 1%;
    }
`;

const SingleBreweriesDiv = styled.div<{ type: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 14%;
    padding: 1.8%;
    margin: 0.8%;
    background-color: ${(props) => (props.type === "micro" ? '#0064ff' : (props.type === "closed" ? '#800000' : '#A9A9A9'))};
    border: 2px solid #333;
    font-family: Arial, sans-serif;
    text-align: center;
    color: white;
    
    @media (max-width: 768px) {
        max-width: 45%;
        padding: 1.5%;
        margin: 0.5%;
        border: 2px solid #333;
    }
    
    @media (max-width: 480px) {
        max-width: 90%;
        padding: 1%;
        margin: 0.5% 0;
        border: 1px solid #333;
    }
`;

const BreweryName = styled.h1`
    margin: 1.5% 0;
    font-size: 2.2vw;
    padding-bottom: 4%;
    
    @media (max-width: 768px) {
        font-size: 1.9vw;
        margin: 1.5% 0;
    }
    
    @media (max-width: 480px) {
        font-size: 2vw;
        margin: 1% 0;
    }
`;

const BreweryType = styled.h2`
    margin: 0.8% 0;
    font-size: 1.6vw;
    padding-bottom: 4%;
    
    @media (max-width: 768px) {
        font-size: 2vw;
        margin: 0.8% 0;
    }
    
    @media (max-width: 480px) {
        font-size: 1.8vw;
        margin: 0.5% 0;
    }
`;

const BreweryLocation = styled.p`
    margin: 0.8% 0;
    font-size: 2.2vw;
    
    @media (max-width: 768px) {
        font-size: 1.9vw;
        margin: 0.8% 0;
    }
    
    @media (max-width: 480px) {
        font-size: 2vw;
        margin: 0.5% 0;
    }
`;

export default function BreweryList(props : {data: Brewery[]}){
    return(
        <AllBreweriesDiv>
            {
                props.data.map((brew: Brewery) =>
                    <SingleBreweriesDiv key={brew.id} type={brew.brewery_type}>
                        <BreweryName>{brew.name}</BreweryName>
                        <BreweryType>({brew.brewery_type})</BreweryType>
                        <BreweryLocation>{brew.city}, {brew.state}</BreweryLocation>
                    </SingleBreweriesDiv>
                )
            }
        </AllBreweriesDiv>
    )
}