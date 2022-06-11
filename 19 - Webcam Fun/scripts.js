const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        console.log(localMediaStream);
        // videoElement.src = URL.createObjectURL(localMediaStream);
        video = srcObject.src(localMediaStream);
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
  }
  getVideo();