const universalImageUrl =
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png";

function changeProfilePictures() {
  const originalPostProfileImages = document.querySelectorAll(
    ".update-components-actor__container .ivm-view-attr__img-wrapper.ivm-view-attr__img-wrapper--no-flex img"
  );
  originalPostProfileImages.forEach((img) => {
    img.src = universalImageUrl;
  });

  const resharedPostProfileImages = document.querySelectorAll(
    ".update-components-actor.display-flex.align-items-flex-start .ivm-view-attr__img-wrapper.ivm-view-attr__img-wrapper--no-flex img"
  );
  resharedPostProfileImages.forEach((img) => {
    img.src = universalImageUrl;
  });

  const likedPostProfileImages = document.querySelectorAll(
    ".update-components-actor__container.display-flex.flex-grow-1 .ivm-view-attr__img-wrapper.ivm-view-attr__img-wrapper--no-flex img"
  );
  likedPostProfileImages.forEach((img) => {
    img.src = universalImageUrl;
  });

  const commentProfileImages = document.querySelectorAll(
    ".comments-post-meta.comments-comment-item__post-meta .ivm-view-attr__img-wrapper.ivm-view-attr__img-wrapper--no-flex img"
  );
  commentProfileImages.forEach((img) => {
    img.src = universalImageUrl;
  });
}

function checkAndChange() {
  changeProfilePictures();
}

checkAndChange();

setInterval(checkAndChange, 1000);
