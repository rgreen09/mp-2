import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Brewery} from "./interfaces/Brewery.ts";
import BreweryList from "./components/BreweryList.tsx";

const AppContainer = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #333 solid;
    padding: 5%;
    background-color: #f0f8ff;
`;


export default function App() {

    const [data, setData] = useState<Brewery[]>([])

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.openbrewerydb.org/v1/breweries");
            const breweries: Brewery[] = await rawData.json();
            setData(breweries);
        }
        fetchData()
            .then(() => console.log("data sucess"))
            .catch(err => console.log(err));
    }, [data.length])

    return(
        <AppContainer>
            <BreweryList data={data}/>
        </AppContainer>
    )
}