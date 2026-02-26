function getContactTemplate() {
  const t = translations[currentLang].contact;
  return `
    <div class="contact-container">
        <div class="contact-left">
            <span class="contact-pre-title">${t.preTitle}</span>
            <h2 class="contact-headline">${t.headline}</h2>
            <h3 class="contact-sub-headline">${t.subHeadline}</h3>
            <div class="contact-arrow-container">
               <p class="contact-text">${t.text}</p>
            </div>
        </div>

      <div class="contact-right">
            <form class="contact-form" onsubmit="sendContactEmail(event); return false;">
                
                <div class="input-group">
                    <label class="contact-label" for="name">${t.labelName}</label>
                    <input type="text" id="name" placeholder="${t.phName}" 
                           onblur="validateName()" 
                           onfocus="resetError(this)" 
                           onkeyup="checkFormValidity()" required>
                    <span id="nameError" class="error-msg"></span>
                </div>

                <div class="input-group">
                    <label class="contact-label" for="email">${t.labelEmail}</label>
                    <input type="email" id="email" placeholder="${t.phEmail}" 
                           onblur="validateEmail()" 
                           onfocus="resetError(this)" 
                           onkeyup="checkFormValidity()" required>
                    <span id="emailError" class="error-msg"></span>
                </div>
                <div class="input-group">
                     <label class="contact-label" for="message">${t.labelMessage}</label>
                    <textarea id="message" rows="1" placeholder="${t.phMessage}" 
                              onblur="validateMessage()" 
                              onfocus="resetError(this)" 
                              onkeyup="checkFormValidity()" required></textarea>
                    <span id="messageError" class="error-msg"></span>
                </div>

                <div class="form-footer">
                    <div class="privacy-container">
                        <div class="checkbox-wrapper">
                            <label class="custom-checkbox-label">
                                <input type="checkbox" id="privacyCheckbox" 
                                    onchange="validatePrivacy(); checkFormValidity()" required>
                                <span class="checkmark-box"></span>
                            </label>
                            <span id="privacyError" class="privacy-error-msg"></span>
                        </div>
                        <span class="privacy-text">${t.privacy}</span>
                    </div>
                    <button type="submit" id="sendButton" class="btn btn-marquee contact-btn" disabled>
                        <span>${t.btnSend}</span>
                    </button>
                </div>
            </form>
      </div>
    </div>
    `;
}