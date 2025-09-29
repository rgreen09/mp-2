import styled from "styled-components";
import {useEffect, useState} from "react";
import {Brewery} from "./interfaces/Brewery.ts";

export default function App() {

    const [data, setData] = useState<Brewery[]>([])

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.openbrewerydb.org/v1/breweries");
            const {res} = await rawData.json();
            setData(res.url);
        }
        fetchData()
            .then(() => console.log("data sucess"))
            .catch(err => console.log(err));
    })
}