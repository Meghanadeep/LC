const showBriefSummary = () => {
  console.log("showBriefSummary");
}
const makeFeedbackButtonVisible = () => {
  console.log("makeFeedbackButtonVisible");
}
const showAlpaSummary = () => {
  console.log("showAlpaSummary");
}
const showExtendedSummary = () => {
  console.log("showExtendedSummary");
}
function fetchAllFeatures() {
    // in reality, this would have been a `fetch` call:
    // `fetch("/api/features/all")`
    return new Promise((resolve, reject) => {
      const sampleFeatures = {
        // "extended-summary": true,
        "feedback-dialog": true
  };
      setTimeout(reject, 100, sampleFeatures);
    });
  }
const getFeatureState = (featureNameFlag , defaultState) => {
    return new Promise((resolve, reject) => {
       const featuresList = fetchAllFeatures();
       featuresList.then((sampleFeature) => {
        console.log(sampleFeature);
        resolve(sampleFeature[featureNameFlag]);
       })
       featuresList.catch((err) => {
        resolve(defaultState);
       })
       })
}
  // src/feature-x/summary.js
getFeatureState("extended-summary", "alpha")
.then(function(isEnabled,param2 ) {
  if (isEnabled === 'beta') {
    showExtendedSummary();
  } else if(isEnabled === 'alpha'){
    showAlpaSummary();
  }
  else {
    showBriefSummary();
  }
}).catch((err) => {
  console.log("no features list obtained");
});
// src/feature-y/feedback-dialog.js
getFeatureState("feedback-dialog")
.then(function(isEnabled) {
  if (isEnabled) {
    makeFeedbackButtonVisible();
  }
});