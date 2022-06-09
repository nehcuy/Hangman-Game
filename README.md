# Hangman Game

This is a fully client sided Hangman Game project bootstrapped with [bootstrap-v5.0.2](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

Table of Contents:
- [Introduction](#Introduction)
- [Gameplay](#Gameplay)
- [Improvements](#Improvements)


## Introduction

This is an abstracted sub-directory of the previous TikTok Youth Camp Hangman Game Project.
Due to the lack of completion of a Full-Stacked Hangman Game containing a 2 player game lobby
and server-based word generation, I decided to publish only the complete client side Hangman Game
on my local repository 😔😔

## Gameplay

User can click the on-screen keyboard letter by letter at an attempt to guess a word from the category: `Fruits`.

The following are the rules to the game:
- Each successful guess will cause the underscores to be replaced by the correct letter at that position.
- Each wrong guess will cause the user to 'lose a life' and the hangman will be closer to completion with each wrong guess.
- The game ends when the user either: 
    1. Wins by guessing the correct word before losing all 6 'lives'.
    2.  Or loses by failing to guess the correct word within 6 wrong guesses.

## Improvements

- Add in CSS styling
- Increase font size of underscores and `Guess the Fruit` wording
- Figure out how to import more words and categories of words to guess
- Add a timer to make game more fun
