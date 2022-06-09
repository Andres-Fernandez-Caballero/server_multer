const makeImageName = (image_filename) => {
    return new Date().getTime() + image_filename;
}

module.exports = {
    makeImageName,
}