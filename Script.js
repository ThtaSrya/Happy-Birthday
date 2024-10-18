function replayAnimation() {
    const birthdayMessage = document.querySelector('.birthday-message');
    birthdayMessage.style.animation = 'none';
    setTimeout(() => {
      birthdayMessage.style.animation = '';
    }, 10);
  }
  