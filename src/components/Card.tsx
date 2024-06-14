import React from "react";

interface CardProps {
  number: string;
  title: string;
  content: React.ReactNode;
  linkText: string;
  linkHref: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  content,
  linkText,
  linkHref,
  icon,
}) => {
  return (
    <div className="boxes bg-[#F6F6F6] p-4 flex flex-col">
      <div className="flex justify-between items-center ">
        <div className="">
          <h3 className="font-bold text-xl leading-[23px]">{number}</h3>
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
        <div className="w-12 h-12">{icon}</div>
      </div>
      <div className="my-2">{content}</div>
      <a
        href={linkHref}
        className="text-right text-blue-500 hover:underline mt-auto"
      >
        {linkText}
      </a>
    </div>
  );
};

export default Card;
