var application = require("application");
var context = application.android.context;

var cbFunction = function() {
  console.log('I am the default cb function')
}

android.app.Service.extend('tv.channelhopper.ipsync.toaster.SyncService', {
  onStartCommand: function(intent, flags, startId) {
    setInterval(cbFunction, 5000)
    this.super.onStartCommand(intent, flags, startId)
    return android.app.Service.START_STICKY
  },
  // onCreate: (params) => {
  //   return false
  // },
  onBind: function(intent) {
  }
})
 
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
  changeWifiConfiguration: function(publicIp) {
    var toaster = new tv.channelhopper.ipsync.toaster.Toaster();
    return toaster.changeWifiConfiguration(context, false, null, publicIp);
  },
  changeCb: function(newCb) {
    cbFunction = newCb
  }
};