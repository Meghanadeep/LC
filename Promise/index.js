// const showExtendedSummary = () => {
//   console.log("extended summary is showm")
// }
// const showBriefSummary = () => {
//   console.log("brief summary is shown")
// }
// const makeFeedbackButtonVisible = () => {
//   console.log("make feedback visible");
// }

// // returns the state of *all* features for current user
// function fetchAllFeatures() {
//   // in reality, this would have been a `fetch` call:
//   // `fetch("/api/features/all")`
//   return new Promise(resolve => {
//     const sampleFeatures = {
//       "extended-summary": true,
//       "feedback-dialog": true
//     };
//     setTimeout(resolve, 100, sampleFeatures);
//   });
// }
// const getFeatureState = (flagName) => {
//   let featuresList = null;
//    return new Promise((resolve) => {
//     const featureFlags = fetchAllFeatures();
//     featureFlags.then((sampleFeatures) => {
//       featuresList = sampleFeatures;
//       resolve(featuresList[flagName]);
//       console.log("features List is",sampleFeatures)
//     })
//    })
// };
//   // src/feature-x/summary.js
// getFeatureState("extended-summary")
// .then(function(isEnabled) {
//   if (isEnabled) {
//     showExtendedSummary();
//   } else {
//     showBriefSummary();
//   }
// });
// // src/feature-y/feedback-dialog.js
// getFeatureState("feedback-dialog")
// .then(function(isEnabled) {
//   if (isEnabled) {
//     makeFeedbackButtonVisible();
//   }
// });

// function PromisePolyFill(executor) {
//   let onResolve;
//   let onReject;
//   let fulfilled = false,
//     called = false,
//     value;

//   function resolve(val) {
//     fulfilled = true;
//     value = val;

//     if (typeof onResolve === "function") {
//       onResolve(val);
//       called = true;
//     }
//   }

//   function reject(val) {
//     fulfilled = true;
//     value = val;

//     if (typeof onReject === "function") {
//       onReject(val);
//       called = true;
//     }
//   }
//   this.then = function (callback) {
//     onResolve = callback;

//     if (fulfilled && !called) {
//       called = true;
//       onResolve(value);
//     }
//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;

//     if (fulfilled && !called) {
//       called = true;
//       onReject(value);
//     }
//     return this;
//   };

//   executor(resolve,reject);
// }
function PromisePolyFill(executor) {
  let onResolve, onReject;
  let fulfilled = false,
    rejected = false,
    called = false,
    value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}


const promiseReturn = new PromisePolyFill((resolve,reject) => resolve(1000));
console.log(promiseReturn);
promiseReturn.then((message) => {
  console.log("promises resolved" + message)
}).catch((err) => {
  console.log("promises rejected" + err)
})