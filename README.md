# Game-of-Skate-App
A small app I created for playing games of S.K.A.T.E

## Table of contents

    Overview
        - The App and Inspiration
        - Link
    My process
        - Development
        - Built with
        - Continued development
        - Useful resources
    Author

## Overview

This is a small app I created for playing games of S.K.A.T.E. (GoS) Design was fulfilled utilizing strictly vanilla JavaScript, CSS, and HTML.

### The App and Inspiration

When not programming, a side hobby of mine is learning how to skateboard. Anyone who has spent even a small amount of time in the skateboarding world knows that a GoS is one of the most fun and most useful games to play when learning how to skate; it motivates you to learn tricks to be more competitive and gets you to try new tricks you may have never attempted (or planned to attempt). That is where this idea was born...

For those that don't know, a GoS is played just as a game of H.O.R.S.E would be played in basketball. A player starts the game by attempting a trick. If the trick is landed successfully, the defending player must perform the same trick to avoid getting a letter and so on... The play continues till a player has collected all the letters of SKATE, thereby loosing and the other player reigning champion.

Ordinarily, when playing a GoS, one would need to keep score either in their head, on a sheet of paper, or in a notepad like app. This was always very annoying to me and had the idea for this app for quite a while and finally sat down to grind it out.

### Link
- URL: [Game of Skate](https://nbemis.github.io/Game-of-Skate-App/)


## My process

### Development
To begin this project, I decided to map out my design in Figma so I would have a basic scope of the layout to reference when implementing the design in code. I also had predefined colors in mind for the color scheme but no predefined fonts. Using Figma, I was able to see exactly what colors worked where and also helped me pick the fonts I liked best for the design. 

Once the layout was finished, I started to build the basic implementation using only HTML and CSS. I am trying to maintain a Mobile-first design approach to my designs to make building responsive websites easier and cleaner. Therefore, I used only two media queries to distinguish between phablets/tablets and desktops.
Likewise, I tried to reuse code whenever possible as the first and third pages look almost identical, and the overall style remains the same throughout.

The most difficult part of the project was when it came to write the JavaScript code. I wanted to keep all the code in a single JS document but found that I needed to validate whether certain code was needed or not on each page; henceforth, I was required to add IDs to each page body and validate on page load using 'if' statements. 

While that took some Googling, the hardest part of the project for me was trying to maintain the state of the players toggles. I wanted to control the toggle ability of the players so that they were required to toggle the letters in order, could go back if a letter had accidently been toggled, and couldn't toggle previously highlighted letters (i.e., if the most recent highlighted letter was 'T' and the player attempted to deselect 'S,' the player would be unable to deselect). After a few failed/buggy implementations, I ended up using two global variables that held the state of each player and some 'if-else' statements to check on each toggle if it was a valid toggle or not. While it may not be the cleanest, most efficient way to validate, I was happy to have my app working exactly how I desired. :)


### Built with
    - Figma
    - Google fonts
    - Vanilla JavaScript
    - HTML5 markup
    - CSS properties
    - Flexbox
    - Mobile-first workflow

### Continued development

While GoS usually consist of two players, it is not uncommon to have games of three or more players in one game. Likewise, games can also have less or more letters (like a game of S.K.A or S.K.A.T.E.B.O.A.R.D). For continued development, I would like to add the option of selecting how many players will be playing and also the number of letters each player will be using.


## Author

    Noah Bemisderfer

