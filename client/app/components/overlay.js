const Overlay = {
  template: `
  <div>
    <div class="overlay-mask"></div>
    <div class="overlay-content">
      <div class="well well-lg" ng-transclude>
      </div>
    </div>
  </div>
  `,
  transclude: true,
};

export default function (ngModule) {
  ngModule.component('overlay', Overlay);
}
