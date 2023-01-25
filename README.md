# strapi-provider-email-resend
A email provider for Strapi for Resend [https://resend.com/]

## Installation
In the root directory of your project, run:

```bash
npm i strapi-provider-email-resend
```

## Configuration
In your `config/plugins.js`, set the following:

```javascript
module.exports = ({ env }) => ({
  ...
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'me@example.com',
        defaultReplyTo: 'me@example.com',
      },
    }
  },    
});
```
