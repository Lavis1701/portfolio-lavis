import profilePic from "../assets/hero-img.png"
import {motion} from "framer-motion"

const containervarients = {
    hidden:{opacity: 0, x:-100},
    visible:{
        opacity:1,
        x:0,
        transition: {
            duration :0.5,
            straggerChildren:0.5,
        }
    }
}

const childVariants = {
    hidden:{opacity:0, x:-100},
    visible:{opacity:1,x:0,transition:{duration:0.5}}

}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-5">
                <motion.img src={profilePic} alt="LAVIS LALU" className="border border-stone-900 rounded-3xl"
                width={400}
                height={450}
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:0.1}}/>
            </div>
            </div>
            <div className="w-full lg:w-1/2">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containervarients} 
            
            
            className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl">LAVIS LALU</motion.h2>
                <motion.span 
                variants={childVariants}
                className="bg-gradient-to-r from-stone-100 to-stone-600  bg-clip-text text-3xl tracking-tight text-transparent">FULL STACK DEVELOPER</motion.span>
                <motion.p 
                variants={childVariants}
                
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter ">
                Aspiring MERN stack developer with a strong understanding of MongoDB, Express.js, React, and Node.js, looking to kickstart my career in software development. Passionate about building efficient, scalable web applications and eager to apply my coding skills and enthusiasm for technology in a challenging role. Dedicated to continuous learning and making meaningful contributions to a forward-thinking development team .
                </motion.p>
                <motion.a 
                variants={childVariants}
                
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                    Download Resume
                </motion.a>

            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero
