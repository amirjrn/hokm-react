import { useState, useEffect } from 'react';
import { ImageExt } from './../types/imageExtension';

function useImage(img: string, ext: ImageExt, backSide) {
    const [image, setImage] = useState(backSide);
    const downloadingImage = new Image();
    downloadingImage.onload = function () {
        setImage(downloadingImage.src);
    };

    import(`../img/${img}.${ext}`).then(image => {
        downloadingImage.src = image.default;
    });

    return image
}
export default useImage;