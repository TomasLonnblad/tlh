import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

export default function Layers() {
  const main = useRef();
  const scrollTween = useRef();

  const { contextSafe } = useGSAP(
    () => {
      const panels = gsap.utils.toArray('.section');
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) => {
            self.isActive && !scrollTween.current && goToSection(i);
          },
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: main }
  );

  const goToSection = contextSafe((i) => {
    gsap.to(window, {
      ease: 'none',
      scrollTo: {
        y: i * window.innerHeight,
        autoKill: false,
      },
      duration: 0.75,
      overwrite: true,
      onComplete: () => (scrollTween.current = null),
    });
  });

  return (
    <main className="main-wrapper layers" ref={main}>
      <section className="description section light">
        <div>
          <h1 className="text-center">Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="section blue">
        <img
          src="https://assets.codepen.io/16327/portrait-number-1.png"
          alt="One"
        />
      </section>
      <section className="section orange">
        <img
          src="https://assets.codepen.io/16327/portrait-number-2.png"
          alt="Two"
        />
      </section>
      <section className="section purple">
        <img
          src="https://assets.codepen.io/16327/portrait-number-3.png"
          alt="Three"
        />
      </section>
      <section className="section green">
        <img
          src="https://assets.codepen.io/16327/portrait-number-4.png"
          alt="Four"
        />
      </section>
    </main>
  );
}
