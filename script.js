$(document).ready(function() {
  $('#contact-form').on('submit', function(e) {
    const email = $('#email').val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $emailError = $('#email-error');
    const $successMessage = $('#success-message');

    $emailError.text('');
    $successMessage.addClass('hidden');

    if (!email) {
      $emailError.text('Поле Email є обов’язковим');
      e.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      $emailError.text('Введіть коректний email');
      e.preventDefault();
      return;
    }

    // Формуємо тіло листа для mailto
    const name = $('#name').val().trim() || 'Не вказано';
    const message = $('#message').val().trim() || 'Не вказано';
    const subject = encodeURIComponent('6weeks - Форма заповнена');
    const body = encodeURIComponent(`Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`);
    
    // Оновлюємо атрибут action форми
    $(this).attr('action', `mailto:6weeks.13h@gmail.com?subject=${subject}&body=${body}`);
    
    $successMessage.removeClass('hidden').text('Лист підготовлено до відправки!');
  });
});
```
