var application = require("application");
var context = application.android.context;
 
module.exports = {
    showToast: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        toaster.show(context);
    },
    getLocalIpAddress: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getLocalIpAddress(context);
    }
};