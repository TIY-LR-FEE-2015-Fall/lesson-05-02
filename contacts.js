// Click on add contact button shows form
$('.toggle-form').on('click', function() {
  $('.contact-form').slideToggle();
  $('.toggle-form').fadeToggle();
});

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
    debugger;
  });
});

// Show existing contacts
// Add contact right away to list
