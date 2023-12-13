import t from "react";
const h = (e) => {
  const r = t.Children.toArray(e.children);
  if (!r.length || r.length > 1)
    throw new Error("Component should only have 1 children");
  const n = r[0];
  return t.cloneElement(n, {
    width: e.width,
    height: e.height,
    color: e.color,
    className: e.className
  });
};
h.defaultProps = {
  width: "24",
  height: "24",
  color: "#464455"
};
export {
  h as default
};
