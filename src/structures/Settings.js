module.exports = (id) => {
    return {
        id,
        "embed": false,
        "roles": {
            "administrator": [],
            "moderator": [],
            "dj": [],
            "blacklist": [],
            "public": [],
            "mute": null
        },
        "ignored": {
            "commands": [],
            "invites": []
        },
        "announcements": {
            "id": null,
            "mention": null
        },
        "aliases": [],
        "logs": {
            "id": null,
            "join": null,
            "leave": null,
            "ban": null,
            "unban": null,
            "delete": null,
            "nickname": null,
            "invite": null,
            "moderation": null,
            "purge": null
        },
        "auto": {
            "role": {
                "id": null,
                "delay": null,
                "silent": true
            },
            "message": null,
            "nickname": null
        },
        "mode": "free",
        "prefix": {
            "custom": null,
            "default": true
        },
        "automod": {
            "invite": false,
            "inviteaction": false,
            "invitewarn": 1,
            "invitekick": 3,
            "link": false
        },
        "nonickname": true,
        "music": {
            "default": "all",
            "play": "off",
            "skip": "off",
            "stop": "off",
            "pause": "off",
            "resume": "off",
            "unqueue": "off",
            "volume": "off",
            "timelimit": null,
            "queuelimit": null,
            "apikey": null
        },
        "subscriber": null,
        "pcs": [],
        "webhooks": {
            "twitch": {
                "id": null,
                "message": null
            }
        }
    };
};