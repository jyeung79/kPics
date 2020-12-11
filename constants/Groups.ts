import { SearchObject } from '../types';
/**
 * Array of SearchObject data of kpop groups
 * SearchObject {
        id: number,
        title: string,
        avatarURL ?: string,
        twitterUsers?: String[],
        subtitle?: string,
 * }
 * 
 * twitterUsers will be array of Tweets for testing purposes
 */
const GroupData: SearchObject[] = [
    {
        id: 1,
        title: 'TWICE',
        avatarURL: 'https://c-sf.smule.com/rs-s78/arr/41/c6/86b96920-8110-4632-ad31-2330e0872a70.jpg',
        twitterUsers : [
            '1124708249188483072',
            '1333815755465314306',
            '1333815691665756162',
            '1330149509465333762',
            '1328696475195375617',
        ],
        subtitle:'South Korean JYP Girl Group',
    },
    {
        id: 2,
        title: 'BlackPink',
        avatarURL:'https://c-sf.smule.com/rs-s80/arr/0d/34/fa6e2c42-62ac-4e8c-949b-2d5875bc64a6.jpg',
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
        twitterUsers : [
            '1337247536239677440',
            '1337281845956775936',
            '1337281223614373888',
        ],
        subtitle: 'South Korean BigHit Boy Group',
    },
    {
        id: 4,
        title: 'Izone',
        avatarURL:'https://beatsaver.com/cdn/444e/33584cfaa73b9b08c152498cdb7c02c955a2f3ba.jpg',
        twitterUsers : [
            '1336959601615376384',
            '1334872355735101440',
            '1336962582377271296',
            '1336506729727594499',
        ],
        subtitle: 'My Favorite Girl Group'
    },
    {
        id: 5,
        title: 'ITZY',
        avatarURL:'https://c-sf.smule.com/rs-s-sf-2/arr/2c/0f/36147c91-c6a3-4836-b4dd-c48df65f1354_256.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 6,
        title: 'Red Velvet',
        avatarURL: 'https://scoresaber.com/imports/images/songs/07EF8B1406627598B4FAA555F07760CF897A6BF5.png',
        twitterUsers: [],
        subtitle: 'South Korean SM Ent. Girl Group'
    },
    {
        id: 7,
        title: 'Loona',
        avatarURL:'https://img.wattpad.com/useravatar/__loonatheworld.256.61108.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 8,
        title: 'G-Idle',
        avatarURL:'https://cdn141.picsart.com/336504286073201.jpg?type=webp&to=crop&r=256',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 9,
        title: 'EXO',
        avatarURL:'https://pbs.twimg.com/profile_images/618839482717085696/-Uk-7250.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 10,
        title: 'Stray Kids',
        avatarURL:'https://i.pinimg.com/474x/77/8a/04/778a04ae792186992af4664df3acf11e.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 11,
        title: 'Got7',
        avatarURL:'https://c-sf.smule.com/rs-s80/arr/d6/e1/77976c1c-080f-4448-b4a6-1a9a813a26ae.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
    {
        id: 12,
        title: 'Mamamoo',
        avatarURL:'data:image/jpeg;base64,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',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
];

export default GroupData;