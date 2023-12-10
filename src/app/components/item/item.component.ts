import { HeaderComponent } from './../header/header.component';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from 'src/app/_models/item.model';
import { HeaderTemplatesComponent } from '../header-templates/header-templates.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [HeaderTemplatesComponent],
})
export class ItemComponent {
  templatesComponent = inject(HeaderTemplatesComponent);

  @Input() item!: Item;
  selectedTemplate: TemplateRef<HeaderTemplatesComponent> | null = null;

  // ngAfterViewInit(): void {
  //   this.selectTemplate();
  // }

  selectTemplate(): void {
    if (this.item.type === 'type-a') {
      this.selectedTemplate = this.templatesComponent.templateA;
    } else if (this.item.type === 'type-b') {
      this.selectedTemplate = this.templatesComponent.templateB;
    } else if (this.item.type === 'type-c') {
      this.selectedTemplate = this.templatesComponent.templateC;
    }
  }
}
