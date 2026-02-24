function getContactTemplate() {
  return `
    <div class="contact-container">
        <div class="contact-left">
            <span class="contact-pre-title">Contact me</span>
            <h2 class="contact-headline">Let's work<br>together</h2>
            <h3 class="contact-sub-headline">Got a problem to solve?</h3>
            <div class="contact-arrow-container">
               <p class="contact-text">Encourage people to contact you and describe what role you are interested in. Show that you’ll add value to their projects through your work. 

Need a Frontend developer? Let’s talk!<br><br>Need a Frontend developer? <span class="lets-talk-text">Let's talk!</span></p>
            </div>
        </div>

      <div class="contact-right">
            <form class="contact-form" onsubmit="sendContactEmail(event); return false;">
                
                <!-- Name -->
                <div class="input-group">
                    <label class="contact-label" for="name">What's your name?</label>
                    <input type="text" id="name" placeholder="Your name goes here" 
                           onblur="validateName()" 
                           onfocus="resetError(this)" 
                           onkeyup="checkFormValidity()" required>
                    <span id="nameError" class="error-msg"></span>
                </div>

                <!-- Email -->
                <div class="input-group">
                    <label class="contact-label" for="email">What's your email?</label>
                    <input type="email" id="email" placeholder="youremail@email.com" 
                           onblur="validateEmail()" 
                           onfocus="resetError(this)" 
                           onkeyup="checkFormValidity()" required>
                    <span id="emailError" class="error-msg"></span>
                </div>
                <div class="input-group">
                     <label class="contact-label" for="message">How can I help you?</label>
                    <textarea id="message" rows="1" placeholder="Hello Nikoleta, I am interested in.." 
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

                    <span class="privacy-text">
                       I have read and agree to the <a href="#" class="privacy-link">privacy policy</a>.
                    </span>
                </div>
                    <button type="submit" id="sendButton" class="btn btn-marquee contact-btn" disabled>
                        <span>Say Hello :)</span>
                    </button>
                </div>
            </form>
      </div>
    </div>
    `;
}
