import { useContext } from "react";
import { ProdutosContext } from "../context/Produtos";

export const useProdutos = () => {
  return useContext(ProdutosContext);
};