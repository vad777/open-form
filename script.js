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
      message: $('#message').val().trim() || 'Не вказано'
    };

    emailjs.send('service_zruq', 'tempate_46tf', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    })
    .then(function(response) {
      $successMessage.removeClass('hidden').text('Лист успішно відправлено!');
      $('#contact-form')[0].reset();
    }, function(error) {
      $emailError.text('Помилка при відправці листа. Деталі: ' + error.text);
    });
  });

  $('#email').on('input', function() {
            let email = $(this).val();
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email) && email !== '') {
                $('#email-error').text('Будь ласка, введіть коректний email');
            } else {
                $('#email-error').text('');
            }
        });
});
})(jQuery);
