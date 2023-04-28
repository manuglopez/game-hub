import {HStack,Text} from "@chakra-ui/react";
import Image from "next/image";
import logo from '@/assets/logo.webp'
import React from "react";
const NavBar = () => {
    return (
        <HStack>
            <Image alt='Logo' src={logo} width={56} height={56} />
            <Text>Navbar</Text>
        </HStack>
    );
};

export default NavBar;