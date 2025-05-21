// src/data/text.ts

export interface Text {
  type: string;
  description: string;
}

export const texts: Text[] = [
  {
    type: "about",
    description: "i am a software developer, and a recovering academic. my background is in literature, and i sometimes make art films. i have founded and run an independend arthouse cinema in malmö, sweden. i have also worked as a bicycle mechanic, barista, and actor-ish, just to name a few. i care about community, and i currently work part-time at rfsl's checkpoint, testing msm and trans people for hiv and syphilis. i enjoy running. i am an aquarius, which supposedly means i'm obsessed with freedom. well, i am.",
  },
  {
    type: "cinema",
    description: "hypnos theatre is an independent arthouse cinema in malmö, sweden. my best friend, paul kraus, and i built it in january 2019, and have been running it since. we also founded the non-profit film association 'film i malmö' that allows us to make great cinema available to people outside the dominant market economy. film i malmö is fully volunteer-run. at hypnos, beside screening films, we host amazing concert, performances, and talks. we also have a café area, where friendships emerge. on my own account, i have made one short film called 'flesh matters.' it is a poetic exploration of gender and one's body relationship to the world.",
  },
  {
    type: "code",
    description: "having dropped out of academia in december 2021, after my 2-year postdoc at stanford, i started learning to code. i know, quite a shift! but as i was already reinventing myself from scratch, having just realized i was trans, why not think big? and i wasn't wrong. i find coding to be an immense source of joy: it's brainy, creative, and i have a sense i will never be done learning. using it wisely, i can, actually, change the world. what else is there to wish for?",
  },
  {
    type: "contact",
    description: "i am not huge on social media. however, you can find me on linkedin, and, of course, check out my github repos. you are more than welcome to send me a message via the form below.",
  },
  {
    type: "home",
    description: "welcome to explore all the different chapters i have set up for you here.",
  },
  {
    type: "literature",
    description: "i have dedicated most of my life to literature. be it as a literary translator, editor of a  magazine, or scholar. i have published a bunch of literary translations, some reviews and articles, and a book. what i care about is how the flesh of text carries meaning-creating potential. i am a new materialist, obviously. currently, i am working on a book (no idea what genre to assign to it) where language is an inherent part of a gender transition.",
  },
];
