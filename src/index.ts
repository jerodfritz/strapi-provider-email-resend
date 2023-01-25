"use strict";

const {
  Resend
} = require('resend');

module.exports = {
  provider: 'resend',
  name: 'Resend',

  init(providerOptions: any = {}, settings: any = {}) {
    const resend = new Resend(providerOptions.apiKey);

    return {
      send(options) {
        const {
          from,
          to,
          cc,
          bcc,
          replyTo,
          subject,
          text,
          html,
          ...rest
        } = options;

        const data = {
          from: from || settings.defaultFrom,
          to,
          cc,
          bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text,
          html,
          ...rest,
        };

        return resend.sendEmail(data);
      },
    };
  },
};
