(function ($) {
$(document).ready(function() {
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();

    const email = $('#email').val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $emailError = $('#email-error');
    const $successMessage = $('#success-message');

    $emailError.text('');
    $successMessage.addClass('hidden');

    if (!email) {
      $emailError.text('Поле Email є обов’язковим');
      return;
    }

    if (!emailRegex.test(email)) {
      $emailError.text('Введіть коректний email');
      return;
    }

    const formData = {
      name: $('#name').val().trim() || 'Не вказано',
      email: email,
      message: $('#message').val().trim() || 'Не вказано',
      subject: '6weeks - Форма заповнена'
    };

    emailjs.send('service_zrzuqxl', 'template_46tfesg', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: formData.subject
    })
    .then(function(response) {
      $successMessage.removeClass('hidden').text('Лист успішно відправлено!');
      $('#contact-form')[0].reset();
    }, function(error) {
      $emailError.text('Помилка при відправці листа. Деталі: ' + error.text);
    });
  });
});
})(jQuery);
