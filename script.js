function changeProfilePictures() {
  const profileImages = document.querySelectorAll(
    ".ivm-view-attr__img--centered.EntityPhoto-circle-2.update-components-actor__avatar-image.evi-image.lazy-image.ember-view"
  );
  profileImages.forEach((img) => {
    const newImgUrl =
      "https://images.pexels.com/photos/24823063/pexels-photo-24823063/free-photo-of-a-blue-abstract-painting-with-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
    img.src = newImgUrl;
  });
}

changeProfilePictures();

const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
