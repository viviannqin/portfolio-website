import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link 
        href={"#about"} 
        className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:bg-gray-100"
        >
            {title}
        </Link>
    );
};

export default NavLink;