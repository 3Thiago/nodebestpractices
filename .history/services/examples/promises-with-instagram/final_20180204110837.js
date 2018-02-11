const accessToken = '34961975.eb89985.a1d13227944d4a0cb7fd8d26bc5515d9';

function getInstagramImagesContent(userId) {
  //let's print what is within(!) the Instagram images
  const imagesContent = [];

  const instagramAPIURL = getInstagramURL();
  console.log(`Instagram API URL is ${instagramAPIURL}`)

  const images = getInstagramImages(userId, instagramAPIURL).then(function(
    images
  ) {
    console.log("Images arrived, total ${images.length}");
  });

  imagesContent = identifyObjectsInImages(images);

  console.log(`These are the objects in the images ${imagesContent}`);
}

function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve([
        "http://instagram.com/images/1",
        "http://instagram.com/images/2"
      ]);
    }, 50);
  });
}

function getInstagramURL() {
    return 'https://api.instagram.com/v1/';
}



//auth flow: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
