import Image from "next/image";
import React from "react";

interface Organizations {
  time: {
    from: string;
    to: string;
  };
  name: string;
  description: string[];
}

interface OrganizationsProps {
  organization: Organizations;
}

export default function Organization(organizationsProps: OrganizationsProps) {
  const { time, name, description } = organizationsProps.organization;

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 group-hover:text-white duration-200">
        {time.from}
        {"—"}
        {time.to}
      </div>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-white group-hover:text-tertiary transition duration-300">
          {name}
        </h3>
        {description.map((paragraph, index) => (
          <p
            className="mt-2 text-sm leading-normal text-secondary"
            key={`p-${index}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
