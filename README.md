# Password-Encrypt-Cli

Simple CLI Utility to Encrypt and Decrypt Plain Text Password with AES Encryption.  

This allows you to setup an encrypted string on one end that can potentially be decryption on the other end once each have the same key.

Great Utility for your producing environment variables for your microservices. 

## Installation

 ```
 npm install -g password-encrypt-cli
``` 

This will expose a simple command on your CLI.

```
pass
```

## Examples

```
  $ pass encrypt mypassword -k oneWordPass
  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' 

  $ pass decrypt encryptedstring -k oneWordPass
  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' 

```

If your passsword or string has special characters, please use single quotes around the password and phrase/word