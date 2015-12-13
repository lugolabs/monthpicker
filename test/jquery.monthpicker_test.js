(function() {
  var monthpicker;

  module('jquery.monthpicker', {
    teardown: function() {
      if (monthpicker) monthpicker.monthpicker('destroy');
    }
  });

  test('render', function() {
    monthpicker = $('#monthpicker-el').monthpicker({
      years: [2015, 2014, 2013]
    });
    equal($('.monthpicker').html(),
      '<div class=\"years\">' +
        '<select><option>2015</option><option>2014</option><option>2013</option></select>' +
      '</div>' +
      '<table><tbody>' +
        '<tr><td><button data-value=\"0\">January</button></td><td><button data-value=\"1\">February</button></td><td><button data-value=\"2\">March</button></td><td><button data-value=\"3\">April</button></td></tr>' +
        '<tr><td><button data-value=\"4\">May</button></td><td><button data-value=\"5\">June</button></td><td><button data-value=\"6\">July</button></td><td><button data-value=\"7\">August</button></td></tr>' +
        '<tr><td><button data-value=\"8\">September</button></td><td><button data-value=\"9\">October</button></td><td><button data-value=\"10\">November</button></td><td><button data-value=\"11\">December</button></td></tr></tbody>' +
      '</table>'
    );
  });

  test('show', 2, function() {
    monthpicker = $('#monthpicker-el').monthpicker({
      years: [2015, 2014, 2013]
    });
    var container = $('.monthpicker');
    equal(container.css('display'), 'none');
    monthpicker.trigger('click');
    equal(container.css('display'), 'block');
  });

  test('hide', function() {
    monthpicker = $('#monthpicker-el').monthpicker({
      years: [2015, 2014, 2013]
    });
    var container = $('.monthpicker').css('display', 'block');
    $(document).trigger('click');
    equal(container.css('display'), 'none');
  });

  test('destroy', 2, function() {
    monthpicker = $('#monthpicker-el').monthpicker({
      years: [2015, 2014, 2013]
    });
    equal($('.monthpicker').length, 1);
    monthpicker.monthpicker('destroy');
    equal($('.monthpicker').length, 0);
  });

  test('onMonthSelect', 2, function() {
    var selectedMonth, selectedYear;
    monthpicker = $('#monthpicker-el').monthpicker({
      years: [2015, 2014, 2013],
      onMonthSelect: function(monthIndex, year) {
        selectedMonth = monthIndex;
        selectedYear = year;
      }
    });
    $('.monthpicker button[data-value="4"]').trigger('click');
    equal(selectedMonth, 4);
    equal(selectedYear, 2015);
  });


})();
