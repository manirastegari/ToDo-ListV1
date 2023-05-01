//jshint esversion:6

exports.getDate = function() {

const today = new Date();

const option = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-US", option);

}
// module.exports.getDay = function() {
exports.getDay = function() {
    
    const today = new Date();

    const options  = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", option);
}