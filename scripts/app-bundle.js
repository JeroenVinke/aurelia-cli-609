define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('./loader-plugin');


    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('my-react-component',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MyReactComponent = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class;

  var MyReactComponent = exports.MyReactComponent = (0, _aureliaFramework.noView)(_class = function MyReactComponent() {
    _classCallCheck(this, MyReactComponent);

    console.log('MyReactComponent ctor called!!!');
  }) || _class;
});
define('loader-plugin/index',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(config) {
        var loader = config.aurelia.loader;
        loader.addPlugin('loader-plugin', {
            fetch: function fetch(address) {
                console.log('should be called', address);
                return loader.loadModule(address.replace('.js', '')).then(function (x) {
                    console.log(x);return x;
                });
            }
        });
    }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>App.html</h1><require from=\"loader-plugin!my-react-component.js\"></require><my-react-component></my-react-component></template>"; });
//# sourceMappingURL=app-bundle.js.map