function getInstagramImagesContent(userId) {
    const imagesContent = [];
    
    const images = getInstagramImages();

    imagesContent = identifyObjectsInImages(images);

    console.log(`These are the objects in the images ${images}`);
}

function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {}

function getImagesWithManyLikes(images) {}
