import React from "react";
import { useProdutos } from "../hooks/useProdutos";

export const Lista = () => {
  const { produtos } = useProdutos()
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>

        {produtos.map((produto) => (
          <tr>
            <td>
              <input type="checkbox" value={produto.id}></input>
            </td>
            <td>{produto.item}</td>
            <td>{produto.quantidade}</td>
            <td>$ {produto.preco}</td>
          </tr>
        ))}
      </table>
      <div className="botoes">
        <button>Adicionar</button>
        <button>Atualizar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
};
