// // Assume you have a call center with three levels of employees: fresher, technical lead 
// (TL), product manager (PM). There can be multiple freshers, multiple TL or PM. An incoming 
// telephone call must be allocated to a fresher who is free. If a fresher can’t handle the call, 
// he or she must escalate the call to technical lead. If the TL is not free then the call should be escalated to PM. 
// Design the classes and data structures for this problem. Implement a method getCallHandler().

const assignCall =() => {
  const isfFree = false;
  const istFree = false;
  const ismFree = true;
  const freshers = [{ name :a, isfree: isfFree},{ name :b, isfree: isfFree},{name: c, isfree: isfFree}];
  const techLead = [{name: ta, isfree: istFree},{name: tb, isfree: istFree},{name: tc, isfree: istFree}];
  const manager = [{name: Ma, isfree: ismFree},{name: Ma, isfree: ismFree},{name: Ma, isfree: ismFree}];
  const assignee = null;
  getCallHandler = (F,T,M) => {
     F.forEach(element => {
        if(element.isfFree) {
            assignee = element.name;
            element.isfFree = false;
            return assignee;
        } 
     });
     T.forEach(element => {
        if(element.isfFree) {
            assignee = element.name;
            return assignee
        } 
     });
     M.forEach(element => {
        if(element.isfFree) {
            assignee = element.name;
            return assignee
        } 
     });
     return assignee;
  }


  console.log(getCallHandler(freshers,techLead,manager));
}