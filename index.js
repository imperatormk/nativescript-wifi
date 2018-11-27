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
    },
    getLocalIpv4A: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getLocalIpv4A();
    },
    getLocalIpV6: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getLocalIpV6();
    },
    getDeviceSubnetMaskString: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getDeviceSubnetMaskString(context);
    },
    getDeviceGatewayString: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getDeviceGatewayString(context);
    },
    getDnsAddresses: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getDnsAddresses(context);
    },
    getConnectionData: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.getConnectionData(context);
    },
    changeWifiConfiguration: function() {
        var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
        return toaster.changeWifiConfiguration(context, false, null);
    }
};