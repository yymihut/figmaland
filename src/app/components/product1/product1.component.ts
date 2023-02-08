import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product1',
  templateUrl: 'product1.component.html',
  styleUrls: ['product1.component.css'],
})
export class Product1 {
  @Input()
  image_alt1: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  image_src1: string =
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGxhcHRvcHxlbnwwfHx8fDE2NzQ3NDMyMzI&ixlib=rb-4.0.3&q=80&h=1000'
  @Input()
  Image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  rawcn3u: string = ' '
  raweme9: string = ' '
  raw5e67: string = ' '
  rawbbeg: string = ' '
  rawspf1: string = ' '
  rawcfxc: string = ' '
  constructor() {}
}
