import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css',
})
export class ErrorMessageComponent {
  @Output() retry = new EventEmitter();

  onRetry() {
    this.retry.emit();
  }
}
