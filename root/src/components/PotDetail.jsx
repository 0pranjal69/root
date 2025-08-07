import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";

const potsData = [
  {
    images: [
      {
        src: "/white pot.png",
        className:
          "absolute sm:w-1/4 w-1/2 sm:rotate-12 -rotate-12 sm:top-1/3 top-1/2  right-1/3",
      },
      {
        src: "/black pot.png",
        className:
          "absolute sm:w-1/4 w-1/2 sm:-rotate-12 rotate-12 sm:top-1/4 top-1/2 left-1/3",
      },
    ],
    img2: [
      {
        src: "/black pot.png",
        className:
          "w-[50%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-65 sm:-bottom-1/2 -bottom-1/3",
      },
    ],
    title: "VESSEL",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 20",
      "Width (inch) - 14.9",
      "Length (inch) - 14.9",
      "Weight (kg) - 3.35",
      "Color - Black",
      "Price(MRP) - Rs.4,700",
    ],
    link: ["/", "/pot/petalia"],
  },

  {
    img2: [
      {
        src: "/blue pot.png",
        className:
          "w-[50%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-70 -bottom-1/2",
      },
    ],
    images: [
      {
        src: "/blue pot.png",
        className:
          "absolute sm:w-1/4 w-1/3 z-1 -rotate-12 sm:top-1/4 top-[70%] sm:left-[35%] left-[25%]",
      },
      {
        src: "/brown pot.png",
        className:
          "absolute sm:w-1/5 w-1/3 -rotate-32 sm:top-[70%] top-[70%] sm:left-[25%] left-[10%]",
      },
      {
        src: "/blue2 pot.png",
        className:
          "absolute sm:w-1/5 w-1/3 rotate-32 sm:top-[60%] top-[70%] right-[10%]",
      },
      {
        src: "/gold pot.png",
        className:
          "absolute sm:w-1/4 w-1/3 rotate-12 sm:top-1/3 top-[70%] right-1/5 ",
      },
    ],
    title: "petalia",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 25",
      "Width (inch) - 15",
      "Length (inch) - 15",
      "Weight (kg) - 2.95",
      "Color - Black & Golden",
      "Price(MRP) - Rs.4,400",
    ],
    link: ["/pot/vessel", "/pot/lunara"],
  },

  {
    images: [
      {
        src: "/white3.png",
        className:
          "absolute sm:w-1/4 w-1/3 z-1 -rotate-12 sm:top-1/4 top-[70%] sm:left-[35%] left-[25%]",
      },
      {
        src: "/blue3.png",
        className:
          "absolute sm:w-1/5 w-1/3 -rotate-32 sm:top-[70%] top-[70%] sm:left-[25%] left-[10%]",
      },
      {
        src: "/brown3.png",
        className:
          "absolute sm:w-1/5 w-1/3 rotate-32 sm:top-[60%] top-[70%] right-[10%]",
      },
      {
        src: "/black3.png",
        className:
          "absolute sm:w-1/4 w-1/3 rotate-12 sm:top-1/3 top-[70%] right-1/5 ",
      },
    ],
    img2: [
      {
        src: "/white3.png",
        className:
          "w-[60%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-50 -bottom-1/3",
      },
    ],
    title: "Lunara",
    subtitle: "(table POT)",
    description: [
      "Height (inch) - 12",
      "Width (inch) - 10",
      "Length (inch) - 10",
      "Weight (kg) - 2.2",
      "Color - White",
      "Price(MRP) - Rs.3,300",
    ],
    link: ["/pot/petalia", "/pot/terra"],
  },

  {
    images: [
      {
        src: "/white4.png",
        className:
          "absolute sm:w-1/4 w-1/2 sm:rotate-12  -rotate-12 top-1/3  right-1/3",
      },
      {
        src: "/brown4.png",
        className:
          "absolute sm:w-1/4 w-1/2 sm:-rotate-12 rotate-12  top-1/4 left-1/3",
      },
    ],
    img2: [
      {
        src: "/brown4.png",
        className:
          "sm:w-[50%] w-[60%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-65  -bottom-1/2",
      },
    ],
    title: "Terra",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 19.2",
      "Width (inch) - 15",
      "Length (inch) - 15",
      "Weight (kg) - 2.7",
      "Color - White",
      "Price(MRP) - Rs.5,200",
    ],
    link: ["/pot/lunara", "/pot/bloomia"],
  },

  {
    images: [
      {
        src: "/bloomia2.png",
        className:
          "absolute w-1/3 sm:w-1/4 z-1 top-[50%] sm:top-1/5  right-1/3",
      },
      {
        src: "/bloomia4.png",
        className:
          "absolute w-1/3 sm:w-1/4 sm:-rotate-12 -rotate-32 top-[80%] sm:top-1/4 sm:left-[25%] left-[10%]",
      },
      {
        src: "/bloomia3.png",
        className:
          "absolute w-1/3 sm:w-1/5 -rotate-32 top-[60%] sm:top-[70%] sm:left-[25%] left-[10%]",
      },
      {
        src: "/bloomia5.png",
        className:
          "absolute w-1/3 sm:w-1/5 rotate-32 top-[80%] sm:top-[60%] sm:right-[10%] right-[5%]",
      },
      {
        src: "/bloomia1.png",
        className:
          "absolute w-1/3 sm:w-[25%] rotate-12 top-[60%] sm:top-1/3  sm:right-1/5 right-[10%]",
      },
    ],
    img2: [
      {
        src: "/bloomia.png",
        className:
          "w-[90%] sm:w-[60%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-75 -bottom-[40%]",
      },
    ],
    title: "Bloomia",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 18",
      "Width (inch) - 15.7",
      "Length (inch) - 15.7",
      "Weight (kg) - 2.9",
      "Color - Brown",
      "Price(MRP) - Rs.4,400",
    ],
    link: ["/pot/terra", "/pot/lotus"],
  },

  {
    images: [
      {
        src: "/black6.png",
        className:
          "absolute sm:w-1/4 w-[60%] sm:rotate-12 -rotate-12 top-1/3  right-1/3",
      },
      {
        src: "/white6.png",
        className:
          "absolute sm:w-1/4 w-[60%] rotate-12 sm:-rotate-12 top-1/4 left-1/3",
      },
    ],
    img2: [
      {
        src: "/black6.png",
        className:
          "sm:w-[60%] w-[90%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center  -rotate-25 sm:-bottom-[50%] -bottom-1/2",
      },
    ],
    title: "Lotus",
    subtitle: "(table pot)",
    description: [
      "Height (inch) - 12.2",
      "Width (inch) - 25.3",
      "Length (inch) - 25.3",
      "Weight (kg) - 3",
      "Color - White & Black",
      "Price(MRP) - Rs.4,200",
    ],
    link: ["/pot/bloomia", "/pot/squara"],
  },

  {
    images: [
      {
        src: "/pink7.png",
        className:
          "absolute sm:w-1/4 w-[60%] sm:rotate-12 -rotate-12  sm:top-1/3  right-1/3",
      },
      {
        src: "/brown7.png",
        className:
          "absolute sm:w-1/4 w-[60%] rotate-12 sm:-rotate-12  sm:top-1/4 left-1/3",
      },
    ],
    img2: [
      {
        src: "/brown7.png",
        className:
          "w-[70%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-35 -bottom-[25%]",
      },
    ],
    title: "squara",
    subtitle: "(table pot)",
    description: [
      "Height (inch) - 8",
      "Width (inch) - 8",
      "Length (inch) - 8",
      "Weight (kg) - 0.65",
      "Color - Pink & Seafoam Green",
      "Price(MRP) - Rs.1,350",
    ],
    link: ["/pot/lotus", "/pot/conica"],
  },

  {
    images: [
      {
        src: "/brown8.png",
        className: "absolute sm:w-1/4 w-1/2  top-1/4 left-1/3 ",
      },
    ],
    img2: [
      {
        src: "/brown8.png",
        className:
          "w-[70%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-35 top-[10%]",
      },
    ],
    title: "conica",
    subtitle: "(table pot)",
    description: [
      "Height (inch) - 12",
      "Width (inch) - 12",
      "Length (inch) - 12",
      "Weight (kg) - 2.8",
      "Color - White",
      "Price(MRP) - Rs.2,850",
    ],
    link: ["/pot/squara", "/pot/vine"],
  },

  {
    images: [
      {
        src: "/blue9.png",
        className: "absolute sm:w-1/4 w-1/2 -rotate-12 top-1/4 left-1/3",
      },
    ],
    img2: [
      {
        src: "/blue9.png",
        className:
          "w-[60%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-55 top-1/2",
      },
    ],
    title: "vine",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 8",
      "Width (inch) - 7",
      "Length (inch) - 7",
      "Weight (kg) - 0.55",
      "Color - Persian Blue",
      "Price(MRP) - Rs.1,290",
    ],
    link: ["/pot/conica", "/pot/tanno"],
  },

  {
    images: [
      {
        src: "/black10.png",
        className:
          "absolute w-[70%] sm:w-1/4 -rotate-12 sm:top-1/4 top-[30%] left-[35%]",
      },
      {
        src: "/white10.png",
        className:
          "absolute w-1/2 sm:w-1/5 -rotate-32 sm:top-[70%] top-1/2 sm:left-[25%] left-[10%]",
      },
      {
        src: "/pink10.png",
        className:
          "absolute w-1/2 sm:w-1/5 rotate-32 sm:top-[60%] top-[60%] sm:right-[10%] right-[5%]",
      },
      {
        src: "/wb10.png",
        className:
          "absolute w-1/2 sm:w-[25%] sm:rotate-12 -rotate-24 sm:top-1/3 top-[70%] sm:right-1/5 right-[60%] ",
      },
    ],
    img2: [
      {
        src: "/tanno.png",
        className:
          "sm:w-[80%] w-full pic absolute left-1/2  -translate-x-1/2  flex justify-center items-center rotate-y-180 -rotate-10 sm:-bottom-[70%] -bottom-[50%]",
      },
    ],
    title: "Tanno",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 13",
      "Width (inch) - 15.7",
      "Length (inch) - 31.4",
      "Weight (kg) - 15",
      "Color - Black & White",
      "Price(MRP) - Rs.5,200",
    ],
    link: ["/pot/vine", "/pot/ova"],
  },

  {
    images: [
      {
        src: "/blue11.png",
        className: "absolute sm:w-1/4 w-1/2 -rotate-12 top-1/4 left-[35%]",
      },
    ],
    img2: [
      {
        src: "/blue11.png",
        className:
          "w-[50%] pic absolute left-1/2 -translate-x-1/2  flex justify-center items-center -rotate-75 -bottom-1/3",
      },
    ],
    title: "Ova",
    subtitle: "(floor pot)",
    description: [
      "Height (inch) - 22",
      "Width (inch) - 14",
      "Length (inch) - 14",
      "Weight (kg) - 5",
      "Color - Blue",
      "Price(MRP) - Rs.3,800",
    ],
    link: ["/pot/tanno", "/pot/coming-soon"],
  },
  {
    comingSoon: true,
    title: "Coming Soon",
    subtitle: "(under progress)",
    description: [],
    images: [],
    img2: [],
  },
];

