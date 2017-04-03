var config = {
    "endToEnd" : [
        { "id": "TS7", "name": "Login" },
        { "id": "TS8", "name": "videoCall" },
        { "id": "TS9", "name": "endCall" },
        { "id": "TS10", "name": "joinVideoCall" },
        { "id": "TS11", "name": "Anonymous" },
        { "id": "TS12", "name": "joinRoom" },
        { "id": "TS13", "name": "stopServer" },
        { "id": "TS22", "name": "MakePSTNCall" }
    ],
    "loadTesting" : [
        { "id": "TS20", "name": "LoadTestXMPPServerWith1KConnections" },
        { "id": "TS23", "name": "LoadTestEndToEnd" }
    ],
    "API" : {
        "embedded" : [
            { "id": "TS1", "name": "RegisterAPI" },
            { "id": "TS2", "name": "createSessionAPI" },
            { "id": "TS3", "name": "joinSessionAPI" },
            { "id": "TS4", "name": "endSessionAPI" },
            { "id": "TS5", "name": "setPropertiesAPI" },
            { "id": "TS6", "name": "getPropertiesAPI" }
        ],
        "Authmanager" : [
            { id: 'TS14', name: 'AuthManagerAPI' }
        ],
        "EventManagerAPIV2" : [
            { id: 'TS21', name: 'EventManagerAPIV2' }
        ],
        "CloudCodeAPI" : [
            { id: 'TS16', name: 'CloudCodeAPI' }
        ],
        "NotificationManagerAPI" 
    }
    
    
}

export default config;