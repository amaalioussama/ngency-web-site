export default function PortfolioComponent() {
  return (
    <div className="bg-lightgray flex justify-center items-center gap-16 mt-10 pt-6">
      <div className="">
        <h1 className="uppercase font-bold text-[60px]">Nom de project</h1>
        <p className="uppercase w-[500px]">
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
        </p>
      </div>
      <div>
        <div className="border-2 border-solid border-mediumBlue w-96 h-96">
            <img className="" src="/images/portfolio1.png" alt="portfolio1" />
        </div>
      </div>
    </div>
  );
}
