import { useGSAP } from "@gsap/react";
import { Box, Link, Typography } from "@mui/material";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
    useGSAP(()=>{
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

    },[])
    
  return (
    <div id="hero" className="noisy">
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
          top: "15%",
          height: "78%",
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
          }}
        >
          <Typography
            sx={{
              fontFamily: "Modern Negra",
              fontSize: ["80px", "10vw"],
            }}
            id="hero-title"
          >
            MOJITO
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                textAlign: "center",
              }}
              id="hero-subtitle"
            >
              Sip the Spirit <br /> of Summer
            </Typography>
          </Box>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Text",
                fontSize: "18px",
                color: "white",
                textAlign: "center",
              }}
              id="hero-subtitle"
            >
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </Typography>
            <Link href="#" underline="none" color="inherit" sx={{ ":hover": { color: "yellow" }, opacity: 0.8, fontWeight: 600, ml: 2 }}>
              View cocktails
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
