import Link from "next/link";

const NavLink = ({ href, title }) => {
    return(
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#F1F1F1] hover:text-[#F0028D]"  
        >
            {title}
        </Link>
    );
};

export default NavLink;