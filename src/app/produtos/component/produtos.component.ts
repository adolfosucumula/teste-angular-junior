import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements  OnInit{

  constructor(){}

  myProduts: Produto[] = [];
  displayColumns: string[] = ['codigo', 'descricao', 'valorUnitario'];


  ngOnInit(): void {

  }


}
