$('#currency').on('click', function () {
    var list = $('.main-currency-exchange-converter-currency-list');
    $('.main-currency-exchange-converter-currency-received-list').hide();
    if (list.css('display') === 'none') {
        list.show();
    } else {
        list.hide();
    }
});

$('.main-currency-exchange-converter-currency-list li').on('click', function (e) {
    $('.main-currency-exchange-converter-currency-list li').removeClass('active');
    $('.main-currency-exchange-converter-currency-list li').removeAttr('class');
    $(this).addClass('active');
    $('#select-currency').html($(this).html());
    $('#currency').val($(this).attr("data-value"));
    $('.main-currency-exchange-converter-currency-list').hide();
    //console.log('value=' + $(this).attr("data-value"));
});

$('#currency-received').on('click', function () {
    var list = $('.main-currency-exchange-converter-currency-received-list');
    $('.main-currency-exchange-converter-currency-list').hide();
    if (list.css('display') === 'none') {
        list.show();
    } else {
        list.hide();
    }
});

$('.main-currency-exchange-converter-currency-received-list li').on('click', function (e) {
    $('.main-currency-exchange-converter-currency-received-list li').removeClass('active');
    $('.main-currency-exchange-converter-currency-received-list li').removeAttr('class');
    $(this).addClass('active');
    $('#select-currency-received').html($(this).html());
    $('#currency-received').val($(this).attr("data-value"));
    $('.main-currency-exchange-converter-currency-received-list').hide();
    //console.log('value=' + $(this).attr("data-value"));
});


$(document).ready(function () {
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const overlayContent = document.querySelector('.overlay-content');
    const overlay = document.querySelector('.overlay');

    hamburgerIcon.addEventListener('click', openMenu);

    function openMenu() {
        hamburgerIcon.classList.toggle("open");
        overlay.classList.toggle("open");
        overlayContent.classList.toggle("show-content");
    };

    $('input[type=number]').on('keyup', function () {
        var amount = $('#amount');
        var amount_received = $('#amount-received');
        var value = $(this).val().replace(',', '.');
        $(this).attr('value', value);
        if ($(this).attr('id') === amount.attr('id')) {
            amount_received.val(($(this).val() * 1.7).toFixed(2));
            amount_received.attr('value', ($(this).val() * 1.7).toFixed(2));
        } else {
            amount.val(($(this).val() / 1.9).toFixed(2));
            amount.attr('value', ($(this).val() / 1.9).toFixed(2));
        }
        //console.log('id=' + $(this).attr('id'));
    });

    $('input[type=number]').each(function (i) {
        var amount = $('#amount');
        var amount_received = $('#amount-received');
        var value = $(this).val().replace(',', '.');
        $(this).attr('value', value);
        if ($(this).attr('id') === amount.attr('id')) {
            amount_received.val(($(this).val() * 1.7).toFixed(2));
            amount_received.attr('value', ($(this).val() * 1.7).toFixed(2));
        } else {
            amount.val(($(this).val() / 1.9).toFixed(2));
            amount.attr('value', ($(this).val() / 1.9).toFixed(2));
        }
    });
});

const progress = document.querySelector('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-range');

if (progress) {
    progress.addEventListener('input', function () {
        var count = $('.main-dimensions-selection-form-column-left-row-step-2-days-block-text-days-count');
        var count_label = $('.main-dimensions-selection-form-column-left-row-step-2-days-block-text');
        var length = count.val().toString().length;
        var margin_right = 2.5;
        //console.log('length=' + length);
        //console.log('value=' + this.value);
        if (length === 1) {
            count_label.css('margin', '1.8rem auto auto 3.5rem');
        } else {
            margin_right += length - 1;
            //console.log('margin_right=' + margin_right);
            count_label.css('margin', '1.8rem auto auto ' + margin_right + 'rem');
        }
        //console.log('length=' + length);
        const max = this.max;
        const value = this.value;
        const price = $('.main-dimensions-selection-form-column-left-image-block.active').attr('data-price') * this.value;
        var total = value * 100 / max;
        this.style.background = `linear-gradient(to right, #3AAF45 0%, #3AAF45 ${total}%, #BBBCBE ${total}%, #BBBCBE 100%)`;
        count.val(this.value);
        count.attr('value', this.value);

        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-days').html(this.value);
        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-bold-sum').html(price.toLocaleString('ru'));
        //console.log('value=' + this.value);
    });
}

