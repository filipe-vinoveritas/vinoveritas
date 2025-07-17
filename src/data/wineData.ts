import { Producer } from '../types/wine';

export const wineData: Producer[] = [
  {
    id: 'aurora',
    name: 'Aurora',
    location: 'Bento Gonçalves, RS',
    established: '1931',
    wines: [
      {
        id: 'aurora-moscato',
        name: 'Aurora Moscato',
        type: 'Vinho Branco Doce',
        vintage: '2023',
        description: 'Vinho moscato doce e aromático, perfeito para sobremesas e momentos especiais.',
        imageUrl: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'aurora-cabernet',
        name: 'Aurora Cabernet Sauvignon',
        type: 'Vinho Tinto',
        vintage: '2022',
        description: 'Vinho tinto encorpado com notas de frutas vermelhas e taninos equilibrados.',
        imageUrl: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'aurora-chardonnay',
        name: 'Aurora Chardonnay',
        type: 'Vinho Branco',
        vintage: '2023',
        description: 'Vinho branco elegante com notas cítricas e mineralidade marcante.',
        imageUrl: 'https://images.pexels.com/photos/1407847/pexels-photo-1407847.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'aurora-merlot',
        name: 'Aurora Merlot',
        type: 'Vinho Tinto',
        vintage: '2022',
        description: 'Vinho tinto suave e aveludado com final persistente.',
        imageUrl: 'https://images.pexels.com/photos/1407848/pexels-photo-1407848.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'miolo',
    name: 'Miolo',
    location: 'Vale dos Vinhedos, RS',
    established: '1989',
    wines: [
      {
        id: 'miolo-reserva',
        name: 'Miolo Reserva Cabernet Sauvignon',
        type: 'Vinho Tinto Premium',
        vintage: '2021',
        description: 'Vinho premium com passagem por carvalho francês, complexo e elegante.',
        imageUrl: 'https://images.pexels.com/photos/1407849/pexels-photo-1407849.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'miolo-sauvignon',
        name: 'Miolo Sauvignon Blanc',
        type: 'Vinho Branco',
        vintage: '2023',
        description: 'Vinho branco fresco e aromático com notas herbáceas características.',
        imageUrl: 'https://images.pexels.com/photos/1407850/pexels-photo-1407850.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'miolo-tannat',
        name: 'Miolo Tannat',
        type: 'Vinho Tinto',
        vintage: '2021',
        description: 'Vinho tinto robusto e concentrado, típico da variedade Tannat.',
        imageUrl: 'https://images.pexels.com/photos/1407851/pexels-photo-1407851.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'salton',
    name: 'Salton',
    location: 'Bento Gonçalves, RS',
    established: '1910',
    wines: [
      {
        id: 'salton-intenso',
        name: 'Salton Intenso Cabernet Sauvignon',
        type: 'Vinho Tinto',
        vintage: '2022',
        description: 'Vinho tinto intenso com grande estrutura e personalidade marcante.',
        imageUrl: 'https://images.pexels.com/photos/1407852/pexels-photo-1407852.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'salton-prosecco',
        name: 'Salton Prosecco',
        type: 'Espumante',
        vintage: '2023',
        description: 'Espumante fresco e elegante, perfeito para celebrações.',
        imageUrl: 'https://images.pexels.com/photos/1407853/pexels-photo-1407853.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'salton-riesling',
        name: 'Salton Riesling',
        type: 'Vinho Branco',
        vintage: '2023',
        description: 'Vinho branco aromático e delicado com acidez equilibrada.',
        imageUrl: 'https://images.pexels.com/photos/1407854/pexels-photo-1407854.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'casa-valduga',
    name: 'Casa Valduga',
    location: 'Vale dos Vinhedos, RS',
    established: '1875',
    wines: [
      {
        id: 'valduga-gran-reserva',
        name: 'Casa Valduga Gran Reserva',
        type: 'Vinho Tinto Premium',
        vintage: '2020',
        description: 'Vinho premium de edição limitada, expressão máxima da vinícola.',
        imageUrl: 'https://images.pexels.com/photos/1407855/pexels-photo-1407855.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'valduga-brut',
        name: 'Casa Valduga Brut',
        type: 'Espumante',
        vintage: '2022',
        description: 'Espumante tradicional método champenoise, elegante e refinado.',
        imageUrl: 'https://images.pexels.com/photos/1407856/pexels-photo-1407856.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'valduga-pinot',
        name: 'Casa Valduga Pinot Noir',
        type: 'Vinho Tinto',
        vintage: '2022',
        description: 'Vinho tinto elegante e refinado, expressão pura da Pinot Noir.',
        imageUrl: 'https://images.pexels.com/photos/1407857/pexels-photo-1407857.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'lidio-carraro',
    name: 'Lídio Carraro',
    location: 'Vale dos Vinhedos, RS',
    established: '1998',
    wines: [
      {
        id: 'lidio-dadivas',
        name: 'Lídio Carraro Dádivas Merlot',
        type: 'Vinho Tinto Premium',
        vintage: '2021',
        description: 'Vinho tinto premium com notas complexas e estrutura excepcional.',
        imageUrl: 'https://images.pexels.com/photos/1407858/pexels-photo-1407858.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'lidio-chardonnay',
        name: 'Lídio Carraro Chardonnay',
        type: 'Vinho Branco',
        vintage: '2022',
        description: 'Vinho branco com fermentação em barrica, complexo e elegante.',
        imageUrl: 'https://images.pexels.com/photos/1407859/pexels-photo-1407859.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
];