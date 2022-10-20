import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.sass']
})
export class CustomButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() class!: string;
  @Input() type: string = '';
  @Input() href: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
}
