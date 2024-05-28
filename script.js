function changeProfilePictures() {
  const profileImages = document.querySelectorAll(
    ".ivm-view-attr__img--centered.EntityPhoto-circle-2.update-components-actor__avatar-image.evi-image.lazy-image.ember-view"
  );
  profileImages.forEach((img) => {
    const newImgUrl =
      "https://images.pexels.com/photos/18413376/pexels-photo-18413376/free-photo-of-pink-roses-sticking-in-water-at-a-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    img.src = newImgUrl;
  });
}

changeProfilePictures();

const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
