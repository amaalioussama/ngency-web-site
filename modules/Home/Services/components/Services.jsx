import style from "@/styles/Home/Services/style.css";
import Marquee from "react-fast-marquee";
export default function ServiceComponent() {
  return (
    <div className="">
      <div className="border-4 border-l-4 border-t-0 border-b-0 -mr-1  ">
        <div className=" rotate-3">
          <Marquee className="border-2 border-black bg-mediumpink w-full h-[60px] px-[15rem]" gradient={false} speed={150} pauseOnHover={true}>
            <div className=" flex justify-between items-center gap-32">
              <span className="text-white font-bold text-4xl">NOS SERVICES</span>
              <span className="text-white font-bold text-4xl">NOS SERVICES</span>
          
            </div>
          </Marquee>
        </div>
        <div className="grid grid-cols-4 gap-y-9 my-14 mx-14">
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.39366 21.6527H22.2122V16.2331C19.5534 16.1138 16.9341 15.6421 14.4755 14.8329C11.7816 13.9462 9.32573 12.6691 7.25033 11.0621C5.04644 14.068 3.65347 17.7056 3.39366 21.6527ZM8.98613 8.99771C10.7789 10.3689 12.925 11.4857 15.3179 12.2733C17.499 12.9911 19.833 13.4182 22.2122 13.5355V2.83409C17.0252 3.1755 12.3727 5.47383 8.98613 8.99771ZM24.9069 2.83409V13.5355C27.5693 13.4042 30.1685 12.8854 32.5561 12.0109C34.6513 11.2435 36.5344 10.2204 38.133 8.99771C34.7464 5.47382 30.0939 3.1755 24.9069 2.83409ZM39.8688 11.0622C38.0135 12.4987 35.8514 13.6737 33.4829 14.5412C30.7898 15.5276 27.8755 16.1 24.9069 16.2331V21.6527H43.7255C43.4657 17.7056 42.0727 14.068 39.8688 11.0622ZM43.7255 24.3473H24.9069V29.7669C27.9219 29.9021 30.8813 30.4904 33.6099 31.5057C35.9298 32.3689 38.0476 33.5277 39.8688 34.9379C42.0727 31.932 43.4657 28.2945 43.7255 24.3473ZM38.133 37.0023C36.5646 35.8028 34.7214 34.7944 32.6702 34.0312C30.2511 33.1311 27.6114 32.5978 24.9069 32.4645V43.1659C30.0939 42.8245 34.7464 40.5262 38.133 37.0023ZM22.2122 43.1659V32.4645C19.644 32.5911 17.1312 33.0785 14.8085 33.9007C12.6154 34.6769 10.6474 35.7317 8.98613 37.0023C12.3728 40.5262 17.0252 42.8245 22.2122 43.1659ZM7.25033 34.9379C9.17697 33.4461 11.4342 32.2365 13.9093 31.3604C16.5281 30.4335 19.3461 29.8955 22.2122 29.7669V24.3473H3.39366C3.65347 28.2945 5.04644 31.932 7.25033 34.9379ZM0.654785 23C0.654785 10.35 10.9096 0.0952148 23.5596 0.0952148C36.2095 0.0952148 46.4644 10.35 46.4644 23C46.4644 35.65 36.2095 45.9048 23.5596 45.9048C10.9096 45.9048 0.654785 35.65 0.654785 23Z"
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Développement Web
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous créons des sites web sur mesure en utilisant différents
              langages de programmation pour répondre à vos besoins spécifiques.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  viewBox="0 0 32 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-9"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.6251 0V2.66667C23.6251 2.70119 23.6251 2.73621 23.6251 2.77169C23.6255 3.30469 23.6259 3.93927 23.5536 4.48502C23.4664 5.14381 23.2331 6.05511 22.4718 6.82843C21.7106 7.60174 20.8135 7.83883 20.165 7.9274C19.6278 8.00078 19.0031 8.00038 18.4785 8.00004C18.4436 8.00002 18.4091 8 18.3751 8H13.1251C13.0911 8 13.0566 8.00002 13.0217 8.00004C12.497 8.00038 11.8724 8.00078 11.3351 7.9274C10.6867 7.83883 9.78959 7.60174 9.02836 6.82843C8.26713 6.05511 8.03374 5.14381 7.94655 4.48502C7.87432 3.93927 7.87471 3.30469 7.87505 2.77169C7.87507 2.73621 7.87509 2.70119 7.87509 2.66667V0H23.6251ZM18.3751 5.33333C19.6125 5.33333 20.2312 5.33333 20.6157 4.94281C21.0001 4.55228 21.0001 3.92375 21.0001 2.66667H10.5001C10.5001 3.92375 10.5001 4.55228 10.8845 4.94281C11.2689 5.33333 11.8877 5.33333 13.1251 5.33333H18.3751ZM12.0247 2.64009C12.0247 2.64007 12.0262 2.64029 12.0289 2.6408L12.0247 2.64009ZM19.4755 2.64009C19.4755 2.64011 19.4741 2.64036 19.4713 2.6408L19.4755 2.64009Z"
                    fill="black"
                    className="group-hover:fill-white group-hover:stroke-white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 2.66667H10.5C7.95092 2.66667 6.30318 2.67233 5.0891 2.83815C3.95053 2.99366 3.59367 3.24472 3.39384 3.44771C3.19402 3.65071 2.94688 4.01324 2.7938 5.16988C2.63057 6.40323 2.625 8.07712 2.625 10.6667V42.6667C2.625 45.2562 2.63057 46.9301 2.7938 48.1635C2.94688 49.3201 3.19402 49.6826 3.39384 49.8856C3.59367 50.0886 3.95053 50.3397 5.0891 50.4952C6.30318 50.661 7.95092 50.6667 10.5 50.6667H21C23.5491 50.6667 25.1968 50.661 26.4109 50.4952C27.5495 50.3397 27.9063 50.0886 28.1062 49.8856C28.306 49.6826 28.5531 49.3201 28.7062 48.1635C28.8694 46.9301 28.875 45.2562 28.875 42.6667V10.6667C28.875 8.07712 28.8694 6.40323 28.7062 5.16988C28.5531 4.01324 28.306 3.65071 28.1062 3.44771C27.9063 3.24472 27.5495 2.99366 26.4109 2.83815C25.1968 2.67233 23.5491 2.66667 21 2.66667ZM1.53769 1.5621C0 3.12419 0 5.63835 0 10.6667V42.6667C0 47.695 0 50.2091 1.53769 51.7712C3.07538 53.3333 5.55025 53.3333 10.5 53.3333H21C25.9497 53.3333 28.4246 53.3333 29.9623 51.7712C31.5 50.2091 31.5 47.695 31.5 42.6667V10.6667C31.5 5.63835 31.5 3.12419 29.9623 1.5621C28.4246 0 25.9497 0 21 0H10.5C5.55025 0 3.07538 0 1.53769 1.5621Z"
                    fill="black"
                    className="group-hover:fill-white group-hover:stroke-white"
                  />
                  <path
                    d="M18.375 42.6667C18.375 44.1394 17.1997 45.3333 15.75 45.3333C14.3003 45.3333 13.125 44.1394 13.125 42.6667C13.125 41.1939 14.3003 40 15.75 40C17.1997 40 18.375 41.1939 18.375 42.6667Z"
                    fill="black"
                    className="group-hover:fill-white group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Développement d'Applications Mobiles
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous concevons et développons des applications mobiles
              personnalisées pour offrir une expérience utilisateur
              exceptionnelle.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 44 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.566895 3.36921C0.566895 1.8636 1.76639 0.643066 3.24603 0.643066H40.754C42.2336 0.643066 43.4331 1.8636 43.4331 3.36921C43.4331 4.87481 42.2336 6.09535 40.754 6.09535H3.24603C1.76639 6.09535 0.566895 4.87481 0.566895 3.36921Z"
                    fill="#33363F"
                    className="group-hover:fill-white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.566895 16.9999C0.566895 15.4943 1.76639 14.2738 3.24603 14.2738H30.0374C31.5171 14.2738 32.7166 15.4943 32.7166 16.9999C32.7166 18.5055 31.5171 19.726 30.0374 19.726H3.24603C1.76639 19.726 0.566895 18.5055 0.566895 16.9999Z"
                    fill="#33363F"
                    className="group-hover:fill-white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.566895 30.6306C0.566895 29.125 1.76639 27.9045 3.24603 27.9045H19.3209C20.8005 27.9045 22 29.125 22 30.6306C22 32.1362 20.8005 33.3568 19.3209 33.3568H3.24603C1.76639 33.3568 0.566895 32.1362 0.566895 30.6306Z"
                    fill="#33363F"
                    className="group-hover:fill-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Référencement (SEO)
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous optimisons votre site web pour améliorer son classement dans
              les résultats de recherche organique et augmenter sa visibilité en
              ligne.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 43 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.65637 22.9869C7.80602 22.9869 6.16836 22.5935 4.74338 21.8065C3.33967 21.0196 2.23371 19.9349 1.42551 18.5525C0.638582 17.1488 0.245117 15.5536 0.245117 13.7671V0.112793H5.28572V14.0542C5.28572 14.9475 5.47714 15.7238 5.85997 16.3831C6.2428 17.0424 6.76387 17.5529 7.42319 17.9144C8.10378 18.2547 8.84817 18.4249 9.65637 18.4249C10.5071 18.4249 11.2515 18.2547 11.8896 17.9144C12.5276 17.5529 13.0274 17.0531 13.389 16.415C13.7718 15.7557 13.9632 14.9794 13.9632 14.0861V0.112793H19.0038V13.799C19.0038 15.5855 18.6104 17.17 17.8234 18.5525C17.0365 19.9349 15.9412 21.0196 14.5375 21.8065C13.1338 22.5935 11.5067 22.9869 9.65637 22.9869Z"
                    fill="black"
                    className="group-hover:fill-white"
                  />
                  <path
                    d="M36.7279 22.636L30.4431 12.5867H29.837L21.1595 0.112793H27.1253L33.3144 9.55595H33.9205L42.598 22.636H36.7279ZM20.7448 22.636L29.0713 10.5768L32.9315 12.7462L26.4553 22.636H20.7448ZM34.1119 12.0124L30.2517 9.84307L36.5046 0.112793H42.2152L34.1119 12.0124Z"
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Design UX/UI
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous concevons des expériences utilisateur optimales en mettant
              l'accent sur l'ergonomie, la navigation intuitive et la
              convivialité.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 42 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 24.6262V31.9996C9.625 32.4306 9.7962 32.8439 10.1009 33.1487C10.4057 33.4534 10.819 33.6246 11.25 33.6246H17.75C18.181 33.6246 18.5943 33.4534 18.899 33.1487C19.2038 32.8439 19.375 32.4306 19.375 31.9996V7.2793M40.5 3.29761V31.4507C40.5003 31.7024 40.4421 31.9508 40.33 32.1761C40.2179 32.4015 40.055 32.5977 39.8541 32.7494C39.6532 32.9011 39.4198 33.004 39.1723 33.05C38.9249 33.0961 38.6701 33.084 38.4281 33.0148L2.67813 22.5945C2.33841 22.4973 2.03962 22.2921 1.82703 22.0098C1.61443 21.7276 1.49963 21.3838 1.5 21.0304V13.7179C1.49963 13.3646 1.61443 13.0208 1.82703 12.7385C2.03962 12.4563 2.33841 12.251 2.67813 12.1539L38.4281 1.73355C38.6701 1.66433 38.9249 1.65228 39.1723 1.69834C39.4198 1.74439 39.6532 1.8473 39.8541 1.99896C40.055 2.15061 40.2179 2.34685 40.33 2.57222C40.4421 2.79759 40.5003 3.04591 40.5 3.29761Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Marketing en Ligne
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous créons et gérons des campagnes publicitaires en ligne, y
              compris la publicité sur les moteurs de recherche, les réseaux
              sociaux et par e-mail.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 24 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6204 38.0797C9.12145 38.0797 6.94246 37.6531 5.08345 36.7998C3.22444 35.916 1.53305 34.5903 0.00927734 32.8227L4.53489 28.2057C5.54058 29.4247 6.65294 30.3847 7.87196 31.0856C9.09098 31.7561 10.4929 32.0913 12.0776 32.0913C13.5709 32.0913 14.7289 31.817 15.5518 31.2685C16.3746 30.6894 16.786 29.8818 16.786 28.8456C16.786 27.9619 16.5118 27.2457 15.9632 26.6971C15.4451 26.1486 14.7442 25.6762 13.8604 25.28C12.9766 24.8838 12.0014 24.5029 10.9347 24.1372C9.8681 23.7715 8.80146 23.3601 7.73482 22.9029C6.69865 22.4153 5.73867 21.821 4.85488 21.1201C3.97109 20.3887 3.25492 19.4897 2.70636 18.423C2.1578 17.3259 1.88352 15.9545 1.88352 14.3088C1.88352 12.3279 2.35589 10.6213 3.30063 9.18895C4.27585 7.7566 5.60153 6.67472 7.27769 5.94331C8.95384 5.18142 10.8738 4.80047 13.0376 4.80047C15.1404 4.80047 17.106 5.19666 18.9346 5.98902C20.7631 6.78138 22.2564 7.86326 23.4145 9.23466L18.8889 13.8517C17.9441 12.846 16.9841 12.0841 16.0089 11.566C15.0642 11.0175 14.028 10.7432 12.9004 10.7432C11.59 10.7432 10.569 10.987 9.83763 11.4746C9.10622 11.9622 8.74051 12.6784 8.74051 13.6231C8.74051 14.446 9.01479 15.1164 9.56335 15.6345C10.1119 16.1221 10.8281 16.5488 11.7119 16.9145C12.6261 17.2802 13.6014 17.6459 14.6375 18.0116C15.7042 18.3773 16.7708 18.804 17.8375 19.2916C18.9041 19.7792 19.8793 20.4039 20.7631 21.1658C21.6774 21.8972 22.4088 22.842 22.9573 24C23.5059 25.1276 23.7802 26.5295 23.7802 28.2057C23.7802 31.2837 22.6983 33.7065 20.5345 35.4741C18.4012 37.2112 15.4299 38.0797 11.6204 38.0797ZM10.1119 34.5141H15.1404V42.1939H10.1119V34.5141ZM15.1404 8.09183H10.1119V0.686279H15.1404V8.09183Z"
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              E-commerce
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous développons des boutiques en ligne avec des systèmes de
              paiement sécurisés, une gestion de stock efficace et des
              fonctionnalités avancées de commerce électronique.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.1587 3.17156C27.3418 3.52651 27.3873 3.98109 27.4782 4.89024C27.6503 6.61109 27.7363 7.47151 28.0964 7.94359C28.5533 8.54244 29.2962 8.85019 30.0427 8.74977C30.6312 8.6706 31.3004 8.12304 32.6389 7.0279C33.3461 6.44934 33.6996 6.16006 34.0801 6.03852C34.5633 5.88415 35.0861 5.91022 35.5515 6.11191C35.918 6.2707 36.241 6.59373 36.8871 7.23978L38.7601 9.11284C39.4062 9.75891 39.7292 10.0819 39.888 10.4484C40.0897 10.9139 40.1158 11.4366 39.9614 11.9198C39.8399 12.3003 39.5506 12.6539 38.972 13.361C37.8768 14.6996 37.3293 15.3688 37.2501 15.9573C37.1497 16.7038 37.4574 17.4467 38.0563 17.9035C38.5283 18.2637 39.3888 18.3497 41.1097 18.5218C42.0189 18.6127 42.4735 18.6582 42.8285 18.8413C43.2793 19.0738 43.6305 19.4619 43.817 19.9336C43.9639 20.305 43.9639 20.7619 43.9639 21.6756V24.3247C43.9639 25.2381 43.9639 25.6949 43.8171 26.0662C43.6306 26.5381 43.2792 26.9263 42.8283 27.1588C42.4734 27.3418 42.0189 27.3873 41.1099 27.4782C39.3896 27.6502 38.5294 27.7362 38.0574 28.0961C37.4582 28.553 37.1504 29.2963 37.251 30.043C37.3302 30.6313 37.8776 31.3003 38.9723 32.6383C39.5507 33.3452 39.8399 33.6987 39.9614 34.0789C40.1159 34.5623 40.0898 35.0853 39.888 35.5509C39.7292 35.9172 39.4063 36.2401 38.7605 36.886L36.8872 38.7593C36.2411 39.4053 35.9181 39.7284 35.5516 39.8872C35.0862 40.0888 34.5634 40.1149 34.0802 39.9606C33.6997 39.839 33.3461 39.5497 32.639 38.9712C31.3005 37.876 30.6313 37.3285 30.0428 37.2493C29.2963 37.1489 28.5534 37.4566 28.0965 38.0555C27.7364 38.5276 27.6503 39.3881 27.4782 41.1093C27.3873 42.0188 27.3418 42.4736 27.1586 42.8287C26.9261 43.2793 26.5382 43.6304 26.0666 43.8169C25.6951 43.9639 25.2381 43.9639 24.3241 43.9639H21.6756C20.7619 43.9639 20.305 43.9639 19.9336 43.817C19.4619 43.6305 19.0738 43.2793 18.8413 42.8285C18.6582 42.4735 18.6127 42.0189 18.5218 41.1097C18.3497 39.3888 18.2637 38.5283 17.9035 38.0563C17.4467 37.4575 16.7038 37.1497 15.9573 37.2501C15.3688 37.3293 14.6996 37.8769 13.361 38.9721C12.6538 39.5507 12.3002 39.84 11.9197 39.9615C11.4365 40.1159 10.9138 40.0898 10.4483 39.8881C10.0819 39.7293 9.75881 39.4063 9.11271 38.7602L7.23972 36.8872C6.59363 36.2411 6.27059 35.9181 6.1118 35.5516C5.91013 35.0862 5.88405 34.5634 6.03841 34.0802C6.15995 33.6997 6.44925 33.3461 7.02785 32.639C8.12301 31.3004 8.67059 30.6312 8.74975 30.0427C8.85017 29.2962 8.54242 28.5533 7.94359 28.0964C7.4715 27.7363 6.61108 27.6503 4.89022 27.4782C3.98108 27.3873 3.52652 27.3418 3.17156 27.1587C2.72072 26.9262 2.36949 26.5381 2.18298 26.0664C2.03613 25.695 2.03613 25.2381 2.03613 24.3245V21.6758C2.03613 20.7619 2.03613 20.3049 2.18306 19.9334C2.36956 19.4619 2.72069 19.0739 3.17137 18.8414C3.52641 18.6582 3.9811 18.6127 4.89047 18.5218C6.61178 18.3497 7.47246 18.2636 7.94462 17.9033C8.54321 17.4465 8.85086 16.7038 8.75058 15.9575C8.67149 15.3689 8.12373 14.6994 7.02821 13.3604C6.44937 12.653 6.15995 12.2992 6.03842 11.9186C5.88419 11.4356 5.91025 10.913 6.11178 10.4477C6.27058 10.0811 6.59374 9.75794 7.24006 9.11162L9.11281 7.23888C9.7589 6.59278 10.082 6.26973 10.4484 6.11094C10.9139 5.90928 11.4366 5.8832 11.9198 6.03755C12.3003 6.15909 12.6539 6.44844 13.3612 7.02713C14.6996 8.12216 15.3688 8.66968 15.9571 8.7489C16.7037 8.84946 17.447 8.54161 17.9038 7.94253C18.2638 7.47052 18.3498 6.61033 18.5218 4.88996C18.6127 3.98107 18.6582 3.52663 18.8412 3.17175C19.0737 2.72076 19.4619 2.36942 19.9338 2.1829C20.3052 2.03613 20.7619 2.03613 21.6753 2.03613H24.3244C25.2381 2.03613 25.695 2.03613 26.0664 2.18298C26.5381 2.36949 26.9262 2.72072 27.1587 3.17156ZM23 31.3855C27.6312 31.3855 31.3855 27.6312 31.3855 23C31.3855 18.3688 27.6312 14.6145 23 14.6145C18.3688 14.6145 14.6145 18.3688 14.6145 23C14.6145 27.6312 18.3688 31.3855 23 31.3855Z"
                    stroke="black"
                    strokeWidth="3"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Maintenance et Support
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous assurons la maintenance régulière de votre site web, y
              compris la sauvegarde des données, les mises à jour de sécurité et
              le support technique.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          <div className="section group block border-4 py-12 px-6 relative duration-200">
            <div className="w-fit bg-black group-translate-y-[5px] rounded-full absolute -top-[25px]">
              <div className="bg-white size-[50px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] rounded-full group-hover:bg-mediumpink border-[3px] border-solid border-[#D9D9D9] group-hover:border-black flex justify-center items-center duration-200">
                <svg
                  className="size-7"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 45.1631C35.2403 45.1631 45.1631 35.2403 45.1631 23C45.1631 10.7597 35.2403 0.836914 23 0.836914C10.7597 0.836914 0.836914 10.7597 0.836914 23C0.836914 35.2403 10.7597 45.1631 23 45.1631ZM20.0025 13.1262L33.9006 20.8473C35.5894 21.7856 35.5894 24.2144 33.9006 25.1527L20.0025 32.8738C18.0328 33.9681 15.6123 32.5438 15.6123 30.2906V15.7094C15.6123 13.4562 18.0328 12.0319 20.0025 13.1262Z"
                    fill="black"
                    className="group-hover:fill-white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-outfit font-black text-[15px] uppercase pb-4">
              Tournage des Vidéos
            </h1>
            <p className="font-outfitRegular pb-6">
              Nous offrons des services professionnels de tournage de vidéos
              pour aider nos clients à créer du contenu visuel captivant et
              engageant pour leur stratégie digitale.
            </p>
            <div className="arrow flex items-center gap-2">
              <p className="font-outfit font-semibold uppercase">découvrir</p>
              <svg
                className="size-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H13M13 1V14M13 1L1 13"
                  stroke="black"
                  strokeWidth="2"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="border-4 border-solid border-mediumBlue w-72 h-12 hover:border-0 ">
            <div
              className="flex justify-center items-center  bg-mediumBlue w-72 h-12 translate-x-1 -translate-y-3
            hover:translate-x-0 hover:-translate-y-0"
            >
              <h1 className="flex justify-center items-center text-white uppercase text-sm font-bold">
                Parlez nous de votre projet
                <img
                  className="pl-2"
                  src="/images/arrow-under.png"
                  alt="arrow"
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
