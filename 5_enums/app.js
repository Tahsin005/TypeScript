"use strict";
// enum (short for enumeration) is a way to define a set of named constants.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success); // Output: 200
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Right"] = 7] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left); // Output: 6
