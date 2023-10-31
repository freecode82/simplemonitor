# simplemonitor

### It is a simple monitoring web server that stores data delivered via post in a file.
### file specifies the file name to be saved on the server.
### data is monitoring data to be delivered to the server.


# usage
[server start]
PS C:\Users\freeman\Documents\Programming\simplemonitor> node .\simplemonitor.js 8082

[client data send]
PS C:\Users\freeman\Documents\Programming\simplemonitor\curl-8.4.0_6-win64-mingw\curl-8.4.0_6-win64-mingw\bin> ./curl -d "file=20231030&data=aaaac" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://127.0.0.1:8081/data
