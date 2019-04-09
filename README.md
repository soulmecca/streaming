# Streaming web service.

Streaming web service with React and Redux

## App architecture

```
OBS (Open broadcaster software) --> RTMP(Real Time Messaging Protocol) server     <--
                                          ||                                        |
                                          \/                                        |
                        Web server that knows which streams                         |
                        are currently broadcasting             --> User's Browser --
```
