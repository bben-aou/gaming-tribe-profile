import { TConditionalRenderingProps } from "@/interfaces/common/types";
import { Fragment } from "react";

const ConditionalRendering = (
  props: TConditionalRenderingProps
): JSX.Element => {
  const { children, condition, defaultComponent } = props;
  return <Fragment>{condition ? children : defaultComponent || null}</Fragment>;
};
export default ConditionalRendering;
