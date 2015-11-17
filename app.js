var albumsList = $(`.albums`);

var afterLoadedData = function(data) {
  data.result.forEach((importedAlbum) => {
    var albumItem = $('<li></li>');

    albumItem.text(importedAlbum.name);

    $('<img>')
      .attr('src', importedAlbum.icon)
      .appendTo(albumItem);

    albumItem.appendTo(albumsList);
  });
};

$.ajax('http://immense-sierra-2938.herokuapp.com/')
  .then(afterLoadedData);
