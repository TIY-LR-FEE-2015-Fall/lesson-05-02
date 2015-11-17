/* globals $ */
var toggleForm = function() {
  $('.contact-form').slideToggle();
  $('.toggle-form').fadeToggle();
};

var showContact = function(contact) {
  $('<li></li>')
    .text(`${contact.name} - ${contact.phone}`)
    .appendTo('.contact-list');
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

    // Add contact right away to list
    showContact(response);
  });
});

var nameExists = function(arrayOfContacts, name) {
  return arrayOfContacts.filter((contact) => {
    return contact.name === name;
  }).length > 0;
};

// Show existing contacts
$.ajax({
  url: `http://tiny-lr.herokuapp.com/collections/contacts-rt`,
  method: `GET`,
  dataType: `json`,
}).then((response) => {
  response.reduce((carry, contact) => {
    if (!nameExists(carry, contact.name)) {
      carry.push(contact);
    }

    return carry;
  }, [])
  .forEach(showContact);
});
