$(document).ready(function(){document.addEventListener("deviceready",onDeviceReady,!1);function onDeviceReady(){if(window.StatusBar)window.StatusBar.hide();base_url='http://www.pointone.com.ph/mobile_pos/app';new_address(base_url)}
function new_address(url){var ref=cordova.InAppBrowser.open(url,'_blank','location=no,fullscreen=yes,toolbar=no');ref.addEventListener('loadstart',function(event){});ref.addEventListener('loadstop',function(event){if(event.url.match("mobile/close")){ref.close()}})}})