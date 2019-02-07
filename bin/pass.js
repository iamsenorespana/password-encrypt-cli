#!/usr/bin/env node
'use script'
const CryptoJS = require('crypto-js');
const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');

 
program
  .version('0.1.17', '-v, --version')
  .usage('encrypt|decrypt <password> <options>');
  

program
  .command('encrypt <password>')
  .description('Encrypt a plain text password')
  .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (password, options) {
    debug('encrypt command');
    if( options.key == undefined ){
      console.log();
      // console.log('  -k, --key option is required');
      
      console.log('  ');
      process.exit(1);
    } else {
      let ciphertext = CryptoJS.AES.encrypt(password,options.key);
      console.log();
      console.log(' Encrypted Password: ' + ciphertext);
      console.log();
    }
    // console.log( password );
    // console.log( options.key );
 
  });

program
  .command( 'decrypt <password>')
  .description('Decrypt a previously encrypted password')
  .option('-k, --key <string>', 'String Key to Use')
  .action(function (password, options) {
    debug('decrypt command');
    console.log( password );
    console.log( options.key );
    if( options.key == undefined ){
      console.log();
      console.log('  -k, --key option is required');
      console.log('  ');
      process.exit(1);
    } else {
      let bytes = CryptoJS.AES.decrypt(password,options.key);
      let plaintext = bytes.toString(CryptoJS.enc.Utf8);
      console.log();
      if (!plaintext.length) {
        console.log(colors.red('Invalid Secret Key: '));
      } else {
        console.log(' Plain Text Decrypted Password: ' + plaintext);
      }
      
      console.log();
    }
     
  })
 
program.on('--help', function(){
  console.log();
  console.log('Examples:');
  console.log('');
  console.log('  $ pass encrypt mypassword -k oneWordPass');
  console.log("  $ pass encrypt mypassword -k 'Phrase to encrypt words' ");
  console.log('');
  console.log('  $ pass decrypt encryptedstring -k oneWordPass');
  console.log("  $ pass decrypt encryptedstring -k 'Phrase to encrypt words' ");
  console.log('');
});

program.parse(process.argv);

//console.log( program.args );
if (!program.args.length) program.help();

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);