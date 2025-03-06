import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isPopupVisible = false;
  isPopupConfirmed = false;

  showPopup() {
	  this.isPopupVisible = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
  }

  confirmPopup() {
    this.isPopupConfirmed = true;
    
    setTimeout(() => {
      this.isPopupConfirmed = false;
    }, 3000);
  }
}
