import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @Output() close = new EventEmitter<void>();

  confirmAction() {
    alert("Thank you for subscribing!");
    this.close.emit();
  }

  closePopup() {
	this.close.emit();
  }
}
