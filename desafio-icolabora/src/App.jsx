import React, { useEffect, useState } from "react";

import Title from "./components/Title";
import Content from "./components/Content";
import Footer from "./components/Footer";

import api from "./main";

export default function App() {

    const [dado, setDado] = useState('');

    useEffect(() => {
        api
            .get("https://ico-fullstack-test.herokuapp.com/v1/histograma")
            .then((response) => setDado(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div className="App" >
            <Title>
                <h3>Tarefa</h3>
                <h3>Vencido</h3>
                <h3>D0</h3>
                <h3>D1</h3>
                <h3>D2</h3>
                <h3>D3</h3>
                <h3>Total</h3>
            </Title>
            <Content>
                <div className="Tarefa">
                    <h3>{dado[0]?.TAREFA}</h3>
                    <h3>{dado[1]?.TAREFA}</h3>
                    <h3>{dado[2]?.TAREFA}</h3>
                    <h3>{dado[3]?.TAREFA}</h3>
                </div>
                <div className="Vencido">
                    <h4>{dado[0]?.VENCIDO}</h4>
                    <h4>{dado[1]?.VENCIDO}</h4>
                    <h4>{dado[2]?.VENCIDO}</h4>
                    <h4>{dado[3]?.VENCIDO}</h4>
                </div>
                <div className="D0">
                    <h4>{dado[0]?.D0}</h4>
                    <h4>{dado[1]?.D0}</h4>
                    <h4>{dado[2]?.D0}</h4>
                    <h4>{dado[3]?.D0}</h4>
                </div>
                <div className="D1">
                    <h4>{dado[0]?.D1}</h4>
                    <h4>{dado[1]?.D1}</h4>
                    <h4>{dado[2]?.D1}</h4>
                    <h4>{dado[3]?.D1}</h4>
                </div>
                <div className="D2">
                    <h4>{dado[0]?.D2}</h4>
                    <h4>{dado[1]?.D2}</h4>
                    <h4>{dado[2]?.D2}</h4>
                    <h4>{dado[3]?.D2}</h4>
                </div>
                <div className="D3">
                    <h4>{dado[0]?.D3}</h4>
                    <h4>{dado[1]?.D3}</h4>
                    <h4>{dado[2]?.D3}</h4>
                    <h4>{dado[3]?.D3}</h4>
                </div>
                <div className="Total">
                    <h4>{dado[0]?.TOTAL}</h4>
                    <h4>{dado[1]?.TOTAL}</h4>
                    <h4>{dado[2]?.TOTAL}</h4>
                    <h4>{dado[3]?.TOTAL}</h4>
                </div>
            </Content>
            <Footer>
                <h3>{dado[4]?.TAREFA}</h3>
                <h3>{dado[4]?.VENCIDO}</h3>
                <h3>{dado[4]?.D0}</h3>
                <h3>{dado[4]?.D1}</h3>
                <h3>{dado[4]?.D2}</h3>
                <h3>{dado[4]?.D3}</h3>
                <h3>{dado[4]?.TOTAL}</h3>
            </Footer>
        </div >
    );
}