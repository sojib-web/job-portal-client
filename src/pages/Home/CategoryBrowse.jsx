import Slider from "react-slick";
import {
  FaBullhorn,
  FaHeadset,
  FaBuilding,
  FaLightbulb,
  FaUserTie,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    icon: <FaBullhorn />,
    title: "Marketing & Sale",
    jobs: 1526,
    color: "bg-blue-400",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Help",
    jobs: 185,
    color: "bg-green-400",
  },
  {
    icon: <FaBuilding />,
    title: "Finance",
    jobs: 168,
    color: "bg-yellow-400",
  },
  {
    icon: <FaLightbulb />,
    title: "Software",
    jobs: 1856,
    color: "bg-purple-400",
  },
  {
    icon: <FaUserTie />,
    title: "Human Resource",
    jobs: 165,
    color: "bg-pink-400",
  },
];

function CategoryBrowse() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-14 px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Browse by category
        </h2>
        <p className="text-gray-500 mb-10">
          Find the job that’s perfect for you. About{" "}
          <strong>800+ new jobs</strong> every day
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {categories.map((cat, idx) => (
            <div key={idx} className="px-2 md:px-3">
              <div
                className="flex flex-row items-center bg-gradient-to-tr from-white to-gray-50 rounded-xl shadow-md px-6 py-6 mb-6 cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-transform h-full min-h-[140px] md:min-h-[160px]"
                title={cat.title}
              >
                {/* Icon with colored circle */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full ${cat.color} text-white text-3xl shadow-lg`}
                >
                  {cat.icon}
                </div>

                {/* Divider */}
                <div className="mx-4 w-px h-12 bg-gray-300"></div>

                {/* Text content */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {cat.jobs} Jobs Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CategoryBrowse;
