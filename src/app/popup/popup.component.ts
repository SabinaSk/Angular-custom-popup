import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  confirmAction() {
    this.confirm.emit();
    this.close.emit();
  }

  closePopup() {
	this.close.emit();
  }
}
