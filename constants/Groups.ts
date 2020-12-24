import { SearchObject } from '../types';
/**
 * Array of SearchObject data of kpop groups
 * SearchObject {
        id: number,
        title: string,
        avatarURL ?: string,
        favoriteTweets ?: string[],
        twitterUsers?: string[],
        subtitle?: string,
 * }
 * 
 * twitterUsers will be array of Tweets for testing purposes
 * Should I add individual members into the data as well???
 */
const GroupData: SearchObject[] = [
    {
        id: 1,
        title: 'TWICE',
        avatarURL: 'https://c-sf.smule.com/rs-s78/arr/41/c6/86b96920-8110-4632-ad31-2330e0872a70.jpg',
        favoriteTweets: [
            '1337742281605046272',
            '1337770959038795777',
            '1337556043572842496',
            '1337614591661051905',
        ],
        twitterUsers : [
            'JYPETWICE',
            'misayeon',
        ],
        subtitle:'South Korean JYP Girl Group',
    },
    {
        id: 2,
        title: 'BlackPink',
        avatarURL:'https://c-sf.smule.com/rs-s80/arr/0d/34/fa6e2c42-62ac-4e8c-949b-2d5875bc64a6.jpg',
        favoriteTweets : [
            '1337155979360792577',
            '1336975559159635968',
        ],
        twitterUsers : [
            '1337155979360792577',
            '1336975559159635968',
        ],
        subtitle:'South Korean YG Girl Group',
    },
    {
        id: 3,
        title: 'BTS',
        avatarURL:'https://styles.redditmedia.com/t5_9kzpy/styles/profileIcon_bepvkcv7qrq41.jpg?width=256&height=256&crop=256:256,smart&s=15ee83ce0eb0cae7bfe78008475316136f31a867',
        favoriteTweets : [
            '1337247536239677440',
            '1338190730662129665',
            '1337779003759894529',
            '1337767980864716800',
        ],
        twitterUsers : [
            '1337247536239677440',
            '1338190730662129665',
            '1337779003759894529',
            '1337767980864716800',
        ],
        subtitle: 'South Korean BigHit Boy Group',
    },
    {
        id: 4,
        title: 'Iz*one',
        avatarURL:'https://beatsaver.com/cdn/444e/33584cfaa73b9b08c152498cdb7c02c955a2f3ba.jpg',
        favoriteTweets : [
            '1337727701239533575',
            '1337581045865095169',
            '1337070367337291780',
            '1336962582377271296',
        ],
        twitterUsers: [
            'IZONEGLOBALTWT',
            'official_izone',
            'IZONEPERMANENT1',
        ],
        subtitle: 'My Favorite Girl Group'
    },
    {
        id: 5,
        title: 'ITZY',
        avatarURL:'https://c-sf.smule.com/rs-s-sf-2/arr/2c/0f/36147c91-c6a3-4836-b4dd-c48df65f1354_256.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 6,
        title: 'Red Velvet',
        avatarURL: 'https://scoresaber.com/imports/images/songs/07EF8B1406627598B4FAA555F07760CF897A6BF5.png',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean SM Ent. Girl Group'
    },
    {
        id: 7,
        title: 'Loona',
        avatarURL:'https://img.wattpad.com/useravatar/__loonatheworld.256.61108.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 8,
        title: 'G-Idle',
        avatarURL:'https://cdn141.picsart.com/336504286073201.jpg?type=webp&to=crop&r=256',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 9,
        title: 'EXO',
        avatarURL:'https://pbs.twimg.com/profile_images/618839482717085696/-Uk-7250.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 10,
        title: 'Stray Kids',
        avatarURL:'https://i.pinimg.com/474x/77/8a/04/778a04ae792186992af4664df3acf11e.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 11,
        title: 'Got7',
        avatarURL:'https://c-sf.smule.com/rs-s80/arr/d6/e1/77976c1c-080f-4448-b4a6-1a9a813a26ae.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 12,
        title: 'Mamamoo',
        avatarURL: 'https://pbs.twimg.com/profile_images/684635037501792258/oiY7-ThW_400x400.jpg',
        favoriteTweets: [],
        twitterUsers: [

        ],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 13,
        title: 'Sana Minatozaki',
        avatarURL: 'https://cdn140.picsart.com/307592279145201.jpg?type=webp&to=crop&r=256',
        favoriteTweets: [
            '1337676254800015360',
            '1337637263556034563',
            '1337540566318415872',
        ],
        twitterUsers: [
            'bestofsana',
            'sanapics',
            'sanaarchive',
        ],
        subtitle: 'Girl Group Member of TWICE'
    },
    {
        id: 14,
        title: 'Im Nayeon',
        avatarURL: 'https://i.pinimg.com/564x/fe/b2/7d/feb27dd3e11095dbc08a77997d0e6dd1.jpg',
        favoriteTweets: [
            '1337667329229000704',
            '1337743793399820288',
            '1337338916907577345',
            '1336794359300177921',
        ],
        twitterUsers: [
            'archiveiny',
            'imnayeonarchive',
            'nayeonpics',
        ],
        subtitle: 'Girl Group Member of TWICE'
    },
    {
        id: 15,
        title: 'Kim Dahyun',
        avatarURL: 'https://c-sf.smule.com/rs-s-sg-1/sing/performance/cover/37/77/86c414bf-ca3e-4522-9158-6a2412c9b336.jpg',
        favoriteTweets: [
            '1124708249188483072',
            '1333815755465314306',
            '1333815691665756162',
            '1330149509465333762',
            '1328696475195375617',
        ],
        twitterUsers: [
            'dahyunniepics',
            'dahyunpie',
            'bestofdahyun',
        ],
        subtitle: 'Girl Group Member of TWICE'
    },
    {
        id: 16,
        title: 'Kim Minju',
        avatarURL: 'https://a.thumbs.redditmedia.com/p68DuzJtIQq-ZWPObYO7MlADrYc9codbbJc2GWlBnF8.png',
        favoriteTweets: [
            '1337777319109414913',
            '1337071613276286983',
            '1337697054592704512',
            '1336959601615376384',
            '1334872355735101440',
        ],
        twitterUsers: [
            'minjufeed',
            'minjuarchives',
            'minjufiles',
        ],
        subtitle: 'Girl Group Member of Iz*one'
    },
    {
        id: 17,
        title: 'Kim Chaewon',
        avatarURL: 'https://cdn130.picsart.com/319963484401201.jpg?type=webp&to=crop&r=256',
        favoriteTweets: [
            '1337660752631459841',
            '1337769364246892546',
            '1336506729727594499',
            '1337336560719593472',
            '1336922514287517698',
        ],
        twitterUsers: [
            'kim_chaewon00',
            'kimchaewonpics',
            'chaewonpng',
        ],
        subtitle: 'Girl Group Member of Iz*one'
    },
];

export default GroupData;