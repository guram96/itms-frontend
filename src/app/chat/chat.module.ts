import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent],
})
export class ChatModule { }
