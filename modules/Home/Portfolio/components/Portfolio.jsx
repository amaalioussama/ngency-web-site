export default function PortfolioComponent() {
  return (
    <>
      <div className="bg-lightgray flex justify-center items-center gap-52 mt-10 py-14 border-[#D9D9D9] border-t-4 border-solid">
        <div className="">
          <h1 className="uppercase font-bold text-[55px] ">Nom de project</h1>
          <p className="uppercase w-[500px] text-sm">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally
          </p>
          <div className="flex justify-start gap-3 pt-4">
            <img src="images/REACT.png" alt="REACT" />
            <img src="images/LARAVEL.png" alt="LARAVEL" />
            <img src="images/TAILWIND.png" alt="TAILWIND" />
          </div>
          <div className="flex justify-center items-center pt-12 pl-28">
            <div className="border-4 border-solid border-mediumBlue w-52 h-14">
              <div className="flex justify-center items-center  bg-mediumBlue w-52 h-14 translate-x-1 -translate-y-3">
                <h1 className="flex justify-center items-center text-white uppercase text-sm font-bold">
                  Découvrez Plus
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
        <div>
          <div className="border-2 border-solid border-mediumBlue">
            <img
              className="translate-x-3 -translate-y-4 w-[500px]"
              src="/images/portfolio1.png"
              alt="portfolio1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-52 py-14 border-[#D9D9D9] border-t-4 border-solid">
        <div className="">
          <h1 className="uppercase font-bold text-[55px] ">Nom de project</h1>
          <p className="uppercase w-[500px] text-sm">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally
          </p>
          <div className="flex justify-start pt-4">
            <img src="images/FLUTTER.png" alt="FLUTTER" />
          </div>
          <div className="flex justify-center items-center pt-12 pl-28">
            <div className="border-4 border-solid border-mediumBlue w-52 h-14">
              <div className="flex justify-center items-center  bg-mediumBlue w-52 h-14 translate-x-1 -translate-y-3">
                <h1 className="flex justify-center items-center text-white uppercase text-sm font-bold">
                  Découvrez Plus
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
        <div>
          <div className="border-2 border-solid border-mediumBlue">
            <img
              className="translate-x-3 -translate-y-4 w-[500px]"
              src="/images/portfolio2.png"
              alt="portfolio2"
            />
          </div>
        </div>
      </div>
      <div className="bg-lightgray flex justify-center items-center gap-52 py-10">
        <div className="">
          <h1 className="uppercase font-bold text-[55px] ">Nom de project</h1>
          <p className="uppercase w-[500px] text-sm">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally
          </p>
          <div className="flex justify-start gap-3 pt-4">
            <img src="images/facebook.png" alt="facebook" />
            <img src="images/instagram.png" alt="instagram" />
            <img src="images/SEO.png" alt="seo" />
          </div>
          <div className="flex justify-center items-center pt-12 pl-28">
            <div className="border-4 border-solid border-mediumBlue w-44 h-14">
              <div className="flex justify-center items-center  bg-mediumBlue w-44 h-14 translate-x-1 -translate-y-3">
                <h1 className="flex justify-center items-center text-white uppercase text-sm font-bold">
                  Étude de cas
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
        <div>
          <div className="border-2 border-solid border-mediumBlue">
            <img
              className="translate-x-3 -translate-y-4 w-[500px]"
              src="/images/portfolio3.png"
              alt="portfolio3"
            />
          </div>
        </div>
      </div>
      <div className="bg-portfolio block p-10 gap-3">
        <h1 className="uppercase text-white flex justify-center font-bold text-[30px]">votre projet est le prochain</h1>
        <div className="flex justify-center items-center pt-8">
          <div className="border-2 border-solid bg-white border-mediumBlue w-72 h-12">
            <div className="flex justify-center items-center  bg-mediumBlue w-72 h-12 translate-x-2 -translate-y-2">
              <h1 className="flex justify-center items-center text-white uppercase text-sm font-bold">
                Parlez nous de votre projet 
                <img className="pl-2" src="/images/arrow-under.png" alt="arrow" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
