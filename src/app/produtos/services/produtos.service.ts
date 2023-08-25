import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[] = [
    new Produto(1, "P001", "Arroz", 350.00),
    new Produto(2, "P002", "Feijao", 220.00),
    new Produto(3, "P003", "Macarrao", 160.00),
    new Produto(4, "P004", "Kachup", 40.00),
    new Produto(5, "P005", "Banana", 300.00),
  ];

  constructor(public dialog: MatDialog) { }

  /**
   * retorna um objeto produto caso o valor a ser filtrado for encontrado na lista
   * de produtos, caso contrario retorna a lista completa de produtos
   * @param filtro
   * @returns lista de produtos
   */
  list(filtro: string = ''){
    let result: Produto[] = [];

    if(filtro)
      result = this.produtos.filter(p => p.getCodigo().toLowerCase().includes(filtro.toLowerCase()))
    else
      result = this.produtos;
    return result;
  }

  /**
   * Faz uma busca na lista de produtos para tentar encontrar um objecto
   * com o mesmo ID
   * @param id
   * @returns
   */
  get(id: number): any{
      return this.produtos.find( p => p.getId() == id);
  }

  /**
   * Salva um novo objecto produto ou atualiza-o caso ja existir
   * nas lista produtos
   * @param produto
   */
  create(produto: Produto): void{
    if(produto.getId() == 0){
      //Criar um ID para o novo produto a ser salvo
      produto.setId(this.produtos[this.produtos.length - 1].getId() + 1);
      this.produtos.push(produto)
    }else{
      this.update(produto, produto.getId());
    }
  }

  /**
   *Atualiza um objecto do tipo produto
   * @param produto
   * @param id
   */
  update(produto: Produto, id: number){
    //Atualiza os dados de um objecto produto
    let pAtualizar = this.get(id);
    if(pAtualizar){
      pAtualizar.setCodigo(produto.getCodigo())
      pAtualizar.setDescricao(produto.getDescricao())
      pAtualizar.setValorUnitario(produto.getValorUnitario())
    }
  }

  /**
   *
   * @param id
   */
  delete(id: number){
    this.produtos = this.produtos.filter( p => p.getId() != id );
  }



}
