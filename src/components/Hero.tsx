import { useGSAP } from "@gsap/react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery("(max-width:767px)");

  useGSAP(() => {
    const heroSplit = new SplitText("#hero-title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText("#hero-subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -150,
        },
        0
      )
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      );

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current?.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <Box id="hero" className="noisy">
        <img
          src="/images/hero-left-leaf.png"
          alt="Left Leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="Right Leaf"
          className="right-leaf"
        />
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            top: "6%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: { xs: "20%", md: "10%", xl: 0 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Modern Negra",
                fontSize: ["80px", "16vw"],
              }}
              id="hero-title"
            >
              MOJITO
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                visibility: { xs: "hidden", xl: "visible" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Serif Text",
                  color: "white",
                }}
              >
                Cool. Crisp. Classic.
              </Typography>
              <Typography
                sx={{
                  fontSize: "60px",
                  color: "yellow",
                  fontFamily: "Modern Negra",
                  lineHeight: 1,
                  textAlign: "left",
                }}
                id="hero-subtitle"
              >
                Sip the Spirit <br /> of Summer
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "90vw", xl: "27%" },
                minWidth: { xs: "90vw", xl: 0 },
                maxWidth: { xs: "90vw", xl: "none" },
                position: "relative",
                right: { xs: "32vmax", sm: "25vmax", lg: "10vmax", xl: 0 },
                bottom: { xs: "10vmin", sm: 0, lg: "20vmin", xl: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Serif Text",
                  fontSize: ["16px", "3vmin"],
                  color: "white",
                  textAlign: "left",
                }}
                id="hero-subtitle"
              >
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </Typography>
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{
                  ":hover": { color: "yellow" },
                  opacity: 0.8,
                  fontWeight: 600,
                  fontSize: { xs: "2vmin", xl: "16px" },
                  ml: { xs: 0, xl: 2 },
                }}
              >
                View cocktails
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="video" sx={{ position: "absolute", inset: 0 }}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </Box>
    </>
  );
};

export default Hero;
