const { logins, colors } = require('./createUserConsts');

const getRandLogin = () => {
    const i = Math.floor( Math.random() * logins.length );
    const login = `${logins[i].name} ${logins[i].count === 0 ? '' : logins[i].count + 1}`;
    logins[i].count++;
    return login;
};

const getRandColor = () => {
    const i = Math.floor( Math.random() * colors.length );
    return colors[i];
};

module.exports = ( id ) => ({
    id,
    name: getRandLogin(),
    color: getRandColor(),
    online: true
});
