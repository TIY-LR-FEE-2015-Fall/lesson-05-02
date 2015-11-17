// Click on add contact button shows form
$('.toggle-form').on('click', function() {
  $('.contact-form').slideToggle();
  $('.toggle-form').fadeToggle();
});

// Submit form saves a contact
$('.contact-form').on('submit', function() {
  console.log('Foo');
});

// Show existing contacts
// Add contact right away to list
