// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import team1 from "../../assets/banner_1.jpg";
import team2 from "../../assets/banner_2.jpg";

function Banner() {
  return (
    <div className=" py-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10  max-w-7xl mx-auto px-4">
        {/* Right Side Image (50%) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex-1 justify-center"
        >
          <motion.img
            animate={{
              y: [0, 50, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            src={team1}
            className="w-5/6 h-auto border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-500 "
            alt="Job Banner"
          />

          <motion.img
            animate={{
              x: [100, 150, 100],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            src={team2}
            className="w-[300px] h-auto border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-500 "
            alt="Job Banner"
          />
        </motion.div>

        {/* Left Side Content (50%) */}
        <motion.div
          className="w-full flex-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            The{" "}
            <motion.span
              animate={{ color: ["#8B5CF6", "#22D3EE", "#4ADE80"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="inline-block"
            >
              Easiest Way
            </motion.span>{" "}
            to Get Your New Job
          </motion.h1>

          <p className="py-6 text-gray-600 max-w-md">
            Each month, over 3 million job seekers use our platform, submitting
            more than 140,000 applications every single day. Find your perfect
            role today!
          </p>

          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
