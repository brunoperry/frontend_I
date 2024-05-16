window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    webGallery.currentItem = 2;
    webGallery.dataURL = "assets/gallery_data.json";
}