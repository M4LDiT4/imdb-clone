import Link from "next/link";
import { IconType } from "react-icons";

type MenuItemProps = {
  title: string;
  address: string;
  icon: IconType;
};

export function MenuItem({ title, address, icon: Icon }: MenuItemProps) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" size={20} />
      <p className="uppercase hidden sm:inline">
        {title}
      </p>
    </Link>
  );
}
