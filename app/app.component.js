(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: '../templates/main.html'
    })
    .Class({
      constructor: function() {
        this.num = 0;
        this.changeNum = function() {
          this.num = this.num + 1;
        }
        this.resetNum = function() {
          this.num = 0;
        }
        this.name = 'Joe Shmoe';
      }
    });
})(window.app || (window.app = {}));
