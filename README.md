jQuery.monthpicker
------------------

![jQuerymonthpicker screenshot](https://www.lugolabs.com/static/jquery_monthpicker_screenshot.png)

Pick month and year with this jQuery plugin.

#### Usage

The plugin accepts a few options:

* `years` array of years to select from
* `topOffset` distance in pixels from the element offset
* `onMonthSelect` event triggered when selecting a month

Example:

```js
$('#monthpicker').monthpicker({
    years:          [2015, 2014, 2013, 2012, 2011],
    topOffset:      6,
    onMonthSelect:  function(m, y) {
      console.log('Month: ' + m + ', year: ' + y);
    }
});
```

See more at [examples](https://github.com/lugolabs/monthpicker/tree/master/examples) folder.

#### Styles

The HTML generated for the popup is shown below:

```html
<div class="monthpicker">
  <div class="years">
    <select>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
    </select>
  </div>
  <table>
    <tr>
      <td><button data-value="0">January</button></td>
      <td><button data-value="1">February</button></td>
      <td><button data-value="2">March</button></td>
      <td><button data-value="3">April</button></td>
    </tr>
    <tr>
      <td><button data-value="4">May</button></td>
      <td><button data-value="5">June</button></td>
      <td><button data-value="6">July</button></td>
      <td><button data-value="7">August</button></td>
    </tr>
    <tr>
      <td><button data-value="8">September</button></td>
      <td><button data-value="9">October</button></td>
      <td><button data-value="10">November</button></td>
      <td><button data-value="11">December</button></td>
    </tr>
  </table>
</div>
```

Some initial styles are added in the [css/jquery.monthpicker.css](https://github.com/lugolabs/monthpicker/blob/master/css/jquery.monthpicker.css) file. You can change them as you please.

#### Tests

Run tests at [test](https://github.com/lugolabs/monthpicker/tree/master/test) folder with QUnit.

#### Licence

jQuery.monthpicker is licensed under the terms of the [MIT License](https://github.com/lugolabs/monthpicker/blob/master/MIT-LICENSE).
