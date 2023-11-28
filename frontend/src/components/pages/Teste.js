import React from "react";
import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../../Constants";

export default function Teste () {

    async function getData() {
        try {
          const response = await fetch(`${BACKEND_BASE_URL}/teste`, {
            method: 'GET'
          });
    
          if (response.status !== 200) {
            window.alert('Falha ao buscar dados...');
          } else {
            console.log('Dados recebidas com sucesso => ', response.data);
          }
        } catch (err) {
          window.alert('Erro durante a chamada da API');
          console.log('Erro durante a chamada da API');
        }
      }
    
      React.useEffect( () => {
        getData();
      }, []);

    return (
        <p>teste</p>
    )
}