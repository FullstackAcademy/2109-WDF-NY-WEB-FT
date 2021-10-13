#!/usr/bin/env node

const hipsum = require('lorem-hipsum')
const {db, Author, Comment, Story} = require('../server/db')

const loremHipsum = () => hipsum({
  count: 3,
  units: 'paragraphs',
  paragraphLowerBound: 3,
  paragraphUpperBound: 15,
  format: 'plain'
})

const seed = async () => {
  await db.sync({force: true})

  const cody = await Author.create({name: 'Cody', bio: 'A friendly pug', imageUrl: 'cody.jpg'})
  const fira = await Author.create({name: 'Fira', bio: 'A friendly python', imageUrl: 'fira.jpg'})
  const earl = await Author.create({name: 'Earl', bio: 'A somewhat less friendly cat', imageUrl: 'earl.png'})

  const story1 = await Story.create({
    title: 'A bone to pick with jQuery',
    content: loremHipsum(),
    imageUrl: '',
    authorId: cody.id
  })

  const story2 = await Story.create({
    title: 'How to React (to treats!)',
    content: loremHipsum(),
    imageUrl: '',
    authorId: cody.id
  })

  const story3 = await Story.create({
    title: 'Functional programming with python',
    content: loremHipsum(),
    imageUrl: '',
    authorId: fira.id
  })

  const story4 = await Story.create({
    title: 'Angular: time for the litter box',
    content: loremHipsum(),
    imageUrl: '',
    authorId: earl.id
  })

  await Comment.create({
    content: 'I love this article as much as I hate dogs',
    authorId: earl.id,
    storyId: story1.id
  })

  await Comment.create({
    content: 'I wish JavaScript variables were in snake_case!',
    authorId: fira.id,
    storyId: story1.id
  })

  await Comment.create({
    content: 'I love this article as much as I love treats',
    authorId: cody.id,
    storyId: story3.id
  })

  await Comment.create({
    content: 'Angular\'s really in the doghouse!',
    authorId: cody.id,
    storyId: story4.id
  })

  db.close()
  console.log(`

    Seeding successful!
    Time to blog!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
