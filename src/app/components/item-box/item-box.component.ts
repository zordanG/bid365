import { Component, OnInit, Input } from '@angular/core';
import { ItemAgenda } from 'src/app/models/ItemAgenda.model';

@Component({
  selector: 'item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.sass']
})
export class ItemBoxComponent implements OnInit {
  @Input() leiloes: ItemAgenda[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  showContact(index: number): void{
    this.leiloes[index].showContact = !this.leiloes[index].showContact;
  }
}
