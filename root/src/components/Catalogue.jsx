import React from "react";
import About from "./About";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";

function Catalogue() {
  const potData = [
    {
      PotNameFirst: "VESSEL",
      PotNameSecond: "",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "",
      MainImg: "/pot1.jpg",
      DescBox: [
        "Height (inch) - 20",
        "Width (inch) - 14.9",
        "Length (inch) - 14.9",
        "Weight (kg) - 3.35",
        "Color - Black",
        "Price(MRP) - Rs.4,700",
      ],
      PotsImg: ["/black pot.png", "/white pot.png"],
      TextureImg: [{
        src: "/black pot.png",
        className:
          "w-[90%]  absolute sm:bottom-0 bottom-[20%] rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "Pe",
      PotNameSecond: "taLia",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/final 2 .jpg",
      DescBox: [
        "Height (inch) - 25",
        "Width (inch) - 15",
        "Length (inch) - 15",
        "Weight (kg) - 2.95",
        "Color - Black & Golden",
        "Price(MRP) - Rs.4,400",
      ],
      PotsImg: [
        "/gold pot.png",
        "/blue pot.png",
        "/brown pot.png",
        "/blue2 pot.png",
      ],
      TextureImg: [{
        src: "/gold pot.png",
        className:
          "w-[90%] h-[90%] absolute  -bottom-[10%] rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "lu",
      PotNameSecond: "nara",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot3.jpg",
      DescBox: [
        "Height (inch) - 12",
        "Width (inch) - 10",
        "Length (inch) - 10",
        "Weight (kg) - 2.2",
        "Color - White",
        "Price(MRP) - Rs.3,300",
      ],
      PotsImg: ["/white3.png", "/blue3.png", "/brown3.png", "/black3.png"],
      TextureImg: [{
        src: "/white3.png",
        className:
          "w-full absolute bottom-1/3 rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "te",
      PotNameSecond: "rra",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot4.jpg",
      DescBox: [
        "Height (inch) - 19.2",
        "Width (inch) - 15",
        "Length (inch) - 15",
        "Weight (kg) - 2.7",
        "Color - White",
        "Price(MRP) - Rs.5,200",
      ],
      PotsImg: ["/white4.png", "/brown4.png"],
      TextureImg: [{
        src: "/white4.png",
        className:
          "w-[90%] absolute bottom-0 rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "bl",
      PotNameSecond: "oomia",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot5.jpg",
      DescBox: [
        "Height (inch) - 18",
        "Width (inch) - 15.7",
        "Length (inch) - 15.7",
        "Weight (kg) - 2.9",
        "Color - Brown",
        "Price(MRP) - Rs.4,400",
      ],
      PotsImg: [
        "/blue5.png",
        "/brown5.png",
        "skin5.png",
        "white5.png",
        "darkB5.png",
      ],
      TextureImg: [{
        src: "/bloomia.png",
        className:
          "w-full absolute h-full sm:bottom-1/5 bottom-1 rotate-20 -left-1/2",
      },],
    },
    {
      PotNameFirst: "lotus",
      PotNameSecond: "",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot6.jpg",
      DescBox: [
        "Height (inch) - 12.2",
        "Width (inch) - 25.3",
        "Length (inch) - 25.3",
        "Weight (kg) - 3",
        "Color - White & Black",
        "Price(MRP) - Rs.4,200",
      ],
      PotsImg: ["/black6.png", "white6.png"],
      TextureImg: [{
        src: "/black6.png",
        className:
          "w-full h-full absolute bottom-[10%] rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "squ",
      PotNameSecond: "ara",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#ffd3d5]",
      MainImg: "/pot7.jpg",
      DescBox: [
        "Height (inch) - 8",
        "Width (inch) - 8",
        "Length (inch) - 8",
        "Weight (kg) - 0.65",
        "Color - Pink & Seafoam Green",
        "Price(MRP) - Rs.1,350",
      ],
      PotsImg: ["/pink7.png", "brown7.png"],
      TextureImg: [{
        src: "/pink7.png",
        className:
          "w-full absolute bottom-[10%] h-full rotate-20 -left-1/3",
      },],
    },
    {
      PotNameFirst: "co",
      PotNameSecond: "nica",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot8.jpg",
      DescBox: [
        "Height (inch) - 12",
        "Width (inch) - 12",
        "Length (inch) - 12",
        "Weight (kg) - 2.8",
        "Color - White",
        "Price(MRP) - Rs.2,850",
      ],
      PotsImg: ["brown8.png"],
      TextureImg: [{
        src: "/brown8.png",
        className:
          "w-full sm:h-full absolute bottom-0 rotate-20 z-10 -left-1/3",
      },],
    },
    {
      PotNameFirst: "vin",
      PotNameSecond: "e",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot9.jpg",
      DescBox: [
        "Height (inch) - 8",
        "Width (inch) - 7",
        "Length (inch) - 7",
        "Weight (kg) - 0.55",
        "Color - Persian Blue",
        "Price(MRP) - Rs.1,290",
      ],
      PotsImg: ["blue9.png"],
      TextureImg: [{
        src: "/blue9.png",
        className:
          "w-[80%] sm:h-[80%] h-[40%] absolute bottom-0 rotate-20 z-10 -left-1/3",
      },],
    },
    {
      PotNameFirst: "ta",
      PotNameSecond: "nno",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot10.jpg",
      DescBox: [
        "Height (inch) - 13",
        "Width (inch) - 15.7",
        "Length (inch) - 31.4",
        "Weight (kg) - 15",
        "Color - Black & White",
        "Price(MRP) - Rs.5,200",
      ],
      PotsImg: ["wb10.png", "pink10.png", "white10.png", "black10.png"],
      TextureImg: [{
        src: "/tanno.png",
        className:
          "w-full  absolute sm:bottom-1/2 -left-1/4 bottom-1/2  z-10 rotate-y-180 rotate-10 ",
      },],
    },
    {
      PotNameFirst: "ov",
      PotNameSecond: "a",
      PotNameFirstClass: "sm:text-[#77933b] text-[#d2e7a8]",
      PotNameSecondClass: "text-[#d2e7a8]",
      MainImg: "/pot11.jpg",
      DescBox: [
        "Height (inch) - 22",
        "Width (inch) - 14",
        "Length (inch) - 14",
        "Weight (kg) - 5",
        "Color - Blue",
        "Price(MRP) - Rs.3,800",
      ],
      PotsImg: ["blue11.png"],
      TextureImg: [{
        src: "/blue11.png",
        className:
          "w-[80%] sm:h-[80%] absolute z-10 bottom-0 rotate-20 -left-1/3",
      },],
    },
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="w-full h-full  bg-[#2c3419] flex flex-col items-center justify-center  pt-[100px]">
        <img src="/root.png" alt="" className=" w-1/2  mt-10 object-contain " />
        <About />

        {isMobile ? (
          <>
            {potData.map((pot, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className="h-[40vh] w-[90vw] bg-[#efecdb] rounded-[20px] relative overflow-hidden flex justify-end mt-10 mb-2 "
                >
                  <div className="w-[13%]  h-full  flex justify-end items-start pb-2 raleway uppercase font-light relative">
                    <h1
                      className={`PotName z-10  flex text-5xl absolute top-1/2 right-1/2 -translate-x-1/2`}
                    >
                      <span className={`${pot.PotNameFirstClass}`}>
                        {pot.PotNameFirst}
                      </span>{" "}
                      <span className={`${pot.PotNameSecondClass}`}>
                        {pot.PotNameSecond}
                      </span>
                    </h1>
                    <img src="/root black.png" alt="" className="z-1" />
                  </div>
                  <div className="absolute z-0 h-full w-full">
                    <img
                      src={pot.MainImg}
                      alt=""
                      className="MainImg h-full w-full brightness-75"
                    />
                  </div>
                </div>{" "}
                <div className="h-[60vh] w-[90vw] bg-[#efecdb] rounded-[20px] relative overflow-hidden flex justify-end mb-10 ">
                  <div className="details w-fit flex justify-center items-start flex-col bg-[#8eaf46] text-[#d2e7a8] px-3 h-1/2 ">
                    <h1 className="text-3xl my-1">Description</h1>
                    <div className="DescBox text-[0.8rem]">
                      {pot.DescBox.map((line, i) => (
                        <h1 key={i}>{line}</h1>
                      ))}
                    </div>
                  </div>
                  <div className="details flex flex-col justify-center items-start pl-5 gap-3 w-fit min-w-[50%] absolute left-0 bottom-0 z-[2] h-1/2 bg-[#bbce96]">
                    <div className="h-1/3 w-full flex pt-5 items-center">
                      <h1 className="text-[0.6em] text-[#77933c] leading-2.5 pr-5 absolute">
                        All the pots we offer come in customized colors and
                        various options with glossy and matt finish as per
                        client’s requirements.
                      </h1>
                    </div>
                    <div className="PotsImg  flex gap-4 p-2 pr-7">
                      {pot.PotsImg.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-[70px]" />
                      ))}
                    </div>
                  </div>
                  <div className="texture w-[60%] h-full flex flex-col items-start justify-start relative overflow-hidden">
                    <h1 className="p-7 z-1 pl-5 text-3xl text-[#8eaf46]">
                      Texture
                    </h1>
                    <img
                      src="/root-2.png"
                      alt=""
                      className="absolute top-0 right-0 w-1/2 h-full z-[0]"
                    />
                    {pot.TextureImg.map((texture, i) => (
                      <img
                        key={i}
                        src={texture.src}
                        alt=""
                        className={texture.className}
                      />
                    ))}
                    
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className="min-h-[50vh] w-[90vw] bg-[#efecdb] overflow-hidden text-[#41472c] rounded-[20px] relative flex flex-col md:flex-row justify-between my-10 px-4  gap-4">
              <div className="Information py-5 w-full md:w-1/3 h-auto md:h-full flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Terms & Conditions
                  </h1>
                  <ul className="list-disc pl-5 text-sm sm:text-[13px] leading-relaxed space-y-1">
                    <li>Transportation Charges will be applied separately.</li>
                    <li>
                      Prices are subject to change without any prior notice.
                    </li>
                    <li>
                      All taxes (GST:18% applicable as per Government Rules).
                    </li>
                    <li>
                      Delivery will be released after the 100% payment is
                      credited.
                    </li>
                    <li>
                      Proforma will be valid for 30 days from the date of its
                      issue.
                    </li>
                    <li>Any dispute is subject to Delhi jurisdiction only.</li>
                  </ul>
                </div>
              </div>

              <div className="Address w-full md:w-1/3 flex justify-start md:justify-end pb-5">
                <div className="w-full md:w-[80%] text-xs sm:text-sm font-semibold space-y-2">
                  <p>Email - srijantechnologies22@gmail.com</p>
                  <p>Contact - +91 9599194890 / 92</p>
                  <p>
                    Find us - S-207, 2ND Floor, Ajnara Bhawan, D-Block Market,
                    Vivek Vihar, Ph-1, Delhi-10095
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="image w-1/2 sm:relative absolute h-full right-0">
                <img
                  src="/root-2.png"
                  alt="img not found"
                  className=" h-full absolute right-0 w-1/2 sm:opacity-100 opacity-50 z-0"
                />
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            {potData.map((pot, index) => (
              <div
                key={index}
                className="h-[70vh] w-[90vw] bg-[#efecdb] rounded-[20px] relative overflow-hidden flex justify-end my-10 "
              >
                <div className="w-[13%] h-full  flex justify-end items-start pb-2 raleway uppercase font-light relative">
                  <h1
                    className={`PotName flex text-5xl absolute top-1/2 left-0 translate-x-1/3 -translate-y-1/2`}
                  >
                    <span className={`${pot.PotNameFirstClass}`}>
                      {pot.PotNameFirst}
                    </span>{" "}
                    <span className={`${pot.PotNameSecondClass}`}>
                      {pot.PotNameSecond}
                    </span>
                  </h1>
                  <img src="/root black.png" alt="" />
                </div>
                <div className="w-[43%]  h-full">
                  <img
                    src={pot.MainImg}
                    alt=""
                    className="MainImg h-full w-full"
                  />
                </div>
                <div className="w-[44%] h-full flex relative ">
                  <div className="details w-fit flex justify-center items-start flex-col bg-[#8eaf46] text-[#d2e7a8] px-3 h-1/2">
                    <h1 className="text-3xl my-3">Description</h1>
                    <div className="DescBox text-[0.8rem]">
                      {pot.DescBox.map((line, i) => (
                        <h1 key={i}>{line}</h1>
                      ))}
                    </div>
                  </div>
                  <div className="details flex flex-col justify-center items-start pl-5 gap-3 w-fit min-w-[45%] absolute left-0 bottom-0 z-[2] h-1/2 bg-[#bbce96]">
                    <div className="h-1/3 w-full flex pt-5 items-center">
                      <h1 className="text-[0.6em] text-[#77933c] leading-2.5 pr-5 absolute">
                        All the pots we offer come in customized colors and
                        various options with glossy and matt finish as per
                        client’s requirements.
                      </h1>
                    </div>
                    <div className="PotsImg  flex gap-4 p-2 pr-7">
                      {pot.PotsImg.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-[70px]" />
                      ))}
                    </div>
                  </div>
                  <div className="texture w-[60%] h-full flex flex-col items-start justify-start relative overflow-hidden">
                    <h1 className="p-7 pl-5 text-3xl text-[#8eaf46]">
                      Texture
                    </h1>
                    <img
                      src="/root-2.png"
                      alt=""
                      className="absolute top-0 right-0 w-1/2 h-full z-[0]"
                    />
                    {pot.TextureImg.map((texture, i) => (
                      <img
                        key={i}
                        src={texture.src}
                        alt=""
                        className={`TextureImg ${texture.className}`}
                      />
                    ))}
                   
                  </div>
                </div>
              </div>
            ))}
            <div
              className="h-[70vh] w-[90vw] bg-[#efecdb] overflow-hidden text-[#adb987] rounded-[20px] relative 
        flex justify-end my-10"
            >
              {" "}
              <div className="Information  w-1/3 h-full p-6 flex justify-between flex-col ">
                <div className=" ">
                  <h1 className="text-3xl font-bold ">Terms & Conditions</h1>

                  <div className="leading-[1.1] text-[13px] flex flex-col gap-1">
                    <ul className="list-disc pl-5">
                      <li>
                        Transportation Charges will be applied separately.
                      </li>
                      <li>
                        Prices are subject to change without any prior notice.
                      </li>
                      <li>
                        All taxes (GST:18% applicable as per Government Rules).
                      </li>
                      <li>
                        Delivery will be released after the 100% payment is
                        credited.
                      </li>
                      <li>
                        Proforma will be valid for 30 days from the date of its
                        issue.
                      </li>
                      <li>
                        Any dispute, is subject to Delhi jurisdiction only.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="Address w-1/3  h-full flex justify-end p-6 pr-0">
                <div className="w-[80%] text-[10px] font-semibold">
                  <div className="flex flex-col">
                    <h1>Email - srijantechnologies22@gmail.com</h1>{" "}
                    <h1>Contact-+91 9599194890/92</h1>{" "}
                    <h1>
                      {" "}
                      Find out -S-207,2ND Floor, Ajnara Bhawan, D-Block Market,
                      Vivek Vihar, Ph-1, Delhi-10095
                    </h1>
                  </div>
                </div>
              </div>
              <div className="image w-1/3 relative h-full right-0">
                <img
                  src="/root-2.png"
                  alt="img not found"
                  className=" h-full absolute right-0 w-1/2"
                />
              </div>
            </div>
          </>
        )}

        <img
          src="/root.png"
          alt=""
          className=" w-1/2  mt-10 object-contain mb-10"
        />
      </div>
      <Footer />
    </>
  );
}

export default Catalogue;
