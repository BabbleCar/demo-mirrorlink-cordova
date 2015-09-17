cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-mirrorlink/www/plugin.js",
        "id": "cordova-plugin-mirrorlink.MirrorLink",
        "clobbers": [
            "cordova.plugins.MirrorLink"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-mirrorlink": "0.0.1"
}
// BOTTOM OF METADATA
});