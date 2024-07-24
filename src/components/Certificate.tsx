import Image from "next/image";
import React from "react";

interface Certificate {
  time: string;
  name: string;
  organization: string;
  stacks: string[];
}

interface CertificateProps {
  certificate: Certificate;
}

export default function Certificate(certificateProps: CertificateProps) {
  const { time, name, organization, stacks } = certificateProps.certificate;

  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-primary group-hover:text-tertiary transition duration-300">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-normal text-secondary">{time}</p>
        <p className="mt-2 text-sm leading-normal text-secondary">{organization}</p>
        {stacks.length > 0 && (
          <ul className="mt-2 flex flex-wrap">
            {stacks.map((stack) => (
              <li key={stack} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-medium leading-5 text-tertiary">
                  {stack}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      /> */}
    </div>
  );
}