$('.main-dimensions-selection-form-column-left-row-step-2-days-block-text-days-count').on('input', function () {
    if ($(this).val() <= 2000) {
        const progress = document.querySelector('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-range');
        var count = $('.main-dimensions-selection-form-column-left-row-step-2-days-block-text-days-count');
        var count_label = $('.main-dimensions-selection-form-column-left-row-step-2-days-block-text');
        var length = count.val().toString().length;
        var margin_right = 2.5;
        if (length === 1) {
            count_label.css('margin', '1.8rem auto auto 2.5rem');
        } else {
            margin_right += length - 1;
            //console.log('margin_right=' + margin_right);
            count_label.css('margin', '1.8rem auto auto ' + margin_right + 'rem');
        }
        //console.log('length=' + length);
        const max = this.max;
        const value = this.value;
        const price = $('.main-dimensions-selection-form-column-left-image-block.active').attr('data-price') * this.value;
        count.val(this.value);
        count.attr('value', this.value);

        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-days').html(this.value);
        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-bold-sum').html(price.toLocaleString('ru'));
        //console.log('value=' + this.value);
    } else {
        progress.style.background = `linear-gradient(to right, #3AAF45 0%, #3AAF45 0%, #BBBCBE 0%, #BBBCBE 100%)`;
        $(this).val(0);
        $(this).attr('value', 0);
        progress.value = 0;
        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-days').html(0);
        $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-bold-sum').html('0'.toLocaleString('ru'));
    }
});

$('.main-dimensions-selection-form-column-left-image-block').on('click', function () {
    const el = $(this);
    const range = $(this);
    $('.main-dimensions-selection-form-column-left-image-block').removeClass('active');
    el.addClass('active');
    $('.main-dimensions-selection-form-column-left-row-step-2').css('display', 'flex');
    $('.main-dimensions-selection-form-column-left-row-step-2-button-block').css('display', 'flex');
    $('.main-dimensions-selection-form-column-left-row-step-2-days-block-text-days-count').html('0');
    $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-days').html('0');
    $('.main-dimensions-selection-form-column-left-row-step-2-days-block-range-block-sum-block-text-bold-sum').html('0');
});

$('.main-navbar-main-list-item').hover(function () {
    const link = $(this);
    $('.main-navbar-main-list-item .main-navbar-main-list-sublist').css('display', 'none');
    $(this).find('.main-navbar-main-list-sublist').css('display', 'flex');
});

$('#main-header').on('mouseleave', function () {
    const link = $(this);
    $('.main-navbar-main-list-item .main-navbar-main-list-sublist').css('display', 'none');
    $('.main-navbar-main-list-item-link.active').siblings('.main-navbar-main-list-item .main-navbar-main-list-sublist').css('display', 'flex');
});

$('#message').on('keyup', function () {
    var length = $(this).val().length;
    //const message_warning = $('#message_warning');
    //const message = 'Количество символов не должно превышать ' + 340 + ' символов!';
    var value = '';
    if (length <= 340) {
        $('#message-length').html(length);
        message_warning.hide();
        /*if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }*/
    } else {
        value = $(this).val().substring(0, 340);
        $(this).val(value);
        $(this).attr('value', value);
        /*$(this).addClass('error');
        message_warning.html(message);
        message_warning.show();*/
    }
});

function checkMessage() {
    var message_textarea = $('#message');
    var length = message_textarea.val().length;
    const message_warning = $('#message_warning');
    message_warning.hide();
    const message = 'Количество символов не должно превышать ' + 340 + ' символов!';
    var value = '';
    if (length <= 340) {
        $('#message-length').html(length);
        message_warning.hide();
        if (message_textarea.hasClass('error')) {
            message_textarea.removeClass('error');
        }
    } else {
        value = message_textarea.val().substring(0, 340);
        message_textarea.val(value);
        message_textarea.attr('value', value);
        message_textarea.addClass('error');
        message_warning.html(message);
        message_warning.show();
    }
}

function checkINNOpeningAccount() {
    const range = $('input[name=type]:checked');
    const inn = $('#inn');
    const inn_warning = $('#inn_warning');
    inn_warning.hide();
    const inn_length_ip = 12;
    const inn_length_yl = 10;
    if ($(this).hasClass('error')) {
        $(this).removeClass('error');
    }
    const message_ip = 'Количество символов должно быть ' + inn_length_ip + ' для ИП!';
    const message_yl = 'Количество символов должно быть ' + inn_length_yl + ' для ЮЛ!';
    // console.log('range=' + range.attr('value'));
    // console.log('inn=' + inn.val());
    // console.log('inn_length=' + inn.val().length);
    if ((range.attr('value') === 'ip' && inn.val().length === inn_length_ip) || range.attr('value') === 'yl' && inn.val().length === inn_length_yl) {
        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
        inn_warning.hide();
    } else {
        $(this).addClass('error');
        if (range.attr('value') === 'ip') {
            inn_warning.html(message_ip);
        } else if (range.attr('value') === 'yl') {
            inn_warning.html(message_yl);
        } else {
            inn_warning.html('Деятельность не выбрана!');
        }
        inn_warning.show();
    }
};

