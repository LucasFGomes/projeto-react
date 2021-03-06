import React, { Component } from 'react';
import { consultarFaturamento } from '../../services/faturamento';

class Faturamento extends Component {

  constructor(props) {
    super(props);
    this.state = {
      faturamentos: {
        detalhamento: []
      }
    };
  }

  async componentDidMount() {
    const data = await consultarFaturamento();
    this.setState({ faturamentos: data });
  }

  render() {
    return (
      <>
        <h2 className="mt-2">Faturamento</h2>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Total por forma de pagamento </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th className="text-right">Valor</th>
                  </tr>
                </thead>

                <tbody>

                  {
                    this.state.faturamentos.detalhamento.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{item.descricao}</td>
                          <td className="text-right">
                            {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>

              </table>

            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Faturamento;