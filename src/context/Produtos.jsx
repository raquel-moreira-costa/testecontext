import { createContext, useState } from "react";

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const listaDeProdutos = [
    {
      id: 1,
      item: "Amendoim",
      quantidade: 2,
      preco: 12.0,
    },
    {
      id: 2,
      item: "Danone",
      quantidade: 3,
      preco: 15.0,
    },
    {
      id: 3,
      item: "Chocolate",
      quantidade: 10,
      preco: 6.0,
    },
    {
      id: 4,
      item: "Salgadinho",
      quantidade: 15,
      preco: 7.5,
    },
    {
      id: 5,
      item: "Refrigerante",
      quantidade: 7,
      preco: 9.0,
    }
  ];
  const [produtos, setProdutos] = useState(listaDeProdutos);

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  );
};
