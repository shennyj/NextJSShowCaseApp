import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="topNav">
          <Image
            src={"/images/demonSlayer.png"}
            alt="logo"
            width={100}
            height={100}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          commodi!
        </h1>
      </div>
    </header>
  );
};

export default Header;
