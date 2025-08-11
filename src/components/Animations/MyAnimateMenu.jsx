import React, { useEffect, useRef, useState } from 'react'
import { easeIn, motion, MotionConfig } from 'motion/react'
import { Link } from 'react-router';

function MyAnimateMenu({ links }) {
  const [active, setActive] = useState(false);

  const containerRef = useRef(null)
  const { height, width } = useDimensions(containerRef)



  return (
    <div
      className='relative flex justify-start flex-1 w-125 max-w-full rounded-s-sm overflow-hidden'
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flex: 1,
        width: 500,
        maxWidth: "100%",
        minHeight: 80,
        // backgroundColor: 'green',
        borderRadius: 20,
        overflow: "hidden",

      }}
      >
        <div  className=''>
          <AnimatedBurgeButton active={active} setActive={setActive} />
        </div>
      
      <motion.nav
        initial={false}
        animate={active ? "open" : "closed"}
        custom={height}
        ref={containerRef}        
        className='fixed inset-0 z-50'
        style={{ pointerEvents: active ? 'auto' : 'none' }}
      >
        <motion.div          
          style={{
            backgroundColor: "#FE8CA3",
            // position: "absolute",
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right:0,
            // width: "100%",
          }}
          className="absolute inset-0 w-full h-full overflow-y-auto"
          variants={sidebarVariants}
        >         
          <AnimatedMenu links={links} />
        </motion.div>
      </motion.nav>

    </div>
  )
}
const AnimatedBurgeButton = ({ active, setActive }) => {

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className='fixed bg-white/0  hover:bg-fond-claro z-60 '
        style={{
          height: "80px", width: "80px", borderRadius: "100%"
        }}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%", top: "35%", x: "-50%", y: "-50%",
          }}
          className='absolute h-1 w-8 bg-white'
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"]
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"]
            },
          }}
        />
        <motion.span
          style={{
            left: "50%", top: "50%", x: "-50%", y: "-50%",
          }}
          className='absolute h-1 w-8 bg-white'
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%"
          }}
          className='absolute h-1 w-4 bg-white'
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"]

            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 10px)",
              bottom: ["50%", "50%", "35%"]

            },
          }} />

      </motion.button>
    </MotionConfig>
  )
}

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 10px 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(40px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
const AnimatedMenu = ({links}) => {
  return (
    <>
      <motion.ul
         className='grid place-items-center w-full pt-20 px-6 pb-0'
        style={{
          listStyle: "none",
          margin: 0,
          //padding: 25,          
          // position: "absolute",
         // marginTop: 80,
        }}
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}>
   {links.filter(link => link.active).map((item) => (
  <MenuItem item={item} key={item.url} />
))}
      </motion.ul>

    </>
  )

}
const MenuItem = ({ item }) => {
  return (
    <motion.li

      className='text-fondo-claro text-2xl uppercase cursor-pointer border-b-2 w-full pb-5 '
      style={{
        display: "flex",
        alignItems: "center",
         margin: 0,
        listStyle: "none",
        marginBottom: 20,
        cursor: "pointer",
      }}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
         <Link to={item.url} className='w-full  text-center'>
            {item.text}
        </Link>
         {/* <a href={item.url} className='w-full  text-center'>
          {item.text}
        </a> */}
   
      
    </motion.li>
  )
}

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
  }, [ref])

  return dimensions.current
}

export default MyAnimateMenu