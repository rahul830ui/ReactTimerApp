var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Counter = require('Counter');

describe('Counter', () => {
    it('should Exist', () => {
        expect(Counter).toExist();
    });
});


describe('handleSetCountdown', () => {
    it('should Exist', () => {
        expect(Counter).toExist();
    });
    it('should set state to started and countdown', (done) => {
        var counter = TestUtils.renderIntoDocument(<Counter/>);
        counter.handleSetCountdown(20);
        expect(counter.state.count).toBe(20);
        expect(counter.state.countdownStatus).toBe('started');

        setTimeout(() => {
            expect(counter.state.count).toBe(19);
            done();
        }, 1001);
    });
    it('should not set count to negative', (done) => {
        var counter = TestUtils.renderIntoDocument(<Counter/>);
        counter.handleSetCountdown(1);
        setTimeout(() => {
            expect(counter.state.count).toBe(0);
            done();
        }, 1003);
    });
});

