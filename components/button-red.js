export default function ButtonRed({ children, className }) {
  return (
    <div
      className={`${className} bg-[url('/assets/svg/odkaz_vinovy.svg')] bg-center bg-contain bg-no-repeat p-8 text-white w-50 uppercase flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
}
