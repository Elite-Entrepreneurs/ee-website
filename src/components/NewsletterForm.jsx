import { useState } from 'react';

/**
 * The Beehiiv newsletter form used in the nav dropdown, the Subscribe section and the footer.
 * The original posts to Beehiiv; there is no backend here, so submitting only switches to
 * Webflow's built-in success state locally.
 */
export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`footer1_form-block w-form${submitted ? ' is-submitted' : ''}`}>
      <form name="wf-form-Newsletter-Beehiiv-Form" data-name="Newsletter Beehiiv Form" method="get" className="footer1_form" onSubmit={onSubmit}>
        <input className="form_input-3 w-input" maxLength="256" name="Email" data-name="Email" placeholder="Enter Your Email _" type="email" required />
        <input type="submit" data-wait="Please wait..." className="button stretch blue w-button" value="Subscribe" />
        {/*
          On the live site Cloudflare Turnstile injects an empty <div><div/></div> here after load.
          It renders nothing but, as an extra flex item, adds one gap to the form layout.
          Kept as an empty node (no captcha) so spacing matches the original.
        */}
        <div aria-hidden="true">
          <div />
        </div>
      </form>
      <div className="form_message-success-wrapper-2 w-form-done">
        <div className="form_message-success">
          <img src="/assets/images/icon-check.svg" loading="lazy" alt="" />
          <div>Thank You for subscribing!</div>
        </div>
      </div>
      <div className="form_message-error-wrapper w-form-fail">
        <div className="form_message-error">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  );
}
