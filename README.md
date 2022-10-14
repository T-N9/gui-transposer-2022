# Gui-Transpo | Chord transposer and Lyric gernerator
![enter image description here](https://guitranspo.tenyain.com/meta.png)
# Introduction
Are you a newbie guitarist or a composer? Sometimes we have to manage a song to customize matching our vocal range or find a perfect version of a song to play with a guitar. Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it.

# Development
I have seen many online guitar chord transposers with different features and usabilities. Among them, only 2 or 3 have effective characteristics and user interfaces. My goal in building Gui-Transpo is to deliver easily generated lyric board and chord information in a short time.

# Planning and preparation
## Researching concepts

I am just an amateur campfire guitarist while implementing this project. Guitar chords theory can sometimes be tricky for beginners. I have to research many other applications to understand their user flows, concepts, and how they manage the inputted possibilities to reduce the rate of logical error occurrence. My first challenge is making a formula of a regular expression to detect all the common guitar chords among the inputted text. When all the chords are separated into an array, I prepared the chord data for transposing and implemented the transposing logic.

## Chord data from Chord Database

I use ChordDB to generate chord data which is used in displaying chord charts. In current beta version, only (major, minor, 7 and minor7) chord data are generated. 

**What are the techs?**
 - React
 - Firebase
 - TailwindCSS
 - [ChordDB](https://github.com/tombatossals/chords-db)
 - Redux Toolkit
 - React Router
 
 Version - Beta version
 
 Illustration by <a href="https://undraw.co/search">Undraw</a>
