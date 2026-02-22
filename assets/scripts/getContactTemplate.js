function getContactTemplate() {
  return `
    <div class="contact-container">
        <div class="contact-left">
            <span class="contact-pre-title">Contact me</span>
            <h2 class="contact-headline">Let's work<br>together</h2>
            
            <h3 class="contact-sub-headline">Got a problem to solve?</h3>
            
            <div class="contact-arrow-container"><p class="contact-text">Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work. 
               <br><br> Need a Frontend developer? <span class="lets-talk-text">Let's talk!</span></p>
                <!-- You can add an arrow image here if needed, consistent with your design -->
            </div>
        </div>

      <div class="contact-right">
            <form class="contact-form" onsubmit="return false;">
                
                <div class="input-group">
                    <label class="contact-label">What's your name?</label>
                    <input type="text" id="name" placeholder="Your name goes here" required>
                </div>

                <div class="input-group">
                <label class="contact-label">What's your email?</label>
                    <input type="email" id="email" placeholder="youremail@email.com" required>
                </div>

                <div class="input-group">
                     <label class="contact-label">How can I help you?</label>
                    <textarea id="message" rows="1" placeholder="Hello Nikoleta, I am interested in.."></textarea>
                </div>


         <div class="form-footer">
                    <div class="privacy-container">
                        <label class="custom-checkbox-label">
                            <input type="checkbox" id="privacyCheckbox" required onchange="toggleSubmitButton()">
                            <img class="checkmark-box" src ="assets/img/check_box_outline_blank (1).png">
                        </label>
                        <span class="privacy-text">
                    I've read the <a href="#" class="privacy-link">privacy policy</a> and agree to the processing of my data as outlined.
                </span>
                    </div>

            <button type="submit"  id="sendButton" class="btn btn-marquee contact-btn" disabled>
                <span>Say Hello:)</span>
            </button>
        </div>
    </form>
</div>
    </div>
    `;
}
