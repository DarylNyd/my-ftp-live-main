import { createServer } from "net";
let username = ''
let password = ''

import fs from 'fs';

export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {

        case "HELP":
            socket.write(`215 * USER <username>: check if the user exist
            * PASS <password>: authenticate the user with a password
            * LIST: list the current directory of the server
            * CWD <directory>: change the current directory of the server
            * RETR <filename>: transfer a copy of the file _FILE_ from the server to the client
            * STOR <filename>: transfer a copy of the file _FILE_ from the client to the server
            * PWD: display the name of the current directory of the server
            * HELP: send helpful information to the client
            * QUIT: close the connection and stop the program \r\n`);
            break;


        case "USER":  
      let execute = true;
      if (args == ""){
          execute = false;
          socket.write("ERROR: you must Add a user name \r\n");
          break;
      }
      if(execute){
        username = args[0];
        }
        fs.readFile('user.json', (err, data) => {
          if (err) throw err;
          let user = JSON.parse(data);
          if (user[username] !== undefined) {
            socket.write(`User ${username} exist.\r\n`);
          }else{
            socket.write(`User ${username} does not exist.\r\n`);
          }
      });
          
          break;


        case "PASS":  
          let execute1 = true;
          if (args == ""){
              execute1 = false;
              socket.write("ERROR: you must Add a password \r\n");
              break;
          }
          if(execute1){
            password = args[0];
            }
            fs.readFile('password.json', (err, data) => {
              if (err) throw err;
              let passw = JSON.parse(data);
              if (passw[password] !== undefined) {
                socket.write(`connected.\r\n`);
              }else{
                socket.write(`wrong password.\r\n`);
              }
          });
              break;


        case "LIST":          
          let files = fs.readdirSync(process.cwd());
              let finalStr = "";
              files.forEach((file) => {
                  finalStr += file + '\n';
              });
              socket.write(finalStr);
              break;


        case "PWD":
                socket.write(process.cwd());    
        break;


        case "CWD":
            try {
              process.chdir(path);
              socket.write(process.cwd());
          }
          catch (e) {
            
            socket.write(e.toString());
          }
        break;


        case "RETR":
          fs.copyFile(args[0], args[1], (err) => {
            if (err) throw err;
            socket.write("File copied from server to client succesfully \r\n");
            });
        break;


        case "STOR":
          fs.copyFile(args[0], args[1], (err) => {
            if (err) throw err;
            socket.write("File copied from client to server succesfully \r\n");
            });
            socket.write("215 \r\n");
        break;


        case "QUIT":
          socket.write("221, 'Client called QUIT'\r\n");
          socket.destroy();


        case "SYST":
            socket.write("215 \r\n");
        break;


        case "FEAT":
            socket.write("211 \r\n");
        break;
         
        case "TYPE":
            socket.write("200 \r\n");
        break;

        
        case "EPSV":
            socket.write("229 \r\n")
        break;

        default:
          console.log("command not supported:", command, args);
      }
    });

    socket.write("220 Hello World \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}
