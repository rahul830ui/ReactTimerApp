var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () =>{
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSubmit for only valid data is passed', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDom.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 109;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSubmit for not valid data is passed', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDom.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109h';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});