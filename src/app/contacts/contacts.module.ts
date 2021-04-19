import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ContactsComponent],
  exports: [ContactsComponent]
})
export class ContactsModule { }
