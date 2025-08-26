import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { featureLists } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {

  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    const splitText = new SplitText("#about-title", {
      "type": "words"
    })

    gsap.from(splitText.words, {
      duration: 0.2,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger:{
        trigger: "#about-title",
        start: "top bottom",
        end: "bottom center",
        scrub: true
      }
    })

    console.log("checking gridref", gridRef)

    gsap.from(
      gridRef.current ? Array.from(gridRef.current.children) : [],
      {
        duration: 0.2,
        opacity: 0,
        stagger: 0.1,
        ease: 'power1.inOut',
        scrollTrigger:{
          trigger: gridRef.current,
          start: "top bottom",
          end: "80% bottom",
          scrub: true
        }
      }
    )

  },[])
  
  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <Box
        sx={{
          height: "80%",
          width: "100%",
          p: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              fontSize: 40,
              fontWeight: "bold",
              mb: 2,
              display: "flex",
              flexDirection: "column",
              width: "35%",
              textAlign: "left",
              gap: 2,
            }}
          >
            <Chip
              label="Best Cocktails"
              sx={{ backgroundColor: "white", width: "fit-content" }}
            />
            <Typography
              sx={{
                fontSize: "6.2vmin",
                fontFamily: "font-modern-negra",
                lineHeight: 1.2,
                fontWeight: "bold",
              }}
              id="about-title"
            >
              Where every detail matters—from muddle to garnish
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: 20,
              mb: 2,
              width: "32%",
              textAlign: "left",
              gap: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography fontSize={"18px"}>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </Typography>
            <Box sx={{ display: "flex", gap: 4, width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  sx={{ color: "white" }}
                />
                <Typography
                  sx={{ mt: 1, fontSize: "18px", fontWeight: "bold" }}
                >
                  4.5/5
                </Typography>
                <Typography>More than +120000 customers</Typography>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#565656" }}
              />
              <Box sx={{ width: "20%" }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 24,
                    background:
                      "linear-gradient(180deg, #313131 0%, #0F0F0F 100%)",
                    color: "white",
                    p: 2,
                    py: 2,
                    width: "8.5rem",
                    height: "3rem",
                  }}
                >
                  <img
                    src="/images/profile1.png"
                    alt="profile1"
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      left: "1rem",
                      width: "2rem",
                    }}
                  />
                  <img
                    src="/images/profile2.png"
                    alt="profile2"
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      left: "2.5rem",
                      width: "2rem",
                    }}
                  />
                  <img
                    src="/images/profile3.png"
                    alt="profile3"
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      left: "4rem",
                      width: "2rem",
                    }}
                  />
                  <img
                    src="/images/profile4.png"
                    alt="profile4"
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      left: "5.5rem",
                      width: "2rem",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Grid ref={gridRef} container rowSpacing={2} columnSpacing={3} sx={{ mt: 2 }}>
            <Grid size={3}>
              <img
                src="/images/abt1.png"
                alt="abt1"
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid size={3}>
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 8,
                  flexDirection: "column",
                  gap: 2,
                  height: "100%",
                  background:
                    "linear-gradient(180deg, #313131 0%, #0F0F0F 100%)",
                  p: 2,
                }}
              >
                <Typography
                  sx={{ fontFamily: "font-modern-negra", fontSize: "24px" }}
                >
                  Crafted to Impress
                </Typography>
                <Divider
                  flexItem
                  variant="middle"
                  sx={{ borderColor: "#565656" }}
                />
                <List>
                  {featureLists.map((feature, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton disableTouchRipple>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid size={6}>
              <img
                src="/images/abt2.png"
                alt="abt2"
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid size={8}>
              <img
                src="/images/abt3.png"
                alt="abt3"
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid size={4}>
              <img
                src="/images/abt4.png"
                alt="abt4"
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
