function getInstagramImagesContent(userId) {
    //let's print what is within!  the Instagram images
    const imagesContent = [];
    


    const images = getInstagramImages();

    imagesContent = identifyObjectsInImages(images);

    console.log(`These are the objects in the images ${imagesContent    }`);
}


function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {}

function getImagesWithManyLikes(images) {}

function getInstagramURL(){
    
}