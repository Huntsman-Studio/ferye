import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _meta: Meta, private _title: Title) {

    _meta.addTags([
      // Essential META Tags
      { property: 'og:title', content: 'Ferye all about jewellery' },
      { property: 'og:type', content: 'webiste' },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: 'https://ferye.com' },
      // Non-Essential, But Recomended
      { property: 'og:description', content: 'Ferye all about jewellery' }
    ]);

    

    // title
    _title.setTitle("Αρχική | Ferye all about jewellery")
  }

  ngOnInit(): void {
  }

}
