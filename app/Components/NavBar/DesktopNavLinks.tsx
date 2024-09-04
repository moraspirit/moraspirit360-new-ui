import Link from 'next/link';
import "./LinkStyle.css"
import {usePathname} from "next/navigation";

export default function DesktopNavLinks() {
    const path=usePathname()
    return (
        <ul className="absolute text-md right-7 items-center flex flex-row space-x-10 gap-2">
            <li className={path === "/" ? "active" : ""}>
                <Link href="/">Home</Link>
            </li>
            <li className={path === "/services" ? "active" : ""}>
                <Link href="/services">Services</Link>
            </li>
            <li className={path === "/request" ? "active" : ""}>
                <Link href="/request">Request</Link>
            </li>
            <li className={path === "/events" ? "active" : ""}>
                <Link href="/events">Events</Link>
            </li>
            <li className={path === "/articles" ? "active" : ""}>
                <Link href="/articles">Articles</Link>
            </li>
        </ul>
    );
}