export const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
}

// mobileS: `(max-width: ${size.mobileS}px)`, ...
export const device = Object.keys(size).reduce( 
    ( acc, el ) => {
        acc[el] = `(max-width: ${size[el]}px)`; 
        return acc;
    },
    {}
);
