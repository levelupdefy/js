const my_info_odject = {
    myName: 'rsadhukha',
    myGithub: 'sadhukhanr',
    reopName: 'js',
    repoUrl: 'https://github.com/sadhukhanr/js',
    repoMeta: () =>{
        const repo = this.reopName;
        const url = this.repoUrl;
        return console.log(repo, "=>",url);
    }
};

// objectName.popertyValue;

const me = my_info_odject.myName;
const github = my_info_odject.myGithub;
const meta = my_info_odject.repoMeta;

console.log(me, github, meta);
