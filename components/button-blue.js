import Link from "next/link";
export default function ButtonBlue({ children, className, target }) {
  return (
    <Link
      href={target}
      className={`${className} bg-[url('/assets/svg/odkaz_modry.svg')] bg-center bg-contain bg-no-repeat p-7 text-white w-50 uppercase flex flex-col items-center justify-center hover:scale-105 transition-all`}
    >
      {children}
    </Link>
  );
}
