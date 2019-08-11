# FooBarQix

## Overview

Write a program that only takes a nunber as input and returns either a number or string as output. The output is a number equal to input if it does not follow any of the special rules defined below (e.g. input of 1 returns an output of 1), otherwise it returns a string as stated in the rules.

## Rules

- If the number is divisible by 3 or contains 3, return "Foo" instead of 3
- If the number is divisible by 5 or contains 5, return "Bar" instead of 5
- If the number is divisible by 7 or contains 7, return "Qix" instead of 7
- We prioritize divisors before the content (e.g. 51 returns "FooBar")
- We prioritize content in the order it appears (e.g. 53 returns "BarFoo")
- We prioritize multiples in the order Foo, Bar and Qix (e.g. 21 returns "FooQix")

## Example Output

| Input |  Output   | Comments                                                  |
| :---: | :-------: | :-------------------------------------------------------- |
|   1   |     1     |                                                           |
|   2   |     2     |                                                           |
|   3   |  FooFoo   | 3 is divisible by 3 and contains "3"                      |
|   4   |     4     |                                                           |
|   5   |  BarBar   | 5 is divisible by 5 and contains "5"                      |
|   6   |    Foo    | 6 is divisible by 3                                       |
|   7   |  QixQix   | 7 is divisible by 7 and contains "7"                      |
|   8   |     8     |                                                           |
|   9   |    Foo    | 9 is divisible by 3                                       |
|  10   |    Bar    | 10 is divisible by 5                                      |
|  13   |    Foo    | 13 contains "3"                                           |
|  15   | FooBarBar | 15 is divisible by 3, is divisible by 5, and contains "5" |
|  33   | FooFooFoo | 33 is divisible by 3, and contains "3" twice              |
