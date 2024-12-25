import Link from "next/link";
import React from "react";

const Footer = () => {
    const suankiYil = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#eae4dd] text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <span className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                
              <Link href={"/"} className="w-[150px]">
            <img
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trendyol_logo.svg/2560px-Trendyol_logo.svg.png"
              alt=""
            />
          </Link>
              </span>
              <p>
                E Ticaret sitemizde geniş ürün portfolyomüz ile siz değerli müşterilerimize hizmet vermekteyiz. 
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                KURUMSAL
              </h6>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">İletişim</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">Hakkımızda</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">Yardım ve Destek</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">SSS</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                MÜŞTERİLER
              </h6>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">Mesafeli Satış Sözleşmesi</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">Gizlilik İlkeleri</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">K.V.K.K. Aydınlatma Metni</a>
              </p>
              <p className="mb-4 duration-300 hover:text-cyan-700">
                <a href="#!">İptal ve İade Koşulları</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                İLETİŞİM
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                Kaynarca mh. Pendik / İstanbul
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                muhametkus@gmail.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                 0 216 999 99 99
              </p>
            </div>
          </div>
        </div>

        <div className="bg-cyan-700 p-6 text-center text-[#eae4dd]">
          <span>© {suankiYil} Copyright: </span> 
          <Link className="font-semibold text-[#eae4dd]" href="https://muhammetkus.vercel.app/">
            Tasarım ve Kodlama: Muhammet Kuş
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
