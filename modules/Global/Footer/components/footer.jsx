import Link from "next/link";

export default function FooterSection() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center w-20 h-20 bg-[#2E2E2E] p-6">
          <img src="/images/logo2.png" alt="logo2" />
        </div>
        <div className="grow h-14 flex justify-between items-center">
          <div className="flex items-center gap-3 pl-3">
            <Link href="#" className="text-black hover:font-bold">
              Home
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              À propos
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Services
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Portfolio
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Blog
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Témoignages
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Contact
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Carrières
            </Link>
          </div>
          <div className="flex items-center gap-4 pr-3">
            <a href="https://facebook.com/">
              <img className="w-6" src="/images/Fb.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="w-6" src="/images/Insta.png" alt="instagram" />
            </a>
            <a href="https://twitter.com/">
              <img className="w-6" src="/images/Twiter.png" alt="twiter" />
            </a>
            <a href="https://www.pinterest.com/">
              <img className="w-6" src="/images/Pintrest.png" alt="pintrest" />
            </a>
          </div>
        </div>
        <div className="flex justify-center w-20 h-20 bg-[#2E2E2E] p-6">
          <img src="/images/arrow-up.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
}
