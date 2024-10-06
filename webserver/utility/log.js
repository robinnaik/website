const log = {
    "info": (location, info) => {
        console.log((new Date()).toUTCString() + " INFO: [" + location + "] " + info)
    },
    "warning": (location, warning) => {
        console.log((new Date()).toUTCString() + " WARNING: [" + location + "] " + warning)
    },
    "error": (location, message, error = {}) => {
        console.log((new Date()).toUTCString() + " ERROR: [" + location + "] " + message)
        console.log("ERROR Message : " + JSON.stringify(error))
    }
}

module.exports = log
