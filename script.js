(function ($) {
    $(document).ready(function() {
        emailjs.init("YOUR_PUBLIC_KEY"); // Замініть YOUR_PUBLIC_KEY на ваш публічний ключ EmailJS

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

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: '6weeks.13h@gmail.com'
            })
                .then(function(response) {
                    $successMessage.removeClass('hidden').text('Лист успішно відправлено!');
                    $('#contact-form')[0].reset();
                }, function(error) {
                    $emailError.text('Помилка при відправці листа. Спробуйте ще раз.');
                });
        });
    });


})(jQuery);
