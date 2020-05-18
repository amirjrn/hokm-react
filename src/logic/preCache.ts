const precache = (images) => {
    let image;
    for (let i = 0, len = images.length; i < len; i += 1) {
        image = new Image(); // eslint-disable-line no-undef
        image.src = images[i];
    }
    return false;
};

export default precache;