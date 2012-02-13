var site = site || {};

site.ColorSet = function(headerHex, bodyHex) {
  // Constructor for an object that stores a set of the hexcodes
  // for a specified color scheme
  this.headerHex = headerHex;
  this.bodyHex = bodyHex;
};

Object.defineProperty(site.ColorSet.prototype, 'asJson', {
  get: function() {
    return JSON.stringify(this);
  }
});

site.ColorSet.fromJson = function(jsonString) {
  var result = JSON.parse(jsonString); 
  return new site.ColorSet(result.headerHex, result.bodyHex);
};

site.ColorSet.default = function() {
  return new site.ColorSet('#FFC373', '#F0FFF0');
};

site.CookieStorage = function() {};

Object.defineProperty(site.CookieStorage.prototype, 'value', {
    get: function() {
      if (!$.cookie('color2')) {
        return null;
      }
      return site.ColorSet.fromJson($.cookie('color2'));
    },

    set: function(colorSet) {
      $.cookie('color2', colorSet.asJson, {expires: 7});
      if (!($.cookie('color2'))) {
        throw new Error('Failed saving the color as a cookie.');
      }
    }
});

site.CookieStorage.prototype.clear = function() {
  $.cookie('color2', null);
};

site.Html5Storage = function() {};

Object.defineProperty(site.Html5Storage.prototype, 'value', {
    get: function() {
      var stored = localStorage.color;
      if (!stored) {
        return null;
      }
      return site.ColorSet.fromJson(stored);
    },

    set: function(colorSet) {
      // Throws an error if the quota is exceeded.
      localStorage.color = colorSet.asJson;
    }
});

site.Html5Storage.prototype.clear = function() {
  delete localStorage.color;
};

site.ColorChanger = function(argumentMap) {
  // A string that can be passed to jQuery to retrieve the headerSelect
  // needed because the actual select object may not be available when
  // this constructor is called (so we defer retrieving it).
  this.headerSelectSelector = argumentMap.headerSelectSelector;
  this.bodySelectSelector = argumentMap.bodySelectSelector;
  this.listRandomSelector = argumentMap.listRandomSelector;
  this.experimentalRandomSelector = argumentMap.experimentalRandomSelector;
  this.resetButtonSelector = argumentMap.resetButtonSelector;
  this.header = argumentMap.header;
  this.body = argumentMap.body;
  this.message = argumentMap.message;
  this.storage = argumentMap.storage;
};

Object.defineProperty(site.ColorChanger.prototype, 'selectOptions', {
    get: function() {
      var selectOptions = [];
      $(this.headerSelectSelector + ' > option').each(function(index, selected) {
        selectOptions[index] = $(selected).val();
      });
      return selectOptions;
    }
});

Object.defineProperty(site.ColorChanger.prototype, 'headerSelectValue', {
    get: function() {
      return $(this.headerSelectSelector).val();
    },
    set: function(value) {
      $(this.headerSelectSelector).val(value);
    }
});

Object.defineProperty(site.ColorChanger.prototype, 'bodySelectValue', {
    get: function() {
      return $(this.bodySelectSelector).val();
    },
    set: function(value) {
      $(this.bodySelectSelector).val(value);
    }
});

// changes the background-color of the given jQuery object to color
site.changeColor = function(objectToChange, color) {
  objectToChange.css('background-color', color);
};

// like changeColor, but does the change with an
// animation, using jquery.colors.js
// we only animate the initial change of color when the
// user first picks the new color, all other changes of
// the css value are done instantly with changeColor
site.animateColor = function(objectToChange, color) {
  objectToChange.animate({backgroundColor: color}, 'slow');
};

site.randomNumber = function(maximumValue) {
  return Math.floor(Math.random() * maximumValue);
};

site.randomRgbValue = function() {
  // FF in hex:
  var maximumValue = 255;
  var colorHex = site.randomNumber(maximumValue).toString(16); 
  // pad it with leading 0's if needed
  while (colorHex.length < 2) {
    colorHex = '0' + colorHex;
  }
  return colorHex;
};

