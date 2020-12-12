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
        avatarURL: 'https://pbs.twimg.com/profile_images/684635037501792258/oiY7-ThW_400x400.jpg',
        twitterUsers: [],
        subtitle: 'South Korean JYP Girl Group'
    },
];

export default GroupData;