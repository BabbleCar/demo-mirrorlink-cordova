document.addEventListener("deviceready", onDeviceReady, false);

  		function onDeviceReady() {
  		    var ml = window.cordova.plugins.MirrorLink;

  		    ml.enable(function(){
  		        console.log("Conection api ok");
  		    },function(){
  		        alert("error connection");
  		    });

            // 4.4
  		    var is_onCertificationStatusChanged = false;
  		    var onCertificationStatusChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt11").addEventListener("click", function(){
                is_onCertificationStatusChanged = !is_onCertificationStatusChanged;
                if(is_onCertificationStatusChanged) {
                    ml.certification.onCertificationStatusChanged(onCertificationStatusChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on CertificationStatusChanged";
                } else {
                    ml.certification.offCertificationStatusChanged(onCertificationStatusChanged);
                    this.className="noactive";
                    this.innerHTML="off CertificationStatusChanged";
                }
            });
  		    //4.3.1  getApplicationCertificationStatus
  		    document.getElementById("bt12").addEventListener("click", function(){
                ml.certification.getApplicationCertificationStatus(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });
            //4.3.2  getApplicationCertifyingEntities
            document.getElementById("bt13").addEventListener("click", function(){
                ml.certification.getApplicationCertifyingEntities(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });
            //4.3.3  getApplicationCertificationInformation
            document.getElementById("bt14").addEventListener("click", function(){
                var entity = document.getElementById("in14").value;
                ml.certification.getApplicationCertificationInformation(entity, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });


            //4.4.1  isMirrorLinkSessionEstablished
            document.getElementById("bt21").addEventListener("click", function(){
                ml.connection.isMirrorLinkSessionEstablished(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });
            //4.4.2 onMirrorLinkSessionChanged
            var is_onMirrorLinkSessionChanged = false;
            var onMirrorLinkSessionChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt22").addEventListener("click", function(){
                is_onMirrorLinkSessionChanged = !is_onMirrorLinkSessionChanged;
                if(is_onMirrorLinkSessionChanged) {
                    ml.connection.onMirrorLinkSessionChanged(onMirrorLinkSessionChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onMirrorLinkSessionChanged";
                } else {
                    ml.connection.offMirrorLinkSessionChanged(onMirrorLinkSessionChanged);
                    this.className="noactive";
                    this.innerHTML="off onMirrorLinkSessionChanged";
                }
            });
            //4.4.3  getAudioConnections
            document.getElementById("bt23").addEventListener("click", function(){
                ml.connection.getAudioConnections(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });
            //4.4.4 onAudioConnectionsChanged
            var is_onAudioConnectionsChanged = false;
            var onAudioConnectionsChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt24").addEventListener("click", function(){
                is_onAudioConnectionsChanged = !is_onAudioConnectionsChanged;
                if(is_onAudioConnectionsChanged) {
                    ml.connection.onAudioConnectionsChanged(onAudioConnectionsChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onAudioConnectionsChanged";
                } else {
                    ml.connection.offAudioConnectionsChanged(onAudioConnectionsChanged);
                    this.className="noactive";
                    this.innerHTML="off onAudioConnectionsChanged";
                }
            });
            //4.4.5  getAudioConnections
            document.getElementById("bt25").addEventListener("click", function(){
                ml.connection.getRemoteDisplayConnections(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });
            //4.4.6 onRemoteDisplayConnectionChanged
            var is_onRemoteDisplayConnectionChanged = false;
            var onRemoteDisplayConnectionChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt26").addEventListener("click", function(){
                is_onRemoteDisplayConnectionChanged = !is_onRemoteDisplayConnectionChanged;
                if(is_onRemoteDisplayConnectionChanged) {
                    ml.connection.onRemoteDisplayConnectionChanged(onRemoteDisplayConnectionChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onRemoteDisplayConnectionChanged";
                } else {
                    ml.connection.offRemoteDisplayConnectionChanged(onRemoteDisplayConnectionChanged);
                    this.className="noactive";
                    this.innerHTML="off onRemoteDisplayConnectionChanged";
                }
            });

            // 4.9.1 setFramebufferContextInformation
            document.getElementById("bt31").addEventListener("click", function(){
                var content = JSON.parse(document.getElementById("ta31").value);
                var handleBlocking = (document.getElementById('ck31').checked) ? true:false;
                ml.context.setFramebufferContextInformation(content, handleBlocking, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

             //4.9.2 onFramebufferBlocked
            var is_onFramebufferBlocked = false;
            var onFramebufferBlocked = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt32").addEventListener("click", function(){
                is_onRemoteDisplayConnectionChanged = !is_onRemoteDisplayConnectionChanged;
                if(is_onRemoteDisplayConnectionChanged) {
                    ml.context.onFramebufferBlocked(onFramebufferBlocked, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onFramebufferBlocked";
                } else {
                    ml.context.offFramebufferBlocked(onFramebufferBlocked);
                    this.className="noactive";
                    this.innerHTML="off onFramebufferBlocked";
                }
            });

            // 4.9.3 setAudioContextInformation
            document.getElementById("bt33").addEventListener("click", function(){
                var audioContent = (document.getElementById('ck33a').checked) ? true:false;
                var audioCategories = JSON.parse(document.getElementById("ta33").value);
                var handleBlocking = (document.getElementById('ck33b').checked) ? true:false;
                ml.context.setAudioContextInformation(audioContent, audioCategories, handleBlocking, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.9.4 onAudioBlocked
            var is_onAudioBlocked = false;
            var onAudioBlocked = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt34").addEventListener("click", function(){
                is_onAudioBlocked = !is_onAudioBlocked;
                if(is_onAudioBlocked) {
                    ml.context.onAudioBlocked(onAudioBlocked, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onAudioBlocked";
                } else {
                    ml.context.offAudioBlocked(onAudioBlocked);
                    this.className="noactive";
                    this.innerHTML="off onAudioBlocked";
                }
            });

            //4.9.5 onFramebufferUnblocked
            var is_onFramebufferUnblocked = false;
            var onFramebufferUnblocked = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt35").addEventListener("click", function(){
                is_onFramebufferUnblocked = !is_onFramebufferUnblocked;
                if(is_onFramebufferUnblocked) {
                    ml.context.onFramebufferUnblocked(onFramebufferUnblocked, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onFramebufferUnblocked";
                } else {
                    ml.context.offFramebufferUnblocked(onFramebufferUnblocked);
                    this.className="noactive";
                    this.innerHTML="off onFramebufferUnblocked";
                }
            });

            //4.9.6 onAudioUnblocked
            var is_onAudioUnblocked = false;
            var onAudioUnblocked = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt36").addEventListener("click", function(){
                is_onAudioUnblocked = !is_onAudioUnblocked;
                if(is_onAudioUnblocked) {
                    ml.context.onAudioUnblocked(onAudioUnblocked, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onAudioUnblocked";
                } else {
                    ml.context.offAudioUnblocked(onAudioUnblocked);
                    this.className="noactive";
                    this.innerHTML="off onAudioUnblocked";
                }
            });


            // 4.11.1 getAvailableServices
            document.getElementById("bt41").addEventListener("click", function(){
                ml.dataservices.getAvailableServices(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.11.2 onAvailableServicesChanged
            var is_onAvailableServicesChanged = false;
            var onAvailableServicesChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt42").addEventListener("click", function(){
                is_onAvailableServicesChanged = !is_onAvailableServicesChanged;
                if(is_onAvailableServicesChanged) {
                    ml.dataservices.onAvailableServicesChanged(onAvailableServicesChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onAvailableServicesChanged";
                } else {
                    ml.dataservices.offAvailableServicesChanged(onAvailableServicesChanged);
                    this.className="noactive";
                    this.innerHTML="off onAvailableServicesChanged";
                }
            });

            // 4.11.3 registerToService
            document.getElementById("bt43").addEventListener("click", function(){
                var serviceId = document.getElementById("in43a").value;
                var versionMajor = document.getElementById("in143b").value;
                var versionMinor = document.getElementById("in143c").value;
                ml.dataservices.registerToService(serviceId, versionMajor, versionMinor, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.11.4 onRegisterForService
            var is_onRegisterForService = false;
            var onRegisterForService = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt44").addEventListener("click", function(){
                is_onRegisterForService = !is_onRegisterForService;
                if(is_onRegisterForService) {
                    ml.dataservices.onRegisterForService(onRegisterForService, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onRegisterForService";
                } else {
                    ml.dataservices.offRegisterForService(onRegisterForService);
                    this.className="noactive";
                    this.innerHTML="off onRegisterForService";
                }
            });

            // 4.11.5 unregisterFromService
            document.getElementById("bt45").addEventListener("click", function(){
                var serviceId = document.getElementById("in45a").value;
                ml.dataservices.unregisterFromService(serviceId, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.11.6 subscribeObject
            document.getElementById("bt46").addEventListener("click", function(){
                var serviceId = document.getElementById("in46a").value;
                var objectId = document.getElementById("in146b").value;
                ml.dataservices.subscribeObject(serviceId, objectId, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.11.7 onSubscribeResponse
            var is_onSubscribeResponse = false;
            var onSubscribeResponse = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt47").addEventListener("click", function(){
                is_onSubscribeResponse = !is_onSubscribeResponse;
                if(is_onSubscribeResponse) {
                    ml.dataservices.onSubscribeResponse(onSubscribeResponse, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onRegisterForService";
                } else {
                    ml.dataservices.offSubscribeResponse(onSubscribeResponse);
                    this.className="noactive";
                    this.innerHTML="off onSubscribeResponse";
                }
            });

            // 4.11.8 unsubscribeObject
            document.getElementById("bt48").addEventListener("click", function(){
                var serviceId = document.getElementById("in48a").value;
                var objectId = document.getElementById("in148b").value;
                ml.dataservices.unsubscribeObject(serviceId, objectId, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.11.9 setObject
            document.getElementById("bt49").addEventListener("click", function(){
                var serviceId = document.getElementById("in49a").value;
                var objectId = document.getElementById("in149b").value;
                var object = JSON.parse(document.getElementById("ta49a").value);
                ml.dataservices.setObject(serviceId, objectId, object, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.11.10 onSetDataObjectResponse
            var is_onSetDataObjectResponse = false;
            var onSetDataObjectResponse = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt410").addEventListener("click", function(){
                is_onSetDataObjectResponse = !is_onSetDataObjectResponse;
                if(is_onSetDataObjectResponse) {
                    ml.dataservices.onSetDataObjectResponse(onSetDataObjectResponse, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onSetDataObjectResponse";
                } else {
                    ml.dataservices.offSetDataObjectResponse(onSetDataObjectResponse);
                    this.className="noactive";
                    this.innerHTML="off onSetDataObjectResponse";
                }
            });

            // 4.11.11 getObject
            document.getElementById("bt411").addEventListener("click", function(){
                var serviceId = document.getElementById("in411a").value;
                var objectId = document.getElementById("in1411b").value;
                ml.dataservices.getObject(serviceId, objectId, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.11.12 onGetDataObjectResponse
            var is_onGetDataObjectResponse = false;
            var onGetDataObjectResponse = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt411").addEventListener("click", function(){
                is_onGetDataObjectResponse = !is_onGetDataObjectResponse;
                if(is_onGetDataObjectResponse) {
                    ml.dataservices.onGetDataObjectResponse(onGetDataObjectResponse, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onGetDataObjectResponse";
                } else {
                    ml.dataservices.offGetDataObjectResponse(onGetDataObjectResponse);
                    this.className="noactive";
                    this.innerHTML="off onGetDataObjectResponse";
                }
            });


            /* DATA INFO */

            // 4.2.1 getMirrorLinkSessionVersionMajor
            document.getElementById("bt51").addEventListener("click", function(){
                ml.deviceinfo.getMirrorLinkSessionVersionMajor( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

             // 4.2.1 getMirrorLinkSessionVersionMinor
            document.getElementById("bt52").addEventListener("click", function(){
                ml.deviceinfo.getMirrorLinkSessionVersionMinor( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.2.2 getMirrorLinkClientInformation
            document.getElementById("bt53").addEventListener("click", function(){
                ml.deviceinfo.getMirrorLinkClientInformation( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            //4.2.4 onDeviceInfoChanged
            var is_onDeviceInfoChanged = false;
            var onDeviceInfoChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt54").addEventListener("click", function(){
                is_onDeviceInfoChanged = !is_onDeviceInfoChanged;
                if(is_onDeviceInfoChanged) {
                    ml.dataservices.onDeviceInfoChanged(onDeviceInfoChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onDeviceInfoChanged";
                } else {
                    ml.dataservices.offDeviceInfoChanged(onDeviceInfoChanged);
                    this.className="noactive";
                    this.innerHTML="off onDeviceInfoChanged";
                }
            });

            // 4.2.5 getServerVirtualKeyboardSupport
            document.getElementById("bt55").addEventListener("click", function(){
                ml.deviceinfo.getServerVirtualKeyboardSupport( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });




            /* DEVICE STATUS */


            // 4.10.1 isInDriveMode
            document.getElementById("bt61").addEventListener("click", function(){
                ml.devicestatus.isInDriveMode( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.10.2 onDriveModeChange
            var is_onDriveModeChange = false;
            var onDriveModeChange = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt62").addEventListener("click", function(){
                is_onDriveModeChange = !is_onDriveModeChange;
                if(is_onDriveModeChange) {
                    ml.devicestatus.onDriveModeChange(onDriveModeChange, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onDriveModeChange";
                } else {
                    ml.devicestatus.offDriveModeChange(onDriveModeChange);
                    this.className="noactive";
                    this.innerHTML="off onDriveModeChange";
                }
            });

            // 4.10.3 isInDriveMode
            document.getElementById("bt63").addEventListener("click", function(){
                ml.devicestatus.isInNightMode( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.10.4 onNightModeChanged
            var is_onNightModeChanged = false;
            var onNightModeChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt64").addEventListener("click", function(){
                is_onNightModeChanged = !is_onNightModeChanged;
                if(is_onNightModeChanged) {
                    ml.devicestatus.onNightModeChanged(onNightModeChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onNightModeChanged";
                } else {
                    ml.devicestatus.offNightModeChanged(onNightModeChanged);
                    this.className="noactive";
                    this.innerHTML="off onNightModeChanged";
                }
            });

            // 4.10.5 isMicrophoneOn
            document.getElementById("bt65").addEventListener("click", function(){
                ml.devicestatus.isMicrophoneOn( function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.10.6 onMicrophoneStatusChanged
            var is_onMicrophoneStatusChanged = false;
            var onMicrophoneStatusChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt66").addEventListener("click", function(){
                is_onMicrophoneStatusChanged = !is_onMicrophoneStatusChanged;
                if(is_onMicrophoneStatusChanged) {
                    ml.devicestatus.onMicrophoneStatusChanged(onMicrophoneStatusChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onMicrophoneStatusChanged";
                } else {
                    ml.devicestatus.offMicrophoneStatusChanged(onMicrophoneStatusChanged);
                    this.className="noactive";
                    this.innerHTML="off onMicrophoneStatusChanged";
                }
            });

            // 4.10.7 setMicrophoneOpen
            document.getElementById("bt67").addEventListener("click", function(){
                var micInput = document.getElementById("in67a").value;
                var voiceInput = document.getElementById("in67b").value;
                ml.devicestatus.setMicrophoneOpen(micInput, voiceInput, function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });


            /* DISPLAY */

            // 4.5.1 getDisplayConfiguration
            document.getElementById("bt71").addEventListener("click", function(){
                ml.display.getDisplayConfiguration(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.5.2 onMicrophoneStatusChanged
            var is_onDisplayConfigurationChanged = false;
            var onDisplayConfigurationChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt72").addEventListener("click", function(){
                is_onDisplayConfigurationChanged = !is_onDisplayConfigurationChanged;
                if(is_onDisplayConfigurationChanged) {
                    ml.display.onDisplayConfigurationChanged(onDisplayConfigurationChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onDisplayConfigurationChanged";
                } else {
                    ml.devicestatus.offDisplayConfigurationChanged(onDisplayConfigurationChanged);
                    this.className="noactive";
                    this.innerHTML="off onDisplayConfigurationChanged";
                }
            });

            // 4.5.3 getClientPixelFormat
            document.getElementById("bt73").addEventListener("click", function(){
                ml.display.getClientPixelFormat(function(sucess) {
                    alert(JSON.stringify(sucess));
                    console.log(JSON.stringify(sucess));
                }, function(error) {
                    alert(error);
                });
            });

            // 4.5.4 onPixelFormatChanged
            var is_onPixelFormatChanged = false;
            var onPixelFormatChanged = function(sucess) {alert(JSON.stringify(sucess));console.log(JSON.stringify(sucess));};
            document.getElementById("bt74").addEventListener("click", function(){
                is_onPixelFormatChanged = !is_onPixelFormatChanged;
                if(is_onPixelFormatChanged) {
                    ml.display.onPixelFormatChanged(onPixelFormatChanged, function(error) {alert(error);});
                    this.className="active";
                    this.innerHTML="on onPixelFormatChanged";
                } else {
                    ml.devicestatus.offPixelFormatChanged(onPixelFormatChanged);
                    this.className="noactive";
                    this.innerHTML="off onPixelFormatChanged";
                }
            });



 	    };
