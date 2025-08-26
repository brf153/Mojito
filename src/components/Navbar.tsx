import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: navRef.current,
		start: 'bottom top'
	 }
	});

	navTween.fromTo(navRef.current, { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })

  return (
    <Box
      ref={navRef}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        position: "fixed",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: { xs: "100%", md: "90%" },
          justifyContent: { xs: "space-around", md: "space-between" },
          mx: "auto",
          p: 2,
          px: { xs: 0, md: 8 },
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <img src="/images/logo.png" alt="Logo" />
          <Typography
            variant="h5"
            sx={{ fontFamily: "serif", fontWeight: "bold" }}
          >
            Velvet Pour
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 6 }}>
          {navLinks.map((link) => (
            <Typography key={link.id} sx={{ fontFamily: "serif" }}>
              {link.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
