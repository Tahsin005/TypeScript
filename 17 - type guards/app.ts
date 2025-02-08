// type guards -> type narrowing
function abcd(arg: string | number) {
    if (typeof arg == 'number') {
        return "number";
    } else if (typeof arg == 'string') {
        return "string";
    } else {
        throw new Error("pagal ho gaya hai kya fraaaands")
    }
}

// typeof instanceof
class TvErRemote{
    switchTvOff() {
        console.log("TV turned off");
    }
}

class CarErRemote{
    switchCarOff() {
        console.log("Car turned off");
    }
}

const tv = new TvErRemote();
const car = new CarErRemote();

function switchOffKor(remote: TvErRemote | CarErRemote) {
    if (remote instanceof TvErRemote) {
        remote.switchTvOff();
    } else if (remote instanceof CarErRemote) {
        remote.switchCarOff();
    }
}

switchOffKor(tv);
switchOffKor(car);