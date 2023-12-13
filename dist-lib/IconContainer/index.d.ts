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
declare const IconContainer: React.FC<IconContainerProps>;
export default IconContainer;