site.newColorHex = function() {
  var red = site.randomRgbValue();
  var green = site.randomRgbValue();
  var blue = site.randomRgbValue();
  return '#' + red + green + blue;
};

// event that is called when one of the selects changes. 
// The elements specified by selector animate a color
// change to color, and the cookie is updated
// accordingly
site.ColorChanger.prototype.onSelectChange = function(object, color) {
  site.animateColor(object, color);
  this.save();
};

site.ColorChanger.prototype.bindEvents = function() {
  this.body.on('change', this.headerSelectSelector, (function() {
    this.onSelectChange(this.header, this.headerSelectValue);
  }).bind(this));

  this.body.on('change', this.bodySelectSelector, (function() {
    this.onSelectChange(this.body, this.bodySelectValue);
  }).bind(this));

  this.body.on('click', this.resetButtonSelector, (function() {
    this.setColors(site.ColorSet.default(), {animate: true});
    this.storage.clear();
  }).bind(this));

  this.body.on('click', this.listRandomSelector, (function() {
    var randomColors = []; 
    var selectOptions = this.selectOptions;
    var numberOfOptions = selectOptions.length;
    for (var i = 0; i < numberOfOptions; i++) {
      randomColors[i] = selectOptions[
          site.randomNumber(numberOfOptions)];
    }
    var randomColorSet = new site.ColorSet(randomColors[0], randomColors[1]);
    this.setColors(randomColorSet, {animate: true});
    this.save();
  }).bind(this));

  this.body.on('click', this.experimentalRandomSelector, (function() {
    var newColors = [];
    $('select').each(function(index) {
      var color = site.newColorHex().toUpperCase();
      var newColorOption = $('<option>', {
        value : color,
        html : color});
      $(this).append(newColorOption).val(color);
      newColors[index] = color;
    });
    this.setColors(new site.ColorSet(newColors[0], newColors[1]),
        {animate: true});
    this.save();
  }).bind(this));
};

site.ColorChanger.prototype.tellUser = function(toReport) {
  if (this.message.length === 0) {
    var newMessageElement = $('<p>', {id: 'colorMessage', html: toReport});
    this.body.find('article').append(newMessageElement);
  } else {
    this.message.html(message);
  }
};

site.ColorChanger.prototype.save = function() {
  var newColors = new site.ColorSet(this.headerSelectValue,
      this.bodySelectValue);
  try {
    this.storage.value = newColors;
  } catch (storageFailedError) {
    var message = "You haven't enabled cookies for this site. This script " +
          "won't be able to save any color changes.";
    this.tellUser(message);
  }
};

site.ColorChanger.prototype.setColors = function(colorSet, shouldAnimateMap) {
  // sets the selects' names and the background colors as
  // specified by colorSet, animates if shouldAnimate is
  // true, else just changes the colors
  var shouldAnimate = shouldAnimateMap.animate;
  this.headerSelectValue = colorSet.headerHex;
  this.bodySelectValue = colorSet.bodyHex;

  var colorFunction = shouldAnimate ? site.animateColor : site.changeColor;

  colorFunction(this.header, colorSet.headerHex);
  colorFunction(this.body, colorSet.bodyHex);
};

site.ColorChanger.prototype.loadColors = function() {
  var maybeColorSet = this.storage.value;
  var colorsToUse = maybeColorSet || site.ColorSet.default();
  this.setColors(colorsToUse, {animate: false});
};

$(function() {
  var supportsHtml5Storage = function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (error) {
      return false;
    }
  };

  // Data saved via HTML5 storage is not sent to the server with requests.
  // It doesn't need to be in this case. If it's available, use it instead
  // of cookies.
  var storage = supportsHtml5Storage() ?
      new site.Html5Storage() : new site.CookieStorage();

  var colorChanger = new site.ColorChanger({
      headerSelectSelector: '#headerSelect',
      bodySelectSelector: '#bodySelect',
      listRandomSelector: '#listRandom',
      experimentalRandomSelector: '#experimentalRandom',
      resetButtonSelector: '#resetButton',
      header: $('header'),
      body: $('#mainText'),
      storage: storage
  });

  colorChanger.bindEvents();
  colorChanger.loadColors();
});
