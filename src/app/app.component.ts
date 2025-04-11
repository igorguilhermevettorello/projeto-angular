import { Component } from '@angular/core';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [CommonModule, MenuComponent, FooterComponent, RouterModule]
})
export class AppComponent {
  title = 'ProjetoInicialAngular';
}
