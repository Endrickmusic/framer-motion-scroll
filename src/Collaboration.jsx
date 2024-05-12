import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {

    const targetRef = useRef(null)
    const extendedRef = useRef(null)

return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{  }} className="origin-top">
              <motion.img
                style={{  }}
                src="/main-screen.svg"
                className="h-auto max-h-none w-[70vw]"
              />
              <motion.div
                style={{ }}
                className="absolute right-[10%] top-[1.5%] flex gap-2"
              >
                <motion.img
                  style={{  }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                  src="https://unsplash.com/photos/_H6wpor9mjs/download?force=true&w=128&h=128"
                />
                <motion.img
                  style={{  }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                  src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                />
                <motion.img
                  style={{  }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover"
                  src="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}