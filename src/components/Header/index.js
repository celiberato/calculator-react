import Titulo from "../Titulo";
import BannerImage from "../BannerImage"
import LoginControl from "../LoginControl";
import Logo from "../Logo";

function Header() {
  return (
    <header>
      <BannerImage></BannerImage>
      <Titulo></Titulo>
      <LoginControl></LoginControl>
      <Logo></Logo>
    </header>
  );
}

export default Header;
