import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  images = [
    {
      imageSrc: 'https://th.bing.com/th/id/R.2cf07afad431f90a2f5514512dc6293e?rik=FSvZJ09WT7krLw&riu=http%3a%2f%2fsummitagro.estadao.com.br%2fwp-content%2fuploads%2f2020%2f08%2f500-1-scaled.jpg&ehk=R2ho5CPVl6052deM078grYU2iuPimnDlvG1Y%2bJoUqvw%3d&risl=&pid=ImgRaw&r=0',
      imageAlt: 'bois 1'
    },
    {
      imageSrc: 'https://files.agro20.com.br/uploads/2019/09/boi-2.jpg',
      imageAlt: 'bois 2'
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.IX7JWqQ1dTc8sP1x7FJ10AHaF7?pid=ImgDet&rs=1',
      imageAlt: 'bois 3'
    },
    
  ]

  leiloesLive = [
    {
      name: 'Leilão DEF',
      day:  20,
      month: 'OUT',
      time:  '19:00',
      status: 'Live',
      city:  'Rio de Janeiro - RJ',
      image: 'https://sba1.com/arquivos/noticias/2019/09/image9.jpg',
      phone: '1 2345-6789',
      contact: 'Lucas',
      showContact: false
    },
  ]

  leiloesSoon = [
    {
      name: 'Leilão ABC',
      day:  28,
      month: 'OUT',
      time:  '22:00',
      status: 'Soon',
      city:  'São Paulo - SP',
      image: 'https://th.bing.com/th/id/OIP.PEEmcxBX30l_vX79rl7mvQHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      phone: '(35) 9 8765-4321',
      contact: 'Jorel',
      showContact: false
    },
    {
      name: 'Leilão GHI',
      day:  25,
      month: 'OUT',
      time:  '09:00',
      status: 'Soon',
      city:  'Belo Horizonte - MG',
      image: 'https://th.bing.com/th/id/R.3c9d51e2614be84bbef081aa536a4364?rik=moms5dpryZC2nw&riu=http%3a%2f%2fwww.neloreipb.com.br%2fpublic%2fuploads%2frepositorio%2fTouros%2fIMUNE_-_2187_DA_IPB_foto1.JPG&ehk=VdUDLTZomjOR83IxYIOaNFIbovzM511DZBJjXpDR5LA%3d&risl=&pid=ImgRaw&r=0',
      phone: '(47) 5 9876-4321',
      contact: 'Ana',
      showContact: false
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
