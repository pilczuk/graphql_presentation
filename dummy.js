import mongoose from 'mongoose';
import _ from 'lodash';
import chalk from 'chalk';
import User from './models/user';
import Comment from './models/comment';
import Article from './models/article';

// Use native promises
mongoose.Promise = global.Promise;

// Connect to MongoDB and create/use database called graphQl-test
mongoose.connect('mongodb://localhost:27017/graphQl-test');

let users = [
    new User({
        username: 'Luke Skywalker',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=23&txt=Luke&w=100&h=100',
        birthDate: '19 BBY'
    }),
    new User({
        username: 'R2-D2',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=23&txt=R2-D2&w=100&h=100',
        birthDate: '112BBY'
    }),
    new User({
        username: 'Darth Vader',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=23&txt=Vader&w=100&h=100',
        birthDate: '112BBY'
    }),
    new User({
        username: 'Leia Organa',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=23&txt=Leia&w=100&h=100',
        birthDate: '112BBY'
    }),
    new User({
        username: 'Obi-Wan Kenobi',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=23&txt=Obi-Wan&w=100&h=100',
        birthDate: '112BBY'
    })
];

function save(values, key) {
    let saving = [];

    _.each(values, value => {
        saving.push(value.save().then(value => {
                console.log(chalk.yellow(key + ' ' + value[key] + ' saved'));
            }).catch(err => {
                console.log(chalk.red("error: " + err));
            })
        );
    });

    return saving;
}

console.log(chalk.green('Users'));
Promise.all(save(users, 'username')).then(() => {
    let articles = [
        new Article({
            userId: users[2]._id,
            title: 'Testing my new toy',
            description: `Hey @leia do you like your nice planet?`
        }),
        new Article({
            userId: users[0]._id,
            title: 'Saved a PRINCESS',
            description: `I saved @leia from this grumpy guy @darthVader. I think she is hot!`
        }),
        new Article({
            userId: users[0]._id,
            title: 'destroy Death Star!',
            description: `I don't like this asshole @darthVader he is pissing me off! let's destroy his new toy`
        }),
    ];

    console.log(chalk.green('Articles'));
    Promise.all(save(articles, 'title')).then(() => {
        let comments = [
            new Comment({
                articleId: articles[0]._id,
                userId: users[3]._id,
                text: 'Yes @darthVader, why do you ask? I think Alderaan is one of most beautiful planets in the galaxy'
            }),
            new Comment({
                articleId: articles[0]._id,
                userId: users[2]._id,
                text: '*is* you mean *were* LOL!'
            }),
            new Comment({
                articleId: articles[0]._id,
                userId: users[3]._id,
                text: 'Fuuuuuuuuuuuu...'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[3]._id,
                text: 'xoxo'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[4]._id,
                text: 'Uhhh, yeah. Probably best you guys stay friends. Trust me on this one.'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[0]._id,
                text: 'LOL! GTFO! You are just jealous because you are a ghost! Ha!'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[4]._id,
                text: 'She is your sister bro...'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[3]._id,
                text: 'WTF???'
            }),
            new Comment({
                articleId: articles[1]._id,
                userId: users[2]._id,
                text: 'I have something to tell you guys...'
            }),
            new Comment({
                articleId: articles[2]._id,
                userId: users[1]._id,
                text: 'Beep beep!'
            }),
            new Comment({
                articleId: articles[2]._id,
                userId: users[0]._id,
                text: 'Everything will be cool R2 chill!'
            })
        ];

        console.log(chalk.green('Comments'));
        Promise.all(save(comments, 'text')).then(() => {
            console.log(chalk.green('Basic data is in your database - time to start server!'));
            process.exit(0);
        });
    });
})