module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("deoceit0j"),
          api_key: env("555343445268427"),
          api_secret: env("_TgL7Aqobf4hvPyy_83sNh2nC6I"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
  