export const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
}

export interface ISizes { 
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string
};

// mobileS: `(max-width: ${size.mobileS}px)`, ...
export const device: ISizes = Object.keys(size).reduce( 
    ( acc, el ) => {
        acc[el] = `(max-width: ${size[el]}px)`; 
        return acc;
    },
    {} as ISizes
);
