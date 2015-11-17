var toggleForm = function() {
  $('.contact-form').slideToggle();
  $('.toggle-form').fadeToggle();
};

// Click on add contact button shows form
$('.toggle-form').on('click', toggleForm);

// Submit form saves a contact
$('.contact-form').on('submit', function(ev) {
  // Stop page from ACTUALLY submitting
  ev.preventDefault();

  var name = $(`#contact-name`).val();
  var phone = $(`#contact-phone`).val();

  $.ajax({
    url: `http://tiny-lr.herokuapp.com/collections/contacts-rt`,
    method: `POST`,
    dataType: `json`,
    data: {name, phone},
  }).then((response) => {
    // Reset form after submit
    $(`#contact-name`).val('');
    $(`#contact-phone`).val('');
    toggleForm();
  });
});

// Show existing contacts
$.ajax({
  url: `http://tiny-lr.herokuapp.com/collections/contacts-rt`,
  method: `GET`,
  dataType: `json`,
}).then((response) => {
  response.forEach((contact) => {
    $('<li></li>')
      .text(`${contact.name} - ${contact.phone}`)
      .appendTo('.contact-list');
  });
});

// Add contact right away to list
