module.exports = Object.freeze({
    PARSE_REJECT_TOKEN  : Symbol(),
    REG_SPOILER_TAG     : /(\|\|)/g,
    REG_SAFE_LIST_CLOSE : /(<(ul|ol)>(?:[\s\S](?!<\/\2>))*?)(\|\|)([\s\S]*?<\/\2>)/g,
    REG_SAFE_SHIFT_END  : /(\|\|)(<\/p>)/g,
    REG_SAFE_SHIFT_START: /(<p>)(\|\|)/g,
    REG_SANITIZE_WRAP   : /<(\w+)[^<]*>(\|\|)<\/\1>/g,
    REG_SPOILER         : /\|\|([\s\S]+?)\|\|/g,
    SOCKET_NAMESPACE    : 'ns-spoiler'
});
