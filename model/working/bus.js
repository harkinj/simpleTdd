var Bus = function (capacity) {
  this.capacity = capacity
  this.passengers =[]
}

Bus.prototype.vacancies = function (
  ) {
    return this.capacity - this.passengers.length
  }

Bus.prototype.board = function (passenger, fare) {
  passenger.fare = fare
  this.passengers.push(passenger)
}

Bus.prototype.passengerNames = function () {
  var passengerNames=[]
  for (i=0;i<this.passengers.length;i++)
  {
    passengerNames.push(this.passengers[i].name + " (" +this.passengers[i].id + ")" )
  }
  return passengerNames
}

Bus.prototype.paidFares = function () {
  var fares=0
  for (i=0;i<this.passengers.length;i++)
  {
    fares += this.passengers[i].fare;
  }
  return fares
}

Bus.prototype.switchSeats = function (passenger1, passenger2) {


  var indexOfPass1, indexOfPass2 =0;
  for (i=0;i<this.passengers.length;i++)
  {
    if ( this.passengers[i].name === passenger1.name)
    {
      indexOfPass1 = i
    }
    if ( this.passengers[i].name === passenger2.name)
    {
      indexOfPass2 = i
    }
  }

  this.passengers[indexOfPass1] = passenger2
  this.passengers[indexOfPass2] = passenger1

}
module.exports = Bus
