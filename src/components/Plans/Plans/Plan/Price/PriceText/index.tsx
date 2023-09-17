import { PlanProps } from '../..';

type DefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type PriceTextProps = {
  price: PlanProps['price'];
} & DefaultProps;

export function PriceText({ price, ...rest }: PriceTextProps) {
  return <h3 {...rest}>R${price}</h3>;
}
