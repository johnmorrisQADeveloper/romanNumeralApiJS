/**
 * This method is to take value from the terminal for debugging
 *
 * @returns {{debugger: boolean}}
 */
module.exports = function () {
    const options = process.argv;

    return {
        debugger: (options.indexOf('--printDebug') >= 0)
    }
};