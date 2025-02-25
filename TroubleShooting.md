## Check if Port 8000 is in Use

```shell
netstat -ano | findstr :8000 # lsof -i :8000  (For macOS/Linux)
```

### Example:
```shell
  TCP    0.0.0.0:8000           0.0.0.0:0              LISTENING       5440
  TCP    0.0.0.0:8000           0.0.0.0:0              LISTENING       14480
  TCP    [::]:8000              [::]:0                 LISTENING       5440
  TCP    [::]:8000              [::]:0                 LISTENING       14480
```
- You have two processes (PIDs: 5440 and 14480) listening on port 8000, which is why your server can't start on that port.

## Identify the Processes Using Port 8000
- This will show which programs are using port 8000
- In my own case it was postgres instance and node proxy server with PIDs: 5440 and 14480 respectively.
```shell
tasklist | findstr 5440
tasklist | findstr 14480

# Or 
ps -aux | grep 5440
ps -aux | grep 14480
```

## Kill the Processes Using Port 8000
- You need to kill the processes instances using the port `8000` for the port be available for use in any other app.

```shell
taskkill /PID 5440 /F
taskkill /PID 14480 /F

# Or
kill -9 5440
kill -9 14480
```

## Run Your Application
- You can run your application on port `8000` and see if it's now running



## Yarn Commands
- Run your application
```bash
yarn dev # npm run dev
```

- Install a package
```bash
yarn add <package> # npm install <package>
```

- Install all packages from yarn.lock
```bash
yarn install # npm install
```