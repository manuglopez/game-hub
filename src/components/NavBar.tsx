import {HStack} from "@chakra-ui/react";
import Image from "next/image";
import logo from '@/assets/logo.webp'
import React from "react";
import ColorModeSwitch from "@/components/ColorModeSwitch";
const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image alt='Logo' src={logo} width={70} height={70} priority={true}/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;