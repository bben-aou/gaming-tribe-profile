import React from "react";

type TInfoBox = {
  title: string;
  value: number | string;
};

export default function InfoBox(props: Readonly<TInfoBox>) {
  const { title, value } = props;

  return (
    <div className="">
      <h1 className="text-primary-400 font-semibold">{title} </h1>
      <h1 className="text-light-100 font-light">{value}</h1>
    </div>
  );
}
