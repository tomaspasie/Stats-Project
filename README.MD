[![Coverage Status](https://coveralls.io/repos/github/tomaspasie/Stats-Project/badge.svg?branch=master)](https://coveralls.io/github/tomaspasie/Stats-Project?branch=master)
[![Build Status](https://travis-ci.org/tomaspasie/Stats-Project.svg?branch=master)](https://travis-ci.org/tomaspasie/Stats-Project)

---------------------------------------------------------------------------------------------

Group: Tomas Pasiecznik & Matthew-Ian Blancaflor

---------------------------------------------------------------------------------------------

Outline:

1. Calculator Object
  1. Properties
    1. Result 
  2. Methods
    1. Addition -> Calls addition static method from Math operations.
    2. Subtraction -> Calls subtraction static method from Math operations.
    3. Multiplication -> Calls multiplication static method from Math operations.
    4. Division -> Calls division static method from Math operations.
    5. Power -> Calls power static method from Math operations.
    6. Square Root -> Calls root static method from Math operations.
  3. Math Operations Static Class
    1. Methods
      1. Addition -> Calls addition function of sum.js.
      2. Subtraction -> Calls subtraction function of difference.js.
      3. Multiplication -> Calls multiplication function of product.js.
      4. Division -> Calls division function of quotient.js.
      5. Power -> Calls power function of power.js.
      6. Square Root -> Calls root function of root.js.
  4. Operations Class(es)
    1. Addition
      1. Methods 
        1. Adds 2 numbers.
        2. Adds an Array of numbers.
    2. Subtraction
      1. Methods
        1. Subtracts 2 numbers.
    3. Multiplication
      1. Methods
        1. Multiplies 2 numbers.
    4. Division
      1. Methods
        1. Divides 2 numbers.
    5. Power
      1. Methods
        1. Returns power of the given base and exponent.
    6. Square Root
      1. Methods
        1. Returns square root of the given number.

---------------------------------------------------------------------------------------------

Task List (Add names to each task when project is finished)

Task 1 - Done By: Matthew-Ian Blancaflor
Description: Mean
Formula: Sum of Values/# of Values
Example: stats.Mean([10,20,30,40] = 25

Task 2 - Done By: Tomas Pasiecznik
Description: Median
Formula:((n + 1) ÷ 2)
Example:stats.Median([1,2,3,4,5]) = 3

Task 3
Description: Mode
Formula: Number that occurs most often.
Example:(n/a)

Task 4 - Done By: Tomas Pasiecznik
Description: Variance
Formula: (Sum of (x – Mean) )^2)/N
Example: stats.Variance([1,2,3,4,5,6,7,8,9,10]) = 8.25

Task 5 - Done By: Tomas Pasiecznik
Description: Standard Deviation
Formula: Square root of the variance.
Example: stats.standardDev([1,2,3,4,5,6,7,8,9,10])) = 2.8722813232690143

Task 6 - Done By: Tomas Pasiecznik
Description: Quartiles
Formula: Q1, 1/4(n+1), Q3, 3/4(n+1), Q2, Q3-Q1
Example: stats.Quartiles([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])) = Lower Quartile (Q1): 4 | Middle Quartile (Q2): 8 | Upper Quartile (Q3): 12

Task 7 - Done By: Tomas Pasiecznik
Description: Skewness
Formula: ((Sum of (x – Mean) / Standard Deviation)^3)/N
Example:stats.Skewness([54,64,85,68,94,21,10,5,79])) = -0.3849103620606639

Task 8 - Done By: Tomas Pasiecznik
Description: Sample Correlation
Formula:r(xy) = s(xy)[Covariance]/s(x)s(y)[Standard Deviations]
Example: stats.sampleCorrelation([15,37,59,78,91],[6,21,48,67,88]) = 1.2407801867935795

Task 9 - Done By: Tomas Pasieczink
Description: Population Correlation
Formula: p(xy) = σ(xy)[Covariance]/σ(x)σ(y)[Standard Deviations]
Example: stats.populationCorrelation([15,37,59,78,91],[6,21,48,67,88]) = 0.9926241494348637

Task 10 - Done By: Tomas Pasieczink
Description: Z-Score
Formula: z = (x-μ)/σ
Example: stats.zscore([15,37,59,78,91,6,21,48,67,88], 78)) = 0.9291581740284098

Task 11
Description: Mean Deviation / Mean Absolute Deviation
Formula: Find the mean of all values, use it to work out distances, then find the mean of those distances.
Example: (n/a)

Task 12
Description: Helper Functions (Functions you use for checking types or performing repeated operations)
Formula: (n/a)
Example: (n/a)

Task 13 - ENTIRE RANDOM GENERATOR FUNCTION

Description: Random Number Generator

Formula: 
[Sub-Task 1] Generate a random number without a seed between a range of two numbers - Both Integer and Decimal
(Done By: )

[Sub-Task 2] Generate a random number with a seed between a range of two numbers - Both Integer and Decimal
(Done By: )

[Sub-Task 3] Generate a list of N random numbers with a seed and between a range of numbers - Both Integer and Decimal
(Done By: )

[Sub-Task 4] Select a random item from a list
(Done By: )

[Sub-Task 5] Set a seed and randomly.select the same value from a list
(Done By: )

[Sub-Task 6] Select N number of items from a list without a seed
(Done By: )

[Sub-Task 7] Select N number of items from a list with a seed
(Done By: )

Example: (n/a)

Task 14
Description: Simple random sampling
Formula: (n/a)
Example: (n/a)

Task 15
Description: Systematic sampling
Formula: (n/a)
Example: (n/a)

Task 16
Description: Confidence Interval For a Sample
Formula: (n/a)
Example: 95% Confidence Level 

Task 17
Description: Margin of Error
Formula: z(σ/(sqrt(n)))
Example: (n/a)

Task 18
Description: How to Find a Confidence Interval
Formula: (n/a)
Example: 95% Confidence Level 

Task 19
Description: Cochran’s Sample Size Formula
Formula: n = n0 / 1 + ((n0 - 1)/N)
Example: 278 = 385 / (1 + (385 - 1 /1000))

Task 20
Description: How to Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation)
Formula: (n/a)
Example: (n/a)

Task 21
Description: How to Find a Sample Size Given a Confidence Interval and Width (known population standard deviation)
Formula: (n/a)
Example: (n/a)
