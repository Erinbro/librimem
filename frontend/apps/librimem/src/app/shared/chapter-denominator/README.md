# Chapter Denominator

The ChapterDenominator tracks the index of the chapter.

## Motivation

A chapter can have multiple subchapters. The first chapter has the number 1. Its
subchapter has the index 1.1. The next subchapter has the index 1.2 and so on.

## Terms

In LibriMem we do not name the multiple parts of the book. Everything is a chapter. The difference is
that some chapters are subordinated to other chapters and vice versa.

## Relationship

We find the relationship between chapters with the `index` property of the chapter instance.

A chapter for example with index **1.2.4** is subordinated to **1.2**.

## Tasks

### ChapterDenominatorComponent

This are the taks of the ChapterDenominatorComponent:

- 1. [ ] Show group of related chapters together with the chapter parent at the top
- 2. [ ] The subchapters are indented properly to indicate hierarchy.

### ChapterDenominatorService

This are the tasks of ChapterDenominatorService:

- 1. [ ] Group related chapters together in a string with the chapter parent at the top of the map.
