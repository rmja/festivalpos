// See https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1615
declare interface ScreenOrientation {
    // https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock
    lock(orientation: "landscape"): void;
}