import Avatar from "./Avatar";
export default function Logolist({ logos }) {
  const logolist = logos.map((logo, index) => (
    <Avatar image={logo} key={index}></Avatar>
  ));
  return <>{logolist}</>;
}
