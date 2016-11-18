var React = require('react');

var Controls = React.createClass({
    propTypes: {
      countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChanges: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);

        }

    },
    render: function () {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
          if (countdownStatus === 'started'){
              return <button className="button secondary" onClick={this.onStatusChanges('paused')}>Pause</button>

          } else if (countdownStatus === 'paused') {
              return <button className="button primary" onClick={this.onStatusChanges('started')}>Start</button>

          }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChanges('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;