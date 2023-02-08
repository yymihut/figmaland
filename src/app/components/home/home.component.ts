import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  @Input()
  text: string = 'Powerful... Simplicity...'
  @Input()
  text1: string = "Just type what's on your mind and we'll get........"
  constructor() {}
}
