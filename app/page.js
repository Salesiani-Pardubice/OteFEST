import ButtonBlue from "@/components/button-blue";
import ButtonRed from "@/components/button-red";
import HeaderLogo from "@/components/header-logo";
import Strong from "@/components/strong";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FCE8EA] w-full min-h-[100vh] flex flex-col items-center justify-center">
      <header className="bg-[#DCF0F5] w-full min-h-20 flex flex-wrap items-center justify-center">
        <HeaderLogo
          svgPath={`assets/svg/logo_sdb.svg`}
          name="Logo Salesiánů Dona Bosca"
          className={`-mx-7`}
        />
        <HeaderLogo
          svgPath={`assets/svg/logo_skm.svg`}
          name="Logo Salesináského klubu mládeže Pardubice"
          className={`-mx-7`}
        />
        <HeaderLogo
          svgPath={`assets/svg/logo_cdb_kolecko.svg`}
          name="Logo centra Don Bosco"
          className={`-mx-7`}
        />
        <HeaderLogo
          svgPath={`assets/svg/logo_farnost.svg`}
          name="Logo farnosti Pardubice"
          className={``}
        />
      </header>
      <div className="w-full flex flex-row justify-center">
        <div className="bg-[#7C091A] w-full"></div>
        <div className="flex flex-row items-center justify-center cover-gradient w-[90vw] max-w-[800px]">
          <div className="w-[35vw] max-w-[300px] flex flex-row justify-center items-center">
            <img
              src="assets/svg/logo_otefest.svg"
              className="w-[25vw] max-w-[200px] my-4"
            />
          </div>
          <img
            src="assets/images/group.jpg"
            className="rounded-full w-[20vw] max-w-[130px] border-4 border-white"
          />
          <div className="font-chronicaPro w-[35vw] max-w-[300px] uppercase text-white flex flex-col justify-center items-end my-4">
            <p className="text-xs sm:text-base">otevíráme dveře</p>
            <p className="text-2xl sm:text-4xl">mladým!</p>
            <p className="text-xs sm:text-base">oslavnte to</p>
            <p className="text-2xl sm:text-4xl">s námi!</p>
            <div className="text-xl sm:text-3xl text-[#7D0819] flex flex-row">
              <span>26.&nbsp;května</span>
              <div className="text-xs font-chronicaProBook text-wrap flex flex-col items-center justify-center">
                <span className="m-0 leading-[.65rem]">20</span>
                <span className="m-0 leading-[.65rem]">24</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1BB4D2] w-full"></div>
      </div>
      <div className="bg-[#DADADA] w-full flex flex-row items-center justify-center">
        <p className="text-[#6A6A6A] w-[90vw] max-w-[800px] text-center my-4">
          <Strong>
            Otevíráme zrekonstruované Salesiánské centrum Pardubice:
          </Strong>
          <br />
          zázemí pro mladé lidi, prostor pro dobrovolnické a&nbsp;dobročinné
          (nejen) křesťanské aktivity.
          <br />
          <Strong>Buďte u&nbsp;toho s&nbsp;námi!</Strong>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img
          className="w-[90vw] max-w-[800px] my-4"
          src="assets/svg/program_komplet.svg"
        />
      </div>
      <div className="grid grid-cols-2 max-w-[800px] w-[90vw] my-4">
        <ButtonRed target={"/dobrovolnici"} className="">
          <p className="sm:text-base md:text-xl text-xs font-chronicaPro">
            Zapojte se!
          </p>
        </ButtonRed>
        <ButtonBlue target={"/odber-novinek"}>
          <p className="sm:text-base text-xs md:text-xl font-chronicaPro">
            Buďte v obraze
          </p>
          <span className="text-xs md:text-sm lowercase sm:uppercase">
            odebírejte novinky
          </span>
        </ButtonBlue>
        <ButtonRed target={"https://salesianipardubice.cz/vybaveni/"}>
          <p className="sm:text-base text-xs md:text-xl font-chronicaPro">
            pomozete nám
          </p>
          <span className="text-xs md:text-sm lowercase sm:uppercase">
            centrum dovybavit
          </span>
        </ButtonRed>
        <ButtonBlue target={"mailto:benakova@dozivota.cz"}>
          <p className="sm:text-base text-xs md:text-xl font-chronicaPro">
            Máte otázky?
          </p>
          <span className="text-xs md:text-sm lowercase">
            <Link href="mailto:benakova@dozivota.cz">benakova@dozivota.cz</Link>
            {" | "}
            <Link href="tel:+420776649046">776 649 046</Link>
          </span>
        </ButtonBlue>
      </div>
    </main>
  );
}
