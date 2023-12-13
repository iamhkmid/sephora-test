import Pyramid from "../../assets/pyramid.svg?react";
import packageJson from "../../../package.json";
import React from "react";
import cn from "../../utils/cn";

const circles = new Array(3).fill("").map((_, idx) => idx);

const AsokaStartLoading = () => {
  const [open, setOpen] = React.useState(true);
  const [hideAnimation, setHideAnimation] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setHideAnimation(true), 3000);
  }, []);

  React.useEffect(() => {
    if (hideAnimation) setTimeout(() => setOpen(false), 300);
  }, [hideAnimation]);

  return (
    <div
      className={cn(
        "fixed flex h-screen w-screen items-center justify-center bg-[radial-gradient(116.6%_114.91%_at_91.03%_11.63%,_#3B4874_0%,_#2D3553_100%)] transition-opacity duration-300 ease-in-out",
        {
          "opacity-0": hideAnimation,
          hidden: !open,
        },
      )}
    >
      <div className="DialogContent flex flex-col items-center">
        <div className="flex items-center gap-7">
          <div>
            <h1 className="text-[80px] font-bold text-slate-400">ASOKA</h1>
            <p className="text-[24px] font-normal text-slate-400">
              The Art of Modern Hieroglyph
            </p>
            <p className="text-[14px] font-normal text-slate-400">
              V.{packageJson.version}
            </p>
          </div>
          <Pyramid />
        </div>
        <div className="mt-5 flex gap-[10px]">
          {circles.map((item) => (
            <div
              key={item}
              className="animate-loader h-[13px] min-h-[13px] w-[13px] min-w-[13px] rounded-full bg-slate-100 opacity-[0.3]"
              style={{ animationDelay: `${item / 3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsokaStartLoading;
