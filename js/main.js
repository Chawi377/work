const initApp = () => {
  const EMERGENT_WINDOW = document.querySelector(".window");
  const SHADOW_EFFECT = document.querySelector(".shadow-effect");
  const EMAIL_INPUT = document.querySelector("#email");

  document.querySelector("#send-mail").addEventListener("click", () => {
    toggleWindow();
    awaitSendMail();
  });

  const awaitSendMail = () => {
    document.querySelector("#send-mail-btn").addEventListener("click", () => {
      sendMail();
    });
  };

  const sendMail = () => {
    if (emailIsValid()) {
      window.open(`mailto:${EMAIL_INPUT.value}`,'location=no');
      toggleWindow();
    }
  };

  const toggleWindow = () => {
    EMERGENT_WINDOW.classList.toggle("window-active");
    SHADOW_EFFECT.classList.toggle("shadow-active");
  };

  const emergentWindowProperties = () => {
    SHADOW_EFFECT.addEventListener("click", () => {
      toggleWindow();
    });
  };

  const emailIsValid = () => {
    return /[\w\d_.%]+@[\w\d_.%]+\.[\w\d]/.test(EMAIL_INPUT.value);
  };

  emergentWindowProperties();
};

window.addEventListener("DOMContentLoaded", initApp());
