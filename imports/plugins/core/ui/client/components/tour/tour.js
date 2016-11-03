import React, { Component, PropTypes } from "react";
import Joyride from "react-joyride";

addSteps: function (steps) {
    let joyride = this.joyride;

    if (!Array.isArray(steps)) {
        steps = [steps];
    }

    if (!steps.length) {
        return false;
    }

    this.setState(function(currentState) {
        currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
        return currentState;
    });
}

// addTooltip(data) {
//     this.joyride.addTooltip(data);
// }


