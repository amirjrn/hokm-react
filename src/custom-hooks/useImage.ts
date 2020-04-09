import { useState } from 'react';
import { ImageExt } from './../types/imageExtension'
function useImage(img: string, ext: ImageExt) {
    const [image, setImage] = useState();
    import(`../img/${img}.${ext}`).then(image => {
        setImage(image.default);
    });
    return image
}
export default useImage;