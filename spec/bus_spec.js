var expect = require('chai').expect;
var Passenger = require('../model/passenger');
var Bus = require('../model/bus');

describe('Bus', function() {

    it("gets initialized with a capacity", function() {
        var bus = new Bus(12);
        expect(bus.capacity).to.equal(12);
        expect((new Bus(20)).capacity).to.equal(20);
    });











































    it("starts out with vacancies equal to the capacity", function() {
        var bus1 = new Bus(12);
        expect(bus1.vacancies()).to.equal(12);

        var bus2 = new Bus(20);
        expect(bus2.vacancies()).to.equal(20);
    });









































    it("allows you to board a passenger with a paid fare", function() {
        var bus = new Bus(10);
        // What are these parameters for?
        var joe = new Passenger(1, 'Joe Jones');
        var sue = new Passenger(2, 'Sue Summers');

        // What are these parameters for?
        // bus.board(joe, 4);
        bus.board(joe);
        expect(bus.vacancies()).to.equal(9);

        // What are these parameters for?
        // bus.board(sue, 3);
        bus.board(sue);
        expect(bus.vacancies()).to.equal(8);

        expect(bus.capacity).to.equal(10);
    });









































    it("allows you to see full names of passenger names/ids (in the order they were added)", function() {
        var bus = new Bus(5);
        var joe = new Passenger(1, 'Joe Jones');
        var sue = new Passenger(2, 'Sue Summers');

        expect(bus.passengerNames()).to.deep.equal([]);
        bus.board(joe);
        expect(bus.passengerNames()).to.deep.equal(['Joe Jones (1)']);

        bus.board(sue);
        expect(bus.passengerNames()).to.deep.equal(['Joe Jones (1)', 'Sue Summers (2)']);
    });










































    it("allows passengers to switch seats", function() {
        var bus = new Bus(4);

        var joe = new Passenger(1, 'Joe Jones');
        var kat = new Passenger(4, 'Kat Kaplan');
        var sue = new Passenger(3, 'Sue Summers');
        var yas = new Passenger(2, 'Yasamine Yarrow');

        bus.board(joe);
        bus.board(kat);
        bus.board(sue);
        bus.board(yas);

        bus.switchSeats(joe, sue);
        expect(bus.passengerNames()).to.deep.equal([
            'Sue Summers (3)',
            'Kat Kaplan (4)',
            'Joe Jones (1)',
            'Yasamine Yarrow (2)',
        ]);

        bus.switchSeats(kat, joe);
        expect(bus.passengerNames()).to.deep.equal([
            'Sue Summers (3)',
            'Joe Jones (1)',
            'Kat Kaplan (4)',
            'Yasamine Yarrow (2)',
        ]);
    });










































    it("allows you to get the total of all paid fares", function() {
        var bus = new Bus(10);

        var joe = new Passenger(1, 'Joe Jones');
        var sue = new Passenger(2, 'Sue Summers');
        var sally = new Passenger(3, 'Sally Sue ');

        bus.board(joe, 4);
        expect(bus.paidFares()).to.equal(4);

        bus.board(sue, 3);
        expect(bus.paidFares()).to.equal(7);

        bus.board(sally, 3)
        expect(bus.paidFares()).to.equal(10);
    });



});