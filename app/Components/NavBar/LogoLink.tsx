import Link from 'next/link';
import Image from "next/image";
export default function LogoLink() {
    return (
        <div className=" ml-2 text-center sm:mb-0">
            <Link href="/">
                    <Image src="/360Logo.avif" alt="360" width={60} height={60}/>
            </Link>
        </div>
    );
}