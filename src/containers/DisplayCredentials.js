import React from "react";

const DisplayCredentials = ({ cred }) => {
  console.log(cred);
  const { givenName, familyName } = cred.credentialSubject.data;
  const { documentType } =
    cred.credentialSubject.data.hasIDDocument.hasIDDocument;

  return (
    <>
      <p>
        <strong>Given Name:</strong> {givenName}
      </p>
    </>
  );
};

export default DisplayCredentials;
