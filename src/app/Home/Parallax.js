import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function HomeParallax() {
  const controller = new ScrollMagic.Controller();

  let tl = new TimelineLite();
  let tl2 = new TimelineLite();
  const hero = $("#hero-image");
  const bg = $("#bg-image");
  const logo = $("#hero-logo");
  const social = $("#hero-social");

  tl.to(
    bg,
    3,
    {
      y: -600,
    },
    "-=.5",
  )
    .to(
      logo,
      3,
      {
        y: -0,
      },
      "=-3",
    )
    .to(
      social,
      3,
      {
        y: -0,
        opacity: 1,
      },
      "=-3",
    );
  // .to(
  //   hero,
  //   3,
  //   {
  //     y: -50,
  //   },
  //   "-=3",
  // );

  new ScrollMagic.Scene({
    triggerElement: "#main-body",
    duration: "100%",
    triggerHook: "onLeave",
  })
    .setPin("#main-body")
    .setTween(tl)
    .addTo(controller);

  tl2
    .from(bg, 1, {
      y: -100,
      scale: 1.5,
    })
    .from(
      hero,
      1,
      {
        y: 150,
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
