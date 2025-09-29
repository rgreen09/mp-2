import styled from "styled-components";
import type {Brewery} from "../interfaces/Brewery.ts";

const AllBreweriesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #F0F8FF; /* AliceBlue background for the list container */
    padding: 20px;
`;

const SingleBreweriesDiv = styled.div<{ type: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.type === "micro" ? '#FFD700' : (props.type === "closed" ? '#800000' : '#A9A9A9'))};
    border: 3px solid #333;
    font-family: Arial, sans-serif;
    text-align: center;
`;

export default function BreweryList(props : {data: Brewery[]}){
    return(
        <AllBreweriesDiv>
            {
                props.data.map((brew: Brewery) =>
                    <SingleBreweriesDiv key={brew.id} type={brew.type}>
                        <h1>{brew.name}</h1>
                        <h2>{brew.type}</h2>
                        <p>{brew.city}, {brew.state}</p>
                    </SingleBreweriesDiv>
                )
            }
        </AllBreweriesDiv>
    )
}