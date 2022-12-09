# wecrypt (ISP_Project_Module_IE3062)

IT20234270 - Rajapaksha K.R.M.U.S

IT20239770 - Kumari K.A.S.M

This includes our ISP project on Image Encryption

There have been several suggested picture encryption techniques, and each one has its advantages and disadvantages. Our project idea is to develop a CLI that converts png, jpg, and jpeg photos into gibberish and gives you the key to decrypt it afterwards gives you total control over your images. The images must be encrypted in a way that prevents unauthorized individuals from accessing them via the internet without a secure key. For the purpose of preventing illegal access to the contents of encrypted photographs, we proposed a brand-new, safe, and reliable encryption method in this article. The primary characteristics of the cryptography algorithm discussed in this article include the combination of logical and visual cryptography, the ability to encrypt a secret image in stages, the ability to alter the physical structure of the secret image, the ability to make the resulting keys and encrypted image unique after the cryptography process, and more

A CLI that encrypts and decrypts png, jpg, jpeg images to a gibberish image and provides you the key to unlock it later so that you have the complete control of your images.


## Tech-Stack

![Node](https://img.shields.io/badge/NodeJS-05122A?style=for-the-badge&logo=node.js)&nbsp;

## Preview

<a href="https://ibb.co/C0qF3fJ"><img src="https://i.ibb.co/5cdVgPY/Screenshot-2021-12-16-at-2-11-16-PM.png" alt="Screenshot-2021-12-16-at-2-11-16-PM" border="0"></a>

## Installation

```sh
npm i -g wecrypt
```

## Usage

```sh
wecrypt <command> [option]
```

or run it directly using npx

```sh
npx wecrypt <command> [option]
```

### commands

```sh
help  #prints help info
```

### options

```sh
  -e, --encrypt              # The image to encrypt
  -d, --decrypt              # The image to decrypt
  -c, --clear                # Clear the console Default: false
  --noClear                  # Don't clear the console Default: true
  -v, --version              # Print CLI version Default: false
  -k, --key                  # The key to use for decryption Default: false
  -i, --outputImageFileName  # The output image
  -p, --outputKeyFileName    # The output key
```

## examples

Command

### For encrypting an image myImage.png to encryptedImage.png and saving the key to key.txt

```sh
wecrypt -e myImage.png -i encryptedImageName.png -p keyFile.txt
```

output

```sh
 wecrypt  v1.0.1 by UnS
An image encryption node-js cli

✔ Image read successfully
✔ Output image file name is valid
✔ Output key file name is valid
✔ Image data read successfully
✔ Key generated successfully
✔ Image encrypted successfully
✔ Image saved successfully
✔ Key saved successfully

✔  Image encrypted successfully  Image encrypted successfully:
                                  Encrypted image: encryptedImageName.png
                                  Key: keyFile.txt

```

### For decrypting an image encryptedImage.png with its key key.txt to decryptedImage.png

```sh
wecrypt -d encryptedImage.png -k key.txt -i decryptedImage.png
```

output

```sh
imcrypt  v0.0.1 by UnS
An image encryption node-js cli

✔ Image read successfully
✔ Key read successfully
✔ Decryption successful
✔ Image saved successfully

✔  Success  Image decrypted successfully

                        Decrypted Image: decryptedImage.png

```

## Limitations

While encryption and decryption is perfect on the png images. On jpg and jpeg, the operation is not perfect. Jpg and jpeg images are lossy and while encryption and decryption, a few pixels values are changed. The decrypted image is however, very similar to the original image but with a few pixels changed.
