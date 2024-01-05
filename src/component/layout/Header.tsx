import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Badge,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons/faPhoneFlip";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TNT</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        {/* input search */}
        <NavbarItem>
          <Input className="w-80" labelPlacement="inside" placeholder="Bạn cần tìm gì" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* phone number */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            <FontAwesomeIcon icon={faPhoneFlip} />
            <span className="ml-2">0123456789</span>
          </Button>
        </NavbarItem>
        {/* cart */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            <Badge content="5" size="sm" color="primary">
              <FontAwesomeIcon icon={faCartShopping} />
            </Badge>
          </Button>
        </NavbarItem>
        <NavbarItem>
        {/* account */}
          <Button as={Link} color="primary" href="#" variant="ghost">
            Account
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header
