import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  styles: ['input[type="submit"]:first-of-type {color: blue}']
})
export class AppComponent {
  boundInputValue: string = "Click me!";
  contentsHeader: string = "Application Contents";
  components: string[] = [
    "app.component.html",
    "app.component.ts",
    "app.module.ts",
    "main.ts"
  ];
  title: string = "My Application";
  twoWayBinding: string = "";
  
  getContentsHeader(): string {
    return this.contentsHeader;
  }
  useCustomSubmitButton(): boolean {
    return true;
  }
  help(): string {
    return 'Help label';
  }
}