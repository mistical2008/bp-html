const functions = {
  "fluid-size-vw": function (minVal, maxVal, minViewport, maxViewport) {
    return `calc(${minVal}px + (${maxVal} - ${minVal}) * ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport})))`
  },
  "fluid-size-vw": function (minVal, maxVal, minViewport, maxViewport) {
    return `calc(${minVal}px + (${maxVal} - ${minVal}) * ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport})))`
  },
};

exports.functions = functions;
