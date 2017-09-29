import { Component } from '@angular/core';
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _runtimeCompiler: Compiler) {
      //this._runtimeCompiler.clearCache();
  }
}