// Get the modal
var modal = document.getElementById("myModal");
var myModalRental = document.getElementById("myModalRental");
var currencyList = document.getElementsByClassName('main-currency-exchange-converter-currency-list');

// Get the button that opens the modal
var btn = document.getElementById("book-now");

// When the user clicks the button, open the modal
if (btn) {
    btn.onclick = function () {
        modal.style.display = "block";
        const selected = $('.main-dimensions-selection-form-column-left-image-block.active');
        $('.modal-content-image-block').hide();
        $('.modal-content-item-block').hide();
        $('[data-parent-id=' + selected.attr('id') + ']').show();
    };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == myModalRental) {
        myModalRental.style.display = "none";
    }
}

$('#message-button-close').on('click', function () {
    modal.style.display = "none";
});


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhone(phone) {
    var regex = /^\+(?:\d(?:\(\d{3}\)|-\d{3})-\d{3}-(?:\d{2}-\d{2}|\d{4})|\d{11})$/gm;
    return regex.test(phone);
}

function isName(name) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}


$('.main-legal-entities-and-individual-entrepreneurs-opening-account-activity-input').on('input', function () {
    const input = $(this);
    const warning = $('#' + input.attr('id') + '_warning');
    const message = 'Данное поле должно содержать только буквы!';
    const check = isName(input.val());
    if ($(this).hasClass('error')) {
        $(this).removeClass('error');
    }


    if (check) {
        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
        warning.hide();
    } else {
        $(this).addClass('error');
        warning.html(message);
        warning.show();
    }
});

function checkEmailOpeningAccount() {
    const input = $('.main-legal-entities-and-individual-entrepreneurs-opening-account-activity-input-email');
    const warning = $('#' + input.attr('id') + '_warning');
    warning.hide();
    const message = 'Данное поле должно содержать почтовый адрес!';
    const check = isEmail(input.val());
    if ($(this).hasClass('error')) {
        $(this).removeClass('error');
    }


    if (check) {
        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
        warning.hide();
    } else {
        $(this).addClass('error');
        warning.html(message);
        warning.show();
    }
};

function checkPhoneOpeningAccount() {
    const input = $('.main-legal-entities-and-individual-entrepreneurs-opening-account-activity-input-phone');
    const warning = $('#' + input.attr('id') + '_warning');
    warning.hide();
    const message = 'Данное поле должно содержать телефонный номер!';
    const check = isPhone(input.val());
    if ($(this).hasClass('error')) {
        $(this).removeClass('error');
    }


    if (check) {
        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
        warning.hide();
    } else {
        $(this).addClass('error');
        warning.html(message);
        warning.show();
    }
};


$('#connectWithUs').on('click', function () {
    modal.style.display = "block";
    return false;
});

$('#connectWithUs2').on('click', function () {
    modal.style.display = "block";
    return false;
});

$('#connectWithUsRental').on('click', function () {
    myModalRental.style.display = "block";
    return false;
});

$('#connectWithUsRental2').on('click', function () {
    myModalRental.style.display = "block";
    return false;
});


$('#message-button').on('click', function () {
    checkPhoneOpeningAccount();
    checkINNOpeningAccount();
    checkEmailOpeningAccount();
    checkMessage();
});

$('#for-non-residents').on('click', function () {
    $('#for-residents').removeClass('active');
    $(this).addClass('active');
    $('.for-residents').hide();
    $('.for-non-residents').show();
    return false;
});

$('#for-residents').on('click', function () {
    $('#for-non-residents').removeClass('active');
    $(this).addClass('active');
    $('.for-non-residents').hide();
    $('.for-residents').show();
    return false;
});

$('.mobile-menu-list-item .mobile-menu-link').on('click', function () {
    $('.mobile-menu-list-sublist').hide();
    $('.mobile-menu-list-item').children('a').removeClass('active');
    $(this).siblings('a').addClass('active');
    $(this).siblings('.mobile-menu-list-sublist').show();
    return false;
});