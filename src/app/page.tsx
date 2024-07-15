"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import { experiences, projects, socials } from "@/lib/data";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CircleCursorInner = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
`;
const CircleCursorOuter = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 1px solid white;
  z-index: 12000;
  background: white;
  box-shadow: 0 0 200px 200px white;
  opacity: 0.1;
`;

export default function Page() {
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);

  const sections = ["about", "experience", "project"];
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useGSAP(() => {
    class GlowCursor {
      outerCursor: HTMLElement | null;
      innerCursor: HTMLElement | null;
      outerCursorBox: DOMRect | null;
      outerCursorSpeed: number;
      // easing: gsap.;
      clientX: number;
      clientY: number;
      showCursor: boolean;
      isStuck: boolean;

      constructor() {
        this.outerCursor = null;
        this.innerCursor = null;
        this.outerCursorBox = null;
        this.outerCursorSpeed = 0;
        // this.easing = gsap.Back.easeOut.config(1.7);
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;
        this.isStuck = false;
      }

      initCursor() {
        if (!outerCursorRef.current || !innerCursorRef.current) return;

        this.outerCursor = outerCursorRef.current;
        this.innerCursor = innerCursorRef.current;
        this.outerCursorBox = this.outerCursor.getBoundingClientRect();

        const unveilCursor = () => {
          // Set the innerCursor on the cursor position
          gsap.set(this.innerCursor, {
            x: this.clientX,
            y: this.clientY,
          });

          // Center the outerCursor
          // Since it's larger
          gsap.set(this.outerCursor, {
            x: this.clientX - this.outerCursorBox!.width / 2,
            y: this.clientY - this.outerCursorBox!.height / 2,
          });

          // Following speed of the outer cursor
          // 0 is immediate
          setTimeout(() => {
            this.outerCursorSpeed = 1;
          }, 100);

          this.showCursor = true;
        };

        document.addEventListener("mousemove", unveilCursor);

        document.addEventListener("mousemove", (e) => {
          this.clientX = e.clientX;
          this.clientY = e.clientY;
        });

        const render = () => {
          gsap.set(this.innerCursor, {
            x: this.clientX,
            y: this.clientY,
          });

          if (!this.isStuck) {
            gsap.to(this.outerCursor, {
              duration: this.outerCursorSpeed,
              x: this.clientX - this.outerCursorBox!.width / 2,
              y: this.clientY - this.outerCursorBox!.height / 2,
            });
          }
          if (this.showCursor) {
            document.removeEventListener("mousemove", unveilCursor);
          }
          requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
      }
    }

    const cursorAnim = new GlowCursor();
    cursorAnim.initCursor();

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => enterSection(section),
        onEnterBack: () => enterSection(section),
      });
    });

    function enterSection(section: string) {
      setCurrentSection(section);
    }
  });

  return (
    <div className="no-scrollbar relative bg-[url('/image/bg.jpg')] bg-repeat scroll-smooth">
      <CircleCursorInner
        ref={innerCursorRef}
        className="hidden md:block"
      ></CircleCursorInner>
      <CircleCursorOuter
        ref={outerCursorRef}
        className="hidden md:block"
      ></CircleCursorOuter>
      <main className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 bg-opacity-75">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              {/* Main information */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <a href="/">Chau Nong</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Fullstack Web Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  I develop end-to-end, engaging, and user-friendly fullstack
                  applications.
                </p>

                <nav className="hidden lg:block">
                  <ul className="mt-16 w-max">
                    {sections.map((section) => (
                      <li key={section}>
                        <a
                          href={`#${section}`}
                          className="group flex items-center py-3"
                        >
                          <span
                            className={`nav-indicator mr-4 h-px duration-300 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                              currentSection === section
                                ? "w-16 bg-white"
                                : "w-8"
                            }`}
                          ></span>
                          <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                              currentSection === section && "text-white"
                            }`}
                          >
                            {section}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* Social */}
              <div>
                <ul className="ml-1 mt-8 flex items-center">
                  {socials.map((social) => (
                    <li key={social.name} className="mr-5 text-xs shrink-0">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.name} (opens in a new tab)`}
                        title={social.title}
                        className="block hover:text-slate-200"
                      >
                        <span className="sr-only">{social.name}</span>
                        <social.icon className="w-6 h-6" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </header>

            {/*Content  */}
            <div className="pt-24 lg:w-1/2 lg:py-24">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                  </h2>
                </div>
                <div>
                  <p className="mb-4">
                    {
                      "Back in 2019, I dove headfirst into the world of Computer Science at National Economics University, igniting a passion that would shape my career trajectory. Fast-forward to today, and I've had the privilege of developing high-performance e-commerce platforms, crafting microservice-based applications, and even publishing papers at national conferences."
                    }
                  </p>
                  <p className="mb-4">
                    {
                      "My ultimate goal? To become a Solution Architect. I'm driven by the desire to leverage my in-depth knowledge of technology, coupled with my growing analytical and solution design skills, to contribute meaningfully to an organization's development and success. This aspiration fuels my continuous learning and pushes me to tackle complex challenges head-on."
                    }
                  </p>
                  <p className="mb-4">
                    {
                      "Outside the digital realm, I'm constantly expanding my horizons. Whether it's participating in international conferences on future language learning or snagging awards for scientific research, I'm always eager to learn and grow. And when I need a break from the screen, you might catch me brushing up on my English skills or diving into the latest tech literature, always ready for the next coding adventure."
                    }
                  </p>
                </div>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    EXPERIENCE
                  </h2>
                </div>

                <div>
                  <ol className="group/list">
                    {experiences.map((experience) => (
                      <li className="mb-12" key={experience.name}>
                        <Experience experience={experience} />
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section
                id="project"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    PROJECT
                  </h2>
                </div>

                <div>
                  <ol className="group/list">
                    {projects.map((project) => (
                      <li className="mb-12" key={project.name}>
                        <Project project={project} />
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
