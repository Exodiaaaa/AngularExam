import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  pu:number
  qte:number
  ht!:number
  tva!:number
  ttc!:number

  fontSize=20

  constructor() {
    this.pu=0
    this.qte=0
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.pu>0 && this.qte>0){
      this.ht=this.pu*this.qte
      this.tva=this.ht*0.2
      this.ttc=this.ht+this.tva
    }
  }

}
