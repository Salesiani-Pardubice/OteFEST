import HeaderLogo from "@/components/header-logo";

export default function Home() {
  return (
    <main className="bg-[#FCE8EA] w-full min-h-[100vh]">
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
      <h1>OteFEST</h1>
    </main>
  );
}
