function getElCoords($el) {
  const box = $el.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;

  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft,
  };
}

function runIfElExists({selector, cb, args, root = document}) {
  const el = root.querySelector(selector);
  if (el) {
    cb(el, args);
  }
}

function svgFromText(str) {
  // const $el = document.createElement("div").innerHTML = str;
  const parser = new DOMParser(),
    xmlText = "<svg xmlns='http://www.w3.org/2000/svg'>" + str + '</svg>',
    docElem = parser.parseFromString(xmlText, 'text/xml').documentElement;

  const $node = docElem.firstChild;
  document.importNode($node, true);
  return $node;
}

function elCSS($el, styles) {
  Object.assign($el.style, styles);
}

/**
 * Append child node or replace if exists
 */
function insertChildNode($root, $oldNode, $newNode) {
  const action = $oldNode ? 'replace' : 'append';
  const args = $oldNode ? [$newNode, $oldNode] : [$newNode];

  $root[action + 'Child'](...args);
}

function fixViewportHeight() {
  var customViewportCorrectionVariable = 'vh';

  function setViewportProperty(doc) {
    var prevClientHeight;
    var customVar = '--' + (customViewportCorrectionVariable || 'vh');
    function handleResize() {
      var clientHeight = doc.clientHeight;
      if (clientHeight === prevClientHeight) return;
      requestAnimationFrame(function updateViewportHeight() {
        doc.style.setProperty(customVar, clientHeight * 0.01 + 'px');
        prevClientHeight = clientHeight;
      });
    }
    handleResize();
    return handleResize;
  }
  window.addEventListener(
    'resize',
    setViewportProperty(document.documentElement),
  );
}

export {
  fixViewportHeight,
  getElCoords,
  insertChildNode,
  elCSS,
  svgFromText,
  runIfElExists,
};
