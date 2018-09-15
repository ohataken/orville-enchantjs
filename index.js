(function () {

  const NoteControl = enchant.Class.create(enchant.Group, {

    initialize: function (radius) {
      enchant.Group.apply(this, arguments);

      this.width = radius * 2;
      this.height = radius * 2;
      this.originX = radius;
      this.originY = radius;

      this.button = ((sprite) => {
        sprite.image = ((surface) => {
          surface.context.fillStyle = 'rgba(0, 0, 0, 0.25)';
          surface.context.beginPath();
          surface.context.arc(radius, radius, radius, 0, Math.PI * 2, true);
          surface.context.fill();
          return surface;
        })(new enchant.Surface(sprite.width, sprite.height));

        this.addChild(sprite);

        return sprite;
      })(new enchant.Sprite(this.width, this.width));
    },

    fillSurface(fillStyle) {
      const radius = this.button.width / 2;

      ((surface) => {
        surface.clear();
        surface.context.fillStyle = fillStyle;
        surface.context.beginPath();
        surface.context.arc(radius, radius, radius, 0, Math.PI * 2, true);
        surface.context.fill();
      })(this.button.image);
    },

    ontouchstart() {
      this.fillSurface('rgba(0, 0, 0, 0.75');
    },

    ontouchend() {
      this.fillSurface('rgba(0, 0, 0, 0.25');
    },

  });

  const SplashScene = enchant.Class.create(enchant.Scene, {

    initialize: function () {
      enchant.Scene.apply(this, arguments);

      const title = ((label) => {
        const core = enchant.Core.instance;
        label.text = 'Orville\npress any key';
        label.font = '8em serif';
        label.x = core.width / 2 - label.width / 2;
        label.y = core.height / 2 - label.height / 2;
        label.originX = label.width / 2;
        label.originY = label.height / 2;
        label.width = core.width / 2;
        label.height = core.height / 2;

        label.addEventListener('enterframe', () => {
          ++label.rotation;
        });

        this.addChild(label);
        return label;
      })(new enchant.Label());

      this.addEventListener('touchstart', () => {
        const core = enchant.Core.instance;
        core.popScene();
        core.pushScene(new PlayScene());
      });
    },

  });

  const PlayScene = enchant.Class.create(enchant.Scene, {

    initialize: function () {
      enchant.Scene.apply(this, arguments);

      const controlLA = ((entity) => {
        const core = enchant.Core.instance;
        entity.x = core.width / 2 - entity.width * 3;
        entity.y = core.height - entity.height * 2;
        this.addChild(entity);
        return entity;
      })(new NoteControl(50));

      const controlLB = ((entity) => {
        const core = enchant.Core.instance;
        entity.x = core.width / 2 - entity.width * 1;
        entity.y = core.height - entity.height * 2;
        this.addChild(entity);
        return entity;
      })(new NoteControl(50));

      const controlRA = ((entity) => {
        const core = enchant.Core.instance;
        entity.x = core.width / 2 + entity.width * 1;
        entity.y = core.height - entity.height * 2;
        this.addChild(entity);
        return entity;
      })(new NoteControl(50));

      const controlRB = ((entity) => {
        const core = enchant.Core.instance;
        entity.x = core.width / 2 + entity.width * 3;
        entity.y = core.height - entity.height * 2;
        this.addChild(entity);
        return entity;
      })(new NoteControl(50));
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
