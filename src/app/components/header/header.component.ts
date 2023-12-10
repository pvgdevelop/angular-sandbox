import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from 'src/app/_models/item.model';
import { HeaderTemplatesComponent } from '../header-templates/header-templates.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderTemplatesComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerTemplate: TemplateRef<HeaderTemplatesComponent> | null = null;
  @Input() item!: Item;
}
