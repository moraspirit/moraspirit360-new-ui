import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./LinkStyle.css"
import {usePathname} from "next/navigation";


// @ts-ignore
export default function MobileDrawer({ isOpen, onClose }) {
    const path=usePathname()
    return (
        <div
            className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-black text-white transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button className="absolute right-7 top-4 p-3" onClick={onClose}>
                <FontAwesomeIcon className="text-5xl"  icon={faXmark} />
            </button>
            <ul className="flex text-3xl flex-col justify-center items-center space-y-4">
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
        </div>
    );
}