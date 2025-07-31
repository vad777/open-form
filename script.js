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

    const name = $('#name').val().trim() || 'Не вказано';
    const message = $('#message').val().trim() || 'Не вказано';
    const subject = encodeURIComponent('6weeks - Форма заповнена');
    const body = encodeURIComponent(`Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`);

    window.location.href = `mailto:bosajo1652@coursora.com?subject=${subject}&body=${body}`;

    $successMessage.removeClass('hidden').text('Лист підготовлено до відправки!');
    $('#contact-form')[0].reset();
  });
});
 

})(jQuery);


