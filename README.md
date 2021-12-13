# my-ftp-live-main
 server ftp
# My ftp Server
## _Yvan Daryl Ndenga Nemeck_

## 🐼 Summary

* [Overview](#overview)
* [How it works](#story)
* [Credits](#credits)

## Overview

The purpose of this project was to create an FTP client and server. The server must be run , same for the client and the client must be able to communicate with the server.

## What is FTP, and What is FTP Server?


FTP (File Transfer Protocol) is as its name suggests a file transferring protocol between two computers, a local computer, and a remote server. FTP servers is a web server that runs on web-servers and uses FTP protocol at the server side to manage file transfers, connections, & users. Some of them come with a modular architecture, security-focused features, and several options designed for the enterprise.

The FTP server allows users to store their files on the server, through FTP, and access it later. The basic features of usable FTP servers are to manage the file transfers, the connections, the rate limits, the user's accounts, user groups, & user permissions
## How it works
>> To Begin the Server and the Client on my project must be run at the same time for it to work
>> You first run the server then you run the client

#### Hi, server

##### Usage

```sh
cd server
```
```sh
npm install -y
```
```sh
npm run dev
```
#### Yo, client

##### Usage
* To run the server he must add the following to the an appropriate terminal

```sh
cd client
```
```sh
npm install -y
```
```sh
npm run dev
```


#### Commands

The client handle the following commands:

* `USER <username>`: check if the user exist
* `PASS <password>`: authenticate the user with a password
* `LIST`: list the current directory of the server
* `CWD <directory>`: change the current directory of the server
* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
* `PWD`: display the name of the current directory of the server
* `HELP`: send helpful information to the client
* `QUIT`: close the connection and stop the program



## Credits

 by **_Yvan Ndenga Nemeck_ Bachelor CDGP group 1 in Efrei in Paris**.
