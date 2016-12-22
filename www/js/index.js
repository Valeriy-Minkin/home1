/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    

};

app.initialize();

        
        var meta = document.createElement("meta");
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', 'initial-scale=' + (1 / window.devicePixelRatio) + ',user-scalable=no' + ',');
            document.getElementsByTagName('head')[0].appendChild(meta);

            document.addEventListener('touchmove', function (e) {
                 e.preventDefault();
                 window.scroll(0, 0);
                 return false;
             }, false);
            
            document.body.onload = loaded;
document.getElementById('LoginButton').onclick = TryLogin;
            
                        function loaded() {
                //code
              if(document.getElementById('fullscreen1'))
              {
                  alert(document.getElementById('fullscreen1').width+' '+document.getElementById('fullscreen1').clientWidth+' '+document.getElementById('fullscreen1').offsetWidth);
              }
            if (screen.width<500) {
                document.body.style.fontSize= "4px";
                document.getElementById('TableCell').style.marginTop = "-"+(document.getElementById('TableCell').offsetHeight/2)+"px";
                //code
            }
            else{
                document.getElementById('TableCell').style.marginTop = "-"+(document.getElementById('TableCell').offsetHeight/2)+"px";
            }
            StatusBar.hide();
            }

function TryLogin()
{
    location.href = 'main.html';
}
                            
