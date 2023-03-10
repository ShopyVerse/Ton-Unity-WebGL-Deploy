let options =
{
    // Pass your App ID here.
    appId: '23cb8370880e4e819e1e5f4e24efa012',
    // Set the channel name.
    channel: 'abc',
    // Pass your temp token here.
    token: '',
    // Set the user ID.
    uid: Math.floor(Math.random() * 100000) + 1,
    // Set token expire time.
    ExpireTime: 7200,
    // The base URL to your token server. For example, https://app-name.herokuapp.com".
    serverUrl: 'https://agora-token-service-production-ec1d.up.railway.app',
    corsUrl: 'https://cors.up.railway.app/'
   
};

let channelParameters =
{
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold the remote user id.
    remoteUid: null,
};

var agoraEngine = null;

/*
var muteBool = false;

 var button = document.getElementById("tf");
button.addEventListener("click", toggleTf);

function toggleTf() {
    muteBool = !muteBool;
    button.innerHTML = muteBool;
}

 */

const fetchToken = async () => {
   var role;
   if(options.role=='Broadcaster')
   {
       role=1;
   }
   else
   {
       role=2;
   }
   return new Promise(function (resolve)
   {
       axios.get(options.corsUrl+options.serverUrl+'/rtc/'+options.channel+'/'+role+'/uid/'+options.uid+'/?expiry='+ options.ExpireTime)

       .then(
           response =>
           {
               console.log(response.data.rtcToken);
               resolve(response.data.rtcToken);

               options.token = response.data.rtcToken;
               console.warn(options.token);
           })
           .catch(error =>
               {
                   console.log(error);
               });
   });
}

const joinChannel = async () => {

    await fetchToken();

    console.log("Hello wordl");
    // Join a channel.
    await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
    showMessage("Joined channel: " + options.channel);
    // Create a local audio track from the microphone audio.
    channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Publish the local audio track in the channel.
    await agoraEngine.publish(channelParameters.localAudioTrack);
    console.log("Publish success!");
}

async function leaveChannel() {
    // Destroy the local audio track.
    channelParameters.localAudioTrack.close();
    // Leave the channel
    await agoraEngine.leave();
    console.log("You left the channel");
    // Refresh the page for reuse
    //window.location.reload();
}

async function changeMuteState(muteBool) {

    if (muteBool == true) {
        // Mute the local audio.
        channelParameters.localAudioTrack.setEnabled(false);
        // Update the button text.
        //document.getElementById(`muteAudio`).innerHTML = "Unmute Audio";
    }
    else {
        // Unmute the local audio.
        channelParameters.localAudioTrack.setEnabled(true);
        // Update the button text.
        //document.getElementById(`muteAudio`).innerHTML = "Mute Audio";
    }
}

async function startBasicCall() {
    // Create an instance of the Agora Engine
    agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

/*     document.getElementById("join").onclick = joinChannel;
    document.getElementById('muteAudio').addEventListener("click", function () { changeMuteState(muteBool); });
 */

    AgoraRTC.onAutoplayFailed = () => {
        // Create button for the user interaction.
        const btn = document.createElement("button");
        // Set the button text.
        btn.innerText = "Click me to resume playback";
        // Remove the button when onClick event occurs.
        btn.onClick = () => {
            btn.remove();
        };
        // Append the button to the UI.
        document.body.append(btn);
    }

    // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
    agoraEngine.on("user-published", async (user, mediaType) => {
        // Subscribe to the remote user when the SDK triggers the "user-published" event.
        await agoraEngine.subscribe(user, mediaType);
        console.log("subscribe success");

        // Subscribe and play the remote audio track.
        if (mediaType == "audio") {
            channelParameters.remoteUid = user.uid;
            // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
            channelParameters.remoteAudioTrack = user.audioTrack;
            // Play the remote audio track. 
            channelParameters.remoteAudioTrack.play();
            showMessage("Remote user connected: " + user.uid);
        }

        // Listen for the "user-unpublished" event.
        agoraEngine.on("user-unpublished", user => {
            console.log(user.uid + "has left the channel");
            showMessage("Remote user has left the channel");
        });
    });

    // Set an event listener on the range slider.
    /* document.getElementById("localAudioVolume").addEventListener("change", function (evt) {
        console.log("Volume of local audio :" + evt.target.value);
        // Set the local audio volume.
        channelParameters.localAudioTrack.setVolume(parseInt(evt.target.value));
    });
    // Set an event listener on the range slider.
    document.getElementById("remoteAudioVolume").addEventListener("change", function (evt) {
        console.log("Volume of remote audio :" + evt.target.value);
        // Set the remote audio volume.
        channelParameters.remoteAudioTrack.setVolume(parseInt(evt.target.value));
    }); */
}

function showMessage(text) {
    /* document.getElementById("message").textContent = text; */
    console.warn(text)
}


startBasicCall();
