import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({
  width = 50,
  height = 55,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Bellmare Travels"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
