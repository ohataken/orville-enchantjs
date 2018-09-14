(function () {

  window.addEventListener('load', () => {
    const core = new enchant.Core(1920, 1080);

    core.onload = function () {
      const label = enchant.Label();
      label.text = 'hello world';

      const scene = enchant.Scene();
      scene.addChild(label);
      core.pushScene(scene);
    }

    core.start();
  });

})();
