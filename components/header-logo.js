export default function HeaderLogo({ svgPath, className, name }) {
  return (
    <img
      src={svgPath}
      className={`${className} w-36 my-2`}
      // title={name}
      alt={name}
    />
  );
}
