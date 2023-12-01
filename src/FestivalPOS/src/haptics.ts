// /*
//  * Haptics.js - http://hapticsjs.org/
//  * Copyright (c) Shantanu Bala 2014
//  * Direct questions to shantanu@sbala.org
//  * Haptics.js can be freely distributed under the MIT License.
//  */

// var log;

// type Pattern = number | number[];
// type PatternFunction = (duration: number) => void;

// // a console.log wrapper for debugging
// log = function () {
//     // store logs to an array for reference
//     log.history = log.history || [];
//     log.history.push(arguments);

//     if (console) {
//         console.log(Array.prototype.slice.call(arguments));
//     }
// };

// // used for timeouts that 'accomplish nothing' in a pattern
// function emptyFunc() {
//     log("Executed emptyFunc, which does nothing.");
// }

// // check for navigator variables from different vendors
// export const enabled = !!navigator.vibrate;

// // calls to navigatorVibrate always bound to global navigator object
// export function vibrate(pattern: Pattern): boolean {
//     if (enabled) {
//         navigator.vibrate(pattern);
//         return true;
//     }

//     // log instead of actually vibrating device if disabled
//     log(arguments);
//     return false;
// }

// // execute two functions timed using the provided durations
// function executeSequence(durations: number[], currentFunc: PatternFunction, nextFunc: PatternFunction) {
//     const d = durations.shift();
//     nextFunc = nextFunc || currentFunc;

//     if (!d) {
//         throw new Error();
//     }

//     currentFunc(d);

//     if (durations.length === 0) {
//         return true; // finished executing sequence
//     }

//     // handle remaining durations
//     return setTimeout(function () {
//         // swap order of next and currentFunc
//         return executeSequence(durations, nextFunc, currentFunc);
//     }, d);
// }

// // create a pattern function from a duration sequence
// function createSequenceFunc(durations: number[]): PatternFunction {
//     let sum = 0;
//     for (let i = 0; i < durations.length; i++) {
//         sum += durations[i];
//     }

//     return function (duration: number) {
//         const d = duration / sum;
//         const newVibration: Pattern = [];

//         for (let j = 0; j < durations.length; j++) {
//             newVibration.push(durations[j] * d);
//         }

//         vibrate(newVibration);
//     };
// }

// // create a single pattern function from a sequence of functions
// function concatenatePatternFuncs(...funcs: PatternFunction[]): PatternFunction {
//     return function (duration: number) {
//         const d = duration / funcs.length;

//         for (let i = 0; i < funcs.length; i++) {
//             setTimeout(() => {
//                 funcs[i](d);
//             }, d);
//         }
//     };
// }

// // a way to quickly create/compose new tactile animations
// function patternFactory(...funcs: Function[]) {
//     var len,
//         j,
//         newPattern;

//     len = funcs.length;

//     for (j = 0; j < len; j++) {
//         if (typeof funcs[j] !== "function") {
//             funcs[j] = createSequenceFunc(funcs[j]);
//         }
//     }

//     newPattern = concatenatePatternFuncs(funcs);

//     return function (args) {
//         if (typeof args === "number") {
//             newPattern(args);
//         } else {
//             executeSequence(args, newPattern, emptyFunc);
//         }
//     };
// }

// // create a sequencing pattern function
// export function createPattern(...funcs: Function[]) {
//     if (funcs.length > 1) {
//         func = patternFactory(funcs[0]);
//     } else if (funcs.length) {
//         func = createSequenceFunc(funcs);
//     }

//     function newSequence(args) {
//         if (typeof args === "number") {
//             func(args);
//         } else {
//             executeSequence(args, func, emptyFunc);
//         }
//     }

//     return newSequence;
// }

// // EFFECTS: Fade In
// export const fadeIn = createPattern(vibrateFadeIn);
// function vibrateFadeIn(duration: number) {
//     let pulses: Pattern = [];
//     if (duration < 100) {
//         pulses = duration;
//     } else {
//         const d = duration / 100;
//         for (let i = 1; i <= 10; i++) {
//             pulses.push(i * d);
//             if (i < 10) {
//                 pulses.push((10 - i) * d);
//             }
//         }
//     }
//     vibrate(pulses);
// }

// // EFFECTS: Fade Out
// export const fadeOut = createPattern(vibrateFadeOut);
// function vibrateFadeOut(duration: number) {
//     let pulses: Pattern = [];
//     if (duration < 100) {
//         pulses = duration;
//     } else {
//         const d = duration / 100;
//         for (let i = 1; i <= 10; i++) {
//             pulses.push(i * d);
//             if (i < 10) {
//                 pulses.push((10 - i) * d);
//             }
//         }
//         pulses.reverse();
//     }
//     vibrate(pulses);
// }

// // EFFECTS: notification
// export const notification = createPattern(vibrateNotification);
// function vibrateNotification(duration: number) {
//     const pause = duration / 27;
//     const dot = 2 * pause;
//     const dash = 3 * pause;
//     vibrate([dot, pause, dot, pause, dot, pause * 2, dash, pause, dash, pause * 2, dot, pause, dot, pause, dot]);
// }

// // EFFECTS: heartbeat
// export const heartbeat = createPattern(vibrateHeartbeat);
// function vibrateHeartbeat(duration: number) {
//     const dot = duration / 60;
//     const pause = dot * 2;
//     const dash = dot * 24;
//     vibrate([dot, pause, dash, pause * 2, dash, pause * 2, dot]);
// }

// // EFFECTS: clunk
// export const clunk = createPattern(vibrateClunk);
// function vibrateClunk(duration: number) {
//     const dot = duration * 4 / 22;
//     const pause = dot * 2;
//     const dash = dot / 2 * 5;
//     vibrate([dot, pause, dash]);
// }

// // EFFECTS: PWM
// function vibratePWM(duration: number, on: number, off: number) {
//     const pattern = [on];
//     duration -= on;

//     while (duration > 0) {
//         duration -= off;
//         duration -= on;
//         pattern.push(off);
//         pattern.push(on);
//     }

//     vibrate(pattern);
// }

// export function pwm(patter: Pattern, on: number, off: number) {
//     if (typeof patter === "number") {
//         vibratePWM(patter, on, off);
//     } else {
//         const newVibratePWM = function (duration: number) {
//             vibratePWM(duration, on, off);
//         };
//         executeSequence(patter, newVibratePWM, emptyFunc);
//     }
// }

// // a way to quickly create new PWM intensity functions
// export function createPatternPWM(on, off) {
//     return function (args) {
//         pwm(args, on, off);
//     };
// }
