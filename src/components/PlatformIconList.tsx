import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "@/hooks/useGames";
import {Icon} from "@chakra-ui/icon";
import {IconType} from "react-icons";
import {HStack} from "@chakra-ui/react";


interface Props {
    platforms: Platform[],

}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "nintendo": SiNintendo,
        "android": FaAndroid,
        "mac": FaApple,
        "linux": FaLinux,
        "ios": MdPhoneIphone,
        "web": BsGlobe

    }
    return (
        <>
            <HStack marginY='1'>
                {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} height='30px'
                                                 width='30px' color='gray.500'/>)}
            </HStack>
        </>

    );
};

export default PlatformIconList;