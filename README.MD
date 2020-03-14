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
  4. Operations Classes
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
  5. Statistics Functions
    1. Methods 
      1. Mean -> Mean(values)
      2. Median -> Median(values)
      3. Mode -> Mode(values)
      4. Variance -> Variance(values)
      5. Standard Deviation -> standardDev(values)
      6. Quartiles -> Quartiles(values)
      7. Skewness -> Skewness(values)
      8. Sample Correlation -> sampleCorrelation(x,y)
      9. Population Correlation -> populationCorrelation(x,y)
      10. Z-Score -> zscore(values, value)
      11. Mean Deviation / Mean Absolute Deviation -> meanDeviation(values)
  6. Random Generator Functions
    1. Methods
      1.
  7. Random Generator Functions
    1. Methods
      1. Simple Random Sampling -> simpleRandomSampling(values,sampleSize)
      2. Systematic sampling -> systematicSampling(values,every)
      3. Confidence Interval For a Sample -> confidenceInterval(sample)
      4. Margin of Error -> marginOfError(sample,population)
      5. How to Find a Confidence Interval -> findConfidenceInterval(sample,population)
      6. Cochran’s Sample Size Formula -> 
      7. How to Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation) -> 
      8. How to Find a Sample Size Given a Confidence Interval and Width (known population standard deviation) -> 

---------------------------------------------------------------------------------------------

Task List (Add names to each task when project is finished)

Task 1 - Done By: Tomas Pasiecznik + Matthew-Ian Blancaflor
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

Task 11 - Done By: Tomas Pasiecznik
Description: Mean Deviation / Mean Absolute Deviation
Formula: [Sum of] |x − μ|/N
Example: stats.meanDeviation([15,37,59,78,91,6,21,48,67,88]) = 25.6

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

Task 14 - Done By: Tomas Pasiecznik
Description: Simple random sampling
Formula: (n/a)
Example: sample.simpleRandomSampling([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) = 3 1 10 4 7

Task 15 - Done By: Tomas Pasiecznik
Description: Systematic sampling
Formula: (n/a)
Example: sample.systematicSampling([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) = 2 4 6 8 10

Task 16  - Done By: Tomas Pasiecznik
Description: Confidence Interval For a Sample
Formula: ((mean) ± z * ((std)/(sqrt of N))
Example: sample.confidenceInterval([15,37,59,78,91,6,21,48,67,88]) = 32.9893169479889 ± 69.0106830520111

Task 17 - Done By: Tomas Pasiecznik
Description: Margin of Error
Formula: z(σ/(sqrt(n)))
Example: sample.marginOfError(sample.simpleRandomSampling([15,37,59,78,91,6,21,48,67,88], 5),[15,37,59,78,91,6,21,48,67,88]) = 25.47095223975735%

Task 18 - Done By: Tomas Pasiecznik
Description: How to Find a Confidence Interval
Formula: Population Confidence Interval
Example: sample.findConfidenceInterval(sample.simpleRandomSampling([15,37,59,78,91,6,21,48,67,88], 5),[15,37,59,78,91,6,21,48,67,88]) = 56.16041742477567 ± 79.83958257522433

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

Task 22
Description: Check values for being valid numbers and not strings.
Formula: (n/a)
Example: (n/a)

Task 23
Description: Throw an exception for divide by zero.
Formula: (n/a)
Example: (n/a)

Task 24
Description: Throw exception for empty list.
Formula: (n/a)
Example: (n/a)

Task 25
Description: TESTS
Formula: Use random data for tests and be able to increase the number of calculations required i.e. be able to increase the list of numbers that the mean calculation is done on.  You can actually use built in libraries or 3rd party libraries to check your calculations that you complete yourself.  i.e. you can use the standard deviation function from a stats library to compute the correct value for your list of random numbers and then use that to test that your own calculation is correct for that list.
Example: (n/a)

