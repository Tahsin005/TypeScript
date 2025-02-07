// enum (short for enumeration) is a way to define a set of named constants.
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

console.log(StatusCode.Success); // Output: 200

enum Direction {
    Up,      // 0
    Down = 5, // 5
    Left,    // 6
    Right,   // 7
}

console.log(Direction.Left); // Output: 6
