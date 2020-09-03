const dev = {
  STRIPE_KEY: "pk_test_51HMRHuEaVhLJfdrFF7cgSXaGdlQBh7T6xv4trK0R34l69Owvt8KIRpysrgb1CLt9FSC3u28J9qNBkD2N5nbfMCNA00duvF38WP",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-o4s34l7urpii"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ydg31p848i.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zGfKIDptN",
    APP_CLIENT_ID: "2uab41ejujo2akr8slmun9jp1m",
    IDENTITY_POOL_ID: "us-east-2:993ee47d-7ec6-40cd-aaca-268ab53d9598"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HMRHuEaVhLJfdrFF7cgSXaGdlQBh7T6xv4trK0R34l69Owvt8KIRpysrgb1CLt9FSC3u28J9qNBkD2N5nbfMCNA00duvF38WP",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-3aojytv41p90"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jwtfmmcd77.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_8OGIJ4xow",
    APP_CLIENT_ID: "5p9a531qgg2hkisrgbk7fo6dc5",
    IDENTITY_POOL_ID: "us-east-2:f68b98c3-211c-48b0-8a49-3418de579af9"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};