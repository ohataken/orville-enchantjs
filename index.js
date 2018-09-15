(function () {

  const SplashScene = enchant.Class.create(enchant.Scene, {

    initialize: function () {
      enchant.Scene.apply(this, arguments);

      const title = (function (label) {
        const core = enchant.Core.instance;
        label.text = 'Orville';
        label.font = '8em serif';
        label.x = core.width / 2;
        label.y = core.height / 2;
        label.width = core.width / 2;
        label.height = core.height / 2;

        label.addEventListener('enterframe', () => {
          ++label.rotation;
        });

        this.addChild(label);
        return label;
      }).call(this, new enchant.Label());
    },

  });

  window.addEventListener('load', () => {
    const core = new enchant.Core(1080, 1080);

    core.onload = function () {
      core.pushScene(new SplashScene());
    }

    core.start();
  });

})();
