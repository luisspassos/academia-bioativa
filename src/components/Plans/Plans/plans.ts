import { CrownIcon } from './Icons/Crown';
import { HealthCareIcon } from './Icons/HealthCare';
import { LetterIcon } from './Icons/Letter';

export const plans = [
  {
    icon: LetterIcon,
    name: 'AULA EXPERIMENTAL',
    price: 0,
    benefits: ['Dia para experimentar a academia e seus exercícios'],
  },
  {
    icon: CrownIcon,
    name: 'PLANO ANUAL',
    price: 80,
    benefits: [
      {
        text: 'Economia de R$240 em relação ao plano mensal',
        isHighlighted: true,
      },
      '5 dias de acesso na semana',
      'Valido por 1 ano',
    ],
    isHighlighted: true,
    dividedIn: 12,
  },
  {
    icon: HealthCareIcon,
    name: 'PLANO MENSAL',
    price: 100,
    benefits: ['5 dias de acesso na semana', 'Valido por 1 mês'],
  },
];
