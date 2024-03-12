import Link from "next/link";

export default function ButtonRed({ children, className, target }) {
  return (
    <Link
      href={target}
      target="_blank"
      className={`${className} bg-[url('/assets/svg/odkaz_vinovy.svg')] bg-center bg-contain bg-no-repeat p-7 text-white w-full uppercase flex flex-col items-center justify-center hover:scale-105 transition-all`}
    >
      {children}
    </Link>
  );
}
