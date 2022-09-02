import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss'],
})
export class OurExpertiseComponent implements OnInit {
  data: {
    name: string;
    url: string;
    image: string;
  }[] = [
    {
      name: 'Television Boardcast',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015177229740810331/pexels-isabella-mendes-5389621.jpg',
    },
    {
      name: 'Print Boardcast',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015179767156310037/pexels-antoni-shkraba-6620999.jpg',
    },
    {
      name: 'Online Magazines',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015180533250134046/pexels-burst-374016.jpg',
    },
    {
      name: 'Radio Boardcast',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015180793418625044/pexels-andrea-piacquadio-3822728.jpg',
    },
    {
      name: 'Magazine',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015180334209454170/pexels-miguel-constantin-montes-2623829.jpg',
    },
    {
      name: 'Photo Journalism',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015181389483737118/pexels-judit-peter-1766604.jpg',
    },
    {
      name: 'Podcasts',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015182192407740427/pexels-george-milton-6953871.jpg',
    },
    {
      name: 'Online Newspaper',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015185004705370112/pexels-cottonbro-3944454.jpg',
    },
    {
      name: 'RSS Reader',
      url: '',
      image: 'https://cdn.discordapp.com/attachments/966965279466864664/1015185123039264870/pexels-perfecto-capucine-1329571.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
