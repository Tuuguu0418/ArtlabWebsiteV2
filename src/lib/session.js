import { jwtVerify, importSPKI } from "jose";

const publicKeyPem = `-----BEGIN PUBLIC KEY-----
<Your-RSA-Public-Key>
-----END PUBLIC KEY-----`;

let publicKey;

const getPublicKey = async () => {
  if (!publicKey) {
    // Import the key in a way that works with Edge runtime
    publicKey = await importSPKI(publicKeyPem, "RS256");
  }
  return publicKey;
};

export const decrypt = async (token) => {
  try {
    const key = await getPublicKey();
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["RS256"],
    });
    return payload;
  } catch (error) {
    console.log(`Token decryption failed: ${error.message}`);
    return null;
  }
};
