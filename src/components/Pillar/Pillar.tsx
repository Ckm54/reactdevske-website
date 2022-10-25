import React from 'react';

export default function Pillar({
  count,
  label,
}: {
  count: string;
  label: string;
}) {
  return (
    <div className="flex max-w-xs md:max-w-sm min-w-[50%] md:min-w-[30%]  space-x-4 p-4 border rounded-lg items-center bg-white md:bg-[#09AFC6]">
      <p className="text-2xl md:text-4xl font-extrabold md:text-white tracking-wide">
        {count}
      </p>
      <p className=" truncate text-md md:text-xl capitalize md:text-white tracking-wide">
        {label}
      </p>
    </div>
  );
}