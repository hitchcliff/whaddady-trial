import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function HomeParallax() {
  const controller = new ScrollMagic.Controller();

  let tl = new TimelineLite();
  let tl2 = new TimelineLite();
  const hero = $("#hero");
  const heroImage = $("#hero-image");
  const bg = $("#bg-image");
  const logo = $("#hero-logo");
  const social = $("#hero-social");

  new ScrollMagic.Scene({
    triggerElement: "#main-body",
    duration: 50,
    triggerHook: "onLeave",
  })
    .setTween(tl)
    .setPin("#main-body")
    .addTo(controller);

  tl2
    .from(heroImage, 1, {
      y: 250,
    })
    .from(
      hero,
      1,
      {
        scale: 1.5,
      },
      "-=1",
    )
    .from(
      logo,
      1,
      {
        y: -20,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      social,
      0.2,
      {
        y: 30,
        opacity: 0,
      },
      "-=1",
    );

  new ScrollMagic.Scene({
    triggerElement: "#main-body",
    triggerHook: "onLeave",
  })
    .setTween(tl2)
    .addTo(controller);
}
