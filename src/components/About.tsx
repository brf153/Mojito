import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { Box } from '@mui/material';

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<Box id="about">
	 <Box className="mb-16 md:px-0 px-5">
		<Box className="content">
		 <Box className="md:col-span-8">
			<p className="badge">Best Cocktails</p>
			<h2>
			 Where every detail matters <span className="text-white">-</span>
				from muddle to garnish
			</h2>
		 </Box>
		 
		 <Box className="sub-content">
			<p>
			 Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
			</p>
			
			<Box>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +12000 customers
			 </p>
			</Box>
		 </Box>
		</Box>
	 </Box>
	 
	 <Box className="top-grid">
		<Box className="xl:col-span-3">
		 <Box  className="noisy" />
		 <img src="/images/abt1.png" alt="grid-img-1" />
		</Box>
		
		<Box className="xl:col-span-6">
		 <Box  className="noisy" />
		 <img src="/images/abt2.png" alt="grid-img-2" />
		</Box>
		
		<Box className="xl:col-span-3">
		 <Box  className="noisy" />
		 <img src="/images/abt5.png" alt="grid-img-5" />
		</Box>
	 </Box>
	 
	 <Box className="bottom-grid">
		<Box className="md:col-span-8">
		 <Box  className="noisy" />
		 <img src="/images/abt3.png" alt="grid-img-3" />
		</Box>
		
		<Box className="md:col-span-4">
		 <Box  className="noisy" />
		 <img src="/images/abt4.png" alt="grid-img-4" />
		</Box>
	 </Box>
	 
	</Box>
 )
}
export default About