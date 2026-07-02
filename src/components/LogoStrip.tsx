
  // const logos = [
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/4apr443v_expires_30_days.png', width: 'w-[124px]' },
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/k86k3ep3_expires_30_days.png', width: 'w-[126px]' },
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/8i0gul41_expires_30_days.png', width: 'w-32' },
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/f5yulm0o_expires_30_days.png', width: 'w-[145px]' },
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/9mmiiwof_expires_30_days.png', width: 'w-[125px]' },
  //   { src: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/1x00y5m0_expires_30_days.png', width: 'w-[110px]' },
  // ];

  import React from "react";

const logos = [
  {
    name: "React",
    src: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Vue.js",
    src: "https://cdn.simpleicons.org/vuedotjs",
  },
  {
    name: "Next.js",
    src: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Angular",
    src: "https://cdn.simpleicons.org/angular",
  },
  {
    name: "Flask",
    src: "https://cdn.simpleicons.org/flask",
  },
  {
    name: "JavaScript",
    src: "https://cdn.simpleicons.org/javascript",
  },
];

export default function LogoStrip() {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Gradient kiri */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent" />
      {/* Gradient kanan */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent" />
      <div className="marquee">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xlbg-white px-6 py-3 shadow-sm dark:border-gray-700 dark:bg-neutral-900"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-10"
              />
              <span className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 