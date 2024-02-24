import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberConverterModule } from './number-converter/number-converter.module';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NumberConverterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'number-converter-angular';
}
