/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const createEmployeeRecord = function ([firstName, familyName, title,payPerHour]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (records) {
    let employeeRecords = [];
    for (let employee of records){
        employeeRecords.push(createEmployeeRecord(employee))
    }
    return employeeRecords;
};

const createTimeInEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
};

const createTimeOutEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
};

const hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find((event) => event.date === date);
    let timeOut = this.timeOutEvents.find((event) => event.date === date);
  
    return (timeOut.hour - timeIn.hour) / 100;
  };
  
  const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  };
  
  const findEmployeeByFirstName = function (collection, firstNameString) {
    return collection.find((employee) => employee.firstName === firstNameString);
  };
  
  const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
  };