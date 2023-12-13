import React from "react";

export type IconProps = {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
};

type IconContainerProps = {
  children: React.ReactNode;
} & IconProps;

type ChildrenProps = React.DetailedHTMLProps<
  React.SVGAttributes<SVGSVGElement>,
  HTMLOrSVGElement
>;

const IconContainer: React.FC<IconContainerProps> = (props) => {
  const arrayChildren = React.Children.toArray(props.children);
  if (!arrayChildren.length || arrayChildren.length > 1) {
    throw new Error("Component should only have 1 children");
  }
  const Children = arrayChildren[0] as React.ReactElement<ChildrenProps>;

  return React.cloneElement<ChildrenProps>(Children, {
    width: props.width,
    height: props.height,
    color: props.color,
    className: props.className,
  });
};

export default IconContainer;

IconContainer.defaultProps = {
  width: "24",
  height: "24",
  color: "#464455",
};
