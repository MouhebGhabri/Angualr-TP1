import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    message: String= 'Bonjour, monde!';
    changerMessage(){
      this.message='Nouveau message!';
    }
}
