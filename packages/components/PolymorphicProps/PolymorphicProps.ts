import { ComponentProps, ElementType } from "react";

export type PolymorphicProps<
  T extends ElementType,
  P = {},
  A extends string = "as"
> = {
  [K in A]?: T;
} &
  Omit<P, A> &
  Omit<ComponentProps<T>, A | keyof P>;
