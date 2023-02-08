import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-desktopnavbar',
  templateUrl: 'desktopnavbar.component.html',
  styleUrls: ['desktopnavbar.component.css'],
})
export class Desktopnavbar {
  @Input()
  Rectangle4_src: string = '/playground_assets/rectangle43849-fy1g-200h.png'
  @Input()
  rootClassName: string = ''
  @Input()
  Rectangle4_alt: string = 'Rectangle43849'
  constructor() {}
}
