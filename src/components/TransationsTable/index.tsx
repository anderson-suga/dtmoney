import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"


export function TransationsTable() {
    useEffect(() => {
        api('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ -1.000</td>
                        <td>Aluguel</td>
                        <td>12/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};