function PotDetail() {
  const { title } = useParams();
  const pot = potsData.find(
    (p) => p.title.toLowerCase().replace(/\s/g, "-") === title.toLowerCase()
  );

  if (!pot) {
    return (
      <div className="min-h-screen bg-[#efecdb] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-red-600 bebas">Pot Not Found</h1>
        <Link to="/" className="text-blue-600 underline mt-4">
          Go Back
        </Link>
      </div>
    );
  }
  if (pot.comingSoon) {
    return (
      <div className="min-h-screen bg-[#efecdb] flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl text-[#77933B] amatic font-bold mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-[#2C481E]">
          This pot is currently under development. Please check back later!
        </p>
        <Link
          to="/"
          className="mt-6 text-white bg-[#047A8E] px-6 py-2 rounded-full hover:bg-[#035f6c]"
        >
          ← Back to pots
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen w-full bg-[#BBCE96] pt-[110px] overflow-hidden">
        <div className="blank h-1/2 bg-[#efecdb] w-full flex justify-center items-center relative sm:overflow-visible   ">
          {pot.images.map((imgObj, index) => (
            <img
              key={index}
              src={imgObj.src}
              alt={`${pot.title} ${index + 1}`}
              className={imgObj.className}
            />
          ))}{" "}
          <div className="w-full h-full p-3 raleway text-[#2C481E] flex justify-between ">
            <div className="">
              <h1 className="text-5xl uppercase">{pot.title}</h1>
              <h2 className="text-2xl mb-4">{pot.subtitle}</h2>
            </div>
            <div className=" flex h-fit gap-x-1 z-1">
              <>
  {pot.link[0] && (
    <Link
      to={pot.link[0]}
      className="animated-gradient-btn text-white px-6 py-2 rounded-full shadow-md active:scale-95 transition-all duration-200 ease-in-out righteous-regular"
    >
      Prev
    </Link>
  )}

  {pot.link[0] && pot.link[1] && (
    <Link
      to={pot.link[1]}
      className="animated-gradient-btn text-white px-6 py-2 rounded-full shadow-md active:scale-95 transition-all duration-200 ease-in-out righteous-regular"
    >
      Next
    </Link>
  )}
</>

            </div>
          </div>
        </div>

        <div className="detail h-1/2  bg-[#BBCE96] w-fit text-[#2C481E]  p-[100px] flex justify-start items-center">
          <h1 className="w-[100%]">Scroll down for more!</h1>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative bg-[#efecdb]">
        <div className="h-full w-full  sm:p-[100px] p-10  text-[#77933B]">
          <h1 className="sm:text-4xl text-6xl amatic font-extrabold">
            Discription
          </h1>
          <div className="DescBox text-[0.8rem] font-semibold leading-5  my-6">
            {pot.description.map((line, i) => (
              <h1 key={i}>{line}</h1>
            ))}
          </div>
          <h1 className="leading-4 pt-5 w-1/2 text-[0.8rem]">
            All the pots we offer comes in customized colors and various options
            with glossy and matt finish as per clients requirements.
          </h1>
        </div>
        <div className="img2 w-[90vw] mx-auto sm:h-screen h-[40vh]  overflow-x-visible relative  ">
          <h1 className="amatic text-5xl font-extrabold text-[#77933B] ">
            Texture
          </h1>
          <div className="">
            {pot.img2.map((img, index) => (
              <img key={index} src={img.src} className={img.className} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PotDetail;
