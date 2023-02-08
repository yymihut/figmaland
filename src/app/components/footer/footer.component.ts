import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  text: string = '© 2021 Mihut Marius, All Rights Reserved.'
  @Input()
  text2: string = '* Puncte tari'
  @Input()
  text1: string = 'Despre noi'
  @Input()
  text4: string = '* Echipa'
  @Input()
  rootClassName: string = ''
  @Input()
  text5: string = '* Blog'
  @Input()
  text3: string = '* Preturi'
  @Input()
  Rectangle4_src: string = '/playground_assets/rectangle43849-fy1g-200h.png'
  @Input()
  Rectangle4_alt: string = 'Rectangle43849'
  @Input()
  text51: string = '* Home'
  constructor() {}
}
