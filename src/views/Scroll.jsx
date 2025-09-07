import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 100,
          rotation: 360,
          scrollTrigger: {
            trigger: box,
            start: 'bottom 80%',
            end: 'top 20%',
            scrub: 0.5,
            markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <main ref={main} className="main-wrapper">
      <section className="section center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section boxes-container">
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </main>
  );
}
