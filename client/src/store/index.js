import { proxy } from "valtio";



const state = proxy({
    intro: true,
    color: '#F96E46',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './sample.png',
    fullDecal: './sample.png',

});

export default state;