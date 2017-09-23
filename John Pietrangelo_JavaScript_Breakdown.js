spacer();
//                             Writen by John Joseph Pietrangelo III
                  console.log("A JavaScript Breakdown\n\n\t Writen by John Joseph Pietrangelo III\n");

console.log('********************************************************************************************************');
console.log('********************************************************************************************************');
space();
//**********************************************************************************************************************
//**********************************************************************************************************************


                   console.log("\t\t\t\t\t*** Values, Types, and Operators ***\n");
//                                        *** Values, Types, and Operators ***
console.log('********************************************************************************************************');
space();
/*
 Inside the computer's mind, there is only data.

 ALL this data is stored as long sequences of bits.

 Bits are any kind of two-valued things, usually defined as zeros and ones.

 Inside the computer, they take forms such as a high or low electrical charge, a strong or weak signal.

 Here are the bits that make up the number 69, with the weights of the digits shown below them:

   0  1  0  0 0 1 0 1
 128 64 32 16 8 4 2 1

 So that’s the binary number 01000101, or 64 + 4 + 1, which equals 69.
//----------------------------------------------------------------------------------------------------------------------

 VALUES:

 A typical modern computer has more than 30 billion bits in its 'volatile' data storage.

 The hard drive or equivalent tends to have yet a few orders of magnitude more.

 There are six basic types of values in JavaScript:
 numbers, strings, Booleans, objects, functions, and undefined values.

 As soon as a value is no longer being utilized, it will dissipate,
 leaving behind its bits to be recycled, as building blocks for the next construction of values.
//----------------------------------------------------------------------------------------------------------------------

 NUMBERS:

 JavaScript uses a fixed number of bits(64 of them to be precise), to store a single number value.

 For 'N' decimal digits, the amount of numbers that can be represented is (10 * 'N').

 Similarly, given 64 binary digits, you can represent 264 different numbers, which is about 18 quintillion!
 (an 18 with 18 zeros after it). This is a lot.

 For very big or very small numbers, you can also use scientific notation by adding an “e” (for “exponent”),
 followed by the exponent of the number:

 2.998e8
 That is 2.998 * 10^8 = 299,800,000.

 Just as 'pi' cannot be precisely expressed by a finite number of decimal digits,
 many numbers lose some precision when only 64 bits are available to store them.

 This is a limitation, but it causes practical problems only in specific situations.
//----------------------------------------------------------------------------------------------------------------------

 ARITHMETIC:

 The + and * symbols are called 'operators'.   Example -> 100 + 4 * 11

 Does the example mean 'add 4 and 100, and multiply the result by 11',
 or is the multiplication done before the adding?

 The answer is to follow the mathematical principles, which hopefully you have learned throughout your education,
 They remain constant with-in computer-science too!

 The multiplication happens but as in mathematics, you can change this by wrapping the addition in parentheses.
 Example -> (100 + 4) * 11

 When multiple operators, with the same precedence, appear next to each other, as in 4 - 2 + 3,
 they are applied left to right.  When in doubt, just add parentheses. (4 - 2) + 3.

 The % symbol is used to represent the 'remainder' operation.

 X % Y is the remainder of dividing 'X by Y'.

 For example, 269 % 100 produces 69,
              288 % 12 produces 0.

 the Remainder(%) precedence is the same as that of multiplication(*) and division(/).

 You’ll often see this(%) operator referred to as 'modulo', though technically 'remainder' is more accurate.

//----------------------------------------------------------------------------------------------------------------------

 SPECIAL NUMBERS:

 There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers.

 The first two are Infinity and -Infinity, which represent the positive and negative infinities.
 Infinity - 1 is still Infinity, and so on.

 Infinity-based computation isn’t mathematically solid and it will usually lead to another type of special number: NaN.

 'NaN' stands for “not a number”, even though it is a 'value' of the 'number type'.

 You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero),
 Infinity - Infinity, or any number of other numeric operations that don’t yield a precise, meaningful result.

//----------------------------------------------------------------------------------------------------------------------

 STRINGS:

 The next basic 'data-type' is the 'string'. Strings are used to represent 'text'.

 They are written by enclosing their content in quotes.
 example:  "To be or not to be?"
           'That is the question.'

 Both single and double quotes can be used to mark strings as long as
 the quotes at the start and the end of the string match each other.

 To make it possible to 'Escape' from characters in a string, the following notation is used: (\)

 When the backslash is found inside quoted text, it indicates that the character after it has a special meaning.

 This is called 'escaping the character'.

 When an 'n' character occurs after a backslash, it is interpreted as a 'newline'.

 Similarly, a 't' after the backslash means a 'tab' character. Take the following string:

 If backslashes follow each other, they will collapse together, and only one will be left in the resulting string value.

 The code below displays how the string - A newline character is written like " \n ". - can be writen.
 */
console.log("Below are the '\\' operator, 'escape' returns."); //Below are the '\' operator, 'escape' returns.
space();

console.log("A new line character is written like \" \\n \"."); //A newline character is written like " \n ".
space();

//Both tab and newline characters are written like this.
console.log("\tThis is the 1st line.\nThis is the 2nd line.\n");  //    This is the 1st line.
                                                                  //This is the 2nd line.

//The following line will produce the string "concatenate":
console.log("con" + "cat" + "e" + "nate");  //concatenate
spacer();

//----------------------------------------------------------------------------------------------------------------------
/*
 UNARY OPERATORS:

 Not all 'operators' are 'symbols', some are 'words'.

 For example, the 'typeof'-operator, produces a 'string'-value, of the 'data-type' of the 'value' you give it.
 The other operators we saw all operated on two values, but 'typeof' takes only one.

 Operators that use two values are called 'binary operators',
 while those that take one are called 'unary operators'.
*/
// Below are the variables used for the following examples.
var int_a = 100;
var string_b = "Hello";
var bool_c = true;
var array_d = [1,2,3];
var object_e = {
                    name: "John Pietrangelo",
                    degrees: ["CIS","SOS"]
               };

//----------------------------------------------------------------------------------------------------------------------

console.log("Below are the 'typeof' operator, returns."); //Below are the 'typeof' operator, returns.
space();

console.log(int_a + " is a '" + typeof int_a + "' data-type!"); //100 is a 'number' data-type!
space();

console.log(string_b + " is a '" + typeof string_b + "' data-type!"); //Hello is a 'string' data-type!
space();

console.log(bool_c + " is a '" + typeof bool_c + "' data-type!"); //true is a 'boolean' data-type!
space();

console.log(array_d + " is a '" + typeof array_d + "' data-type!");//1,2,3 is a 'object' data-type!
space();

// I use 'JSON.stringify' to write the content with-in the 'object' to the 'console screen'.

// I will discuss 'JSON.stringify' later on in this writing, don't concern yourself about its intricacies right now.

console.log(JSON.stringify(object_e) + " is a '" + typeof object_e+ "' data-type!");
//{"name":"John Pietrangelo","degrees":["CIS","SOS"]} is a 'object' data-type!
space();

//----------------------------------------------------------------------------------------------------------------------

console.log("The minus operator can be used both as a binary operator and as a unary operator.");
space();   //The minus operator can be used both as a binary operator and as a unary operator.

//binary use, subtracts 2 from 10. Unary use, changes the given number(8) a negative value.
console.log(-(10 - 2)); // -8
spacer();
/*
//----------------------------------------------------------------------------------------------------------------------

 BOOLEAN VALUES:

 In programming, there is a need for a value that simply distinguishes between two possibilities,
 like ('yes' and 'no') or ('on' and 'off') or ('true' and 'false').

 For these situations, JavaScript established a 'Boolean' data-type, which has just two values: 'true' and 'false'.
------------------------------------------------------------------------------------------------------------------------

 Comparing values:

 Here are examples of utilizing the Boolean to compare values:*/

console.log("Below are the 'comparing values' returns."); //Below are the 'comparing values' returns.
space();

console.log("3 is greater than 2.","That statement is", + 3 > 2);  //3 is greater than 2. That statement is true
space();

console.log("3 is less than 2.",'That statement is', + 3 < 2);  //3 is less than 2. That statement is false
space();
/*
 The > and < signs are the traditional symbols for “is greater than” and “is less than” ard are 'binary'-operators.

 Applying them, results in a Boolean-value that indicates whether the 'case' holds 'true' or 'false'.

 Strings can be compared in the same way, as follows:

 */                   //(Escape operator in use)               //(Escape operator in use)  //(Boolean operator in use)
console.log("The 1st index value \'g\' in god is greater than the 1st index value \'d\' in dog:", "god" > "dog");
//The 1st index value 'g' in god is greater than the 1st index value 'd' in dog: true
space();

                     //(Escape operator in use)                //(Escape operator in use)  //(Boolean operator in use)
console.log("The 1st index value \'G\' in god is greater than the 1st index value \'d\' in dog:", "God" > "dog");
//The 1st index value 'G' in god is greater than the 1st index value 'd' in dog: false
space();

/*
 The way strings are ordered is more or less alphabetic:

 Uppercase letters are always a lesser value than lowercase ones, so "Z" < "a" is true.

 Non-alphabetic characters(!, -, etc.) are also included in the ordering.

 The 'Actual'-comparison of values are based on the Unicode standards......

 This standard assigns a number to virtually every character you would ever need,
 including characters from the Greek, Arabic, Japanese alphabets.

 When comparing strings, JavaScript goes over them from left-to-right,
 comparing the numeric codes of the characters one-by-one.

 Other similar operators are:

 >= (greater than or equal to),
 <= (less than or equal to),
 == (equal to), and != (not equal to).

 */
console.log("\'itch\' dose not equal \'scratch\':", "itch" != "scratch"); //'itch' dose not equal 'scratch': true

space();
/*
 There is only one value in JavaScript that is not equal to itself, and that is 'NaN', which stands for “not a number”.

 NaN is supposed to denote the result of a 'nonsensical computation'.

 Do to that fact it isn’t equal to the result of any other 'nonsensical computations'.
 */
console.log("\'hi\' equals \'hi\':", "hi" == "hi"); //'hi' equals 'hi': true
space();

console.log("\"4\" equals \"4\":", 4 == 4); //"4" equals "4": true
space();

console.log("\"NaN\" equals \"NaN\":", NaN == NaN); //"NaN" equals "NaN": false
spacer();

/*
 Logical operators:

 There are operations we programmers apply to resulting 'Boolean'-values. JavaScript supports three logical operators.

 These operators are used for: 'and', 'or', and 'not' reasoning. These can be used to “reason” about Booleans.

 The '&&' operator represents a logical 'and'.  It is a 'binary'-operator.

 Its result is 'true', only if 'both' the Boolean-values given to it are 'true'.
 */
console.log("Below are the '&&' operator, 'and' returns."); //Below are the '&&' operator, 'and' returns.
space();

console.log(false && false); //false
space();

console.log(false && true); //false
space();

console.log(true && false); //false
space();

console.log(true && true); //true
spacer();


//The || operator denotes logical order. It produces true if either of the values given to it is true.

console.log("Below are the '||' operator, 'or' returns."); //Below are the '||' operator, 'or' returns.
space();

console.log(true || true); //true
space();

console.log(true || false); //true
space();

console.log(false || true); //true
space();

console.log(false || false); //false
space();

/*
 'Not' is written as an exclamation mark '!'.

 It is a 'unary'-operator that flips the (+/-) value given to it.

 !true = false and !false = true.

 *When mixing the 'Boolean'-operators we have reviewed, with arithmetic and other operators,
  it is not always obvious when parentheses are needed.

 In practice, you can usually get by with knowing that, of the operators we have seen so far:

 '||' has the lowest precedence, then comes '&&', then the comparison operators (>, ==, and so on), and then the rest.

 This order has been chosen so that, in typical expressions like the following one, there are as few
 parentheses as possible needed:
 */

console.log('1 + 1 equals 2 and 10 * 10 is greater than 50:', 1 + 1 == 2 && 10*10 > 50);
           //1 + 1 equals 2 and 10 * 10 is greater than 50: true
spacer();
/*
 The last logical operator I will discuss is not unary, not binary, but ternary(operating on three values)!!!

 This one is called the 'conditional'-operator(I call it the 'picker'-operator since it is the only one in the language).

 It is written with a question mark and a colon, as follows:
 */

// Below are the variables used for the following examples.
var pickerSetToTrue = "1st option is chosen";
var pickerSetToFalse = "2nd option is chosen";

/*
 The value on the left of the question mark “picks” which of the other two values will be returned.

 When the first-value is true, the middle-value is returned.

 When the first-value is false, the last-value, on the right is returned.
 */
console.log("Below are the ' ? : ' operator, 'picker' returns."); //Below are the ' ? : ' operator, 'picker' returns.
space();

console.log(true ? 1 : 2); // 1
space();

console.log(false ? 1 : 2); // 2
space();

console.log("When value is true:",true ? pickerSetToTrue : pickerSetToFalse);
           //When value is true: 1st option is chosen
space();

console.log("When value is false:",false ? pickerSetToTrue : pickerSetToFalse);
           //When value is false: 2nd option is chosen
spacer();


/*
 Undefined values:

 There are two special values, written 'null' and 'undefined',
 which are used to denote the 'absence of a meaningful value'.

 They are themselves values,but they carry no information.

 Many operations in the language that don’t produce a meaningful value(you’ll see some later) yield 'undefined',
 simply because they have to yield some value.

 I have found that the difference between 'undefined' and 'null' is an accident of JavaScript’s design.

 It does not matter most of the time, which is utilized.

 More often than not, the systems utilizes 'undefined',
 unless 'null' has already been used to define the operation-instance, by the programmer.

 In the cases where you actually have to concern yourself with these values,
 I recommend treating them as interchangeable.

------------------------------------------------------------------------------------------------------------------------

 Automatic type conversion:

 When an operator is applied to a value of the “wrong” data-type,
 JavaScript will convert that value to the data-type it finds to be most efficient,
 using a set of rules that often result in a return you don't want or expect.

 This is called 'type coercion':

 In the introduction, I mentioned that JavaScript goes out of its way to accept almost any program you give it,
 even programs that do odd things.

 This is demonstrated by the following expressions:
 */
console.log("Below are the 'automatic type conversion' returns.");
           //Below are the 'automatic type conversion' returns.
space();

//the 'null' in this expression becomes 0.
console.log(8 * null); // 0
space();

//the "5" in the this expression becomes 5 (from a string to number data-type).
console.log('5' - 3); // 2
space();

//'+'-operator tries string concatenation before numeric addition,
// so the 1 is converted to "1" (from number to string).
console.log('5' + 3); // 53
space();

//When something that doesn’t 'map' to a 'number' in an obvious way(such as "five" or undefined),
// it is converted to a number, the value 'NaN' is produced.
console.log('five' * 3); // NaN
space();

//***Further arithmetic operations on 'NaN' keep producing 'NaN',
//so if you find yourself getting one of those in an unexpected place, look for accidental type conversions.


//When comparing values when the types differ, JavaScript uses a confusing set of rules to determine what to do.
//In most cases, it just tries to convert one of the values to the other value’s type.
console.log(false == 0); // true
space();

//However, when null or undefined occurs on either side of the operator,
// it produces true only if both sides are one of null or undefined.
console.log(null == undefined); // true
space();

console.log(null == 0); // false
space();

console.log(undefined == 0); //false
spacer();
/*
 That last piece of behavior is often useful When you want to test whether a value has a real value,
 instead of null or undefined. A programmer can simply compare it to null with the == (or !=) operator.

------------------------------------------------------------------------------------------------------------------------

 The rules for converting strings and numbers to Boolean:

 Values state that 0, NaN, and the empty string ("") count as false.

 While all the other values count as true(0 == false and "" == false are true statements).

 For cases like this, where you do not want any 'automatic type conversions' to happen,
 there are two other operators a programmer can use: === and !==.

 The first tests whether a value is precisely equal to the other.

 The second tests whether it is not precisely equal.

 So ("" === false) is false as expected.

 use the three-character comparison operators liberally, to prevent unexpected type conversions from tripping you up.

 However, when you’re certain the types on both sides will be the same, use the shorter operators.

----------------------------------------------------------------------------------------------------------------------------

 Short-Circuiting of Logical Operators:

 The logical operators && and || handle values of different types in a specific way.

 They will convert the value on their left side to a Boolean data-type in order to decide what to do.

 Depending on the operator, they return either the original left-hand or the right-hand value.

 The || operator, for example, will return the value to its 'left' when that can be converted to 'true'
 and will return the value on its 'right' if 'false'.

 This conversion works as you’d expect for Boolean values and should do something analogous for values of other types.
*/
console.log("Below are the 'Short-circuiting of logical operator' returns.");
space();   //Below are the 'Short-circuiting of logical operator' returns.

console.log(null || 'user'); //user
space();

console.log('dog' || 'god'); //dog
space();
/*
 The && operator works similarly, but the other way around.

 When the value to its 'left' is something that converts to 'false', it returns that value.

 If the value to its 'left' is something that converts to 'true', it returns the value on its 'right'.
 */
console.log(null && 'user'); //null
space();

console.log('dog' && 'god'); //god
spacer();
/*
 Another rule to these two operators, is that the expression to their right, is evaluated only when necessary.

 In the case of (true || X), no matter what X is, the result will be 'true', and X is never evaluated.

 The same goes for (false && X), which is 'false' and will ignore 'X'. This is called 'short-circuit evaluation'.

 The conditional(picker)-operator works in a similar way.

 The first expression is always evaluated, but the second or third value, the one that is not picked, is not.

------------------------------------------------------------------------------------------------------------------------

 SUMMARY:

 We have reviewed six data-types, of JavaScript values in this chapter:
 numbers, strings, Booleans, NaN, null and undefined.

 Such values are created by typing in their data-type values (69, 'abc', true, NaN, null, undefined).

 You can combine and transform values with operators:

 We reviewed binary operators for arithmetic (+, -, *, /, and %),

 string concatenation(+),

 comparison operators (==, !=, ===, !==, <, >, <=, >=),

 logic operators (&&, ||),

 unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type,

 the ternary operator (?:) to pick one of two values based on a third value.

 This is enough information to use JavaScript as a basic calculator, but not much more.

 The next chapter will execute expressions together to create some basic programs.

------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
 */
console.log("\t\t\t\t\t*** Program Structure ***\n");
console.log('********************************************************************************************************');
space();
//                     *** Program Structure ***
/*
 In this chapter, we create some basic programming.

 We will continue to make small, steady steps(mano y mano) toward your evolution in JavaScript.

 "
   Any Path....

   'Persistence' is the 'key' to 'unlock' your 'development'.
   Small, steady steps will add up to quite a long distance before you know it.
   The 'key' is to 'Never Stop Walking'!

                                                                               "
                                                                                 -- John J. Pietrangelo III

------------------------------------------------------------------------------------------------------------------------

 EXPRESSIONS:

 A fragment of code that produces a value is called an 'expression'.

 Every value that is written literally (such as 69 or "analytics") is an expression.

 An expression between parentheses, a binary operator applied to two expressions or a unary operator
 applied to one, are also an expressions.

 The following concept reflects a major principle of any language-based interface:

 Expressions can nest themselves with-in other expressions, similar to the way sub-sentences in human languages are nested.

 A sub-sentence can contain its own sub-sentences, and so on.

 This allows us to combine expressions to express relatively complex computations.

 -----------------------------------------------------------------------------------------------------------------------
 */
console.log("Below are the 'Side effects' example returns."); //Below are the 'Side effects' example returns.
space();

console.log(1); //1
space();

console.log(!false); //true
spacer();
/*
 These above changes to an application are called 'side effects'.

 The statements produce the values '1' and 'true', then immediately recycle the storage units which once held them.

 When executing the program, nothing observable happens.

 expressions should always end with a semicolon.

 The rules for when it can be safely omitted are somewhat complex and error-prone.

 In all my examples, every statement that needs a semicolon will always be terminated by one.

 I recommend you do the same, even after you have learned the applicable intricacies of leaving out semicolons.

 -----------------------------------------------------------------------------------------------------------------------

 VARIABLES:

 How does a program keep an internal state? How does it remember things?

 To catch and hold values, JavaScript provides a storage unit called a 'variable'.

 The special word(keyword) 'var' indicates the 'defining' of a variable.

 It is followed by the 'name' of the variable.

 If a programmer wants to immediately 'initialize' a value, they follow the name with an = operator and an expression.

 ** Though it is not necessary or even a common practice in JavaScript:
 *
 *  For the benefit to the reader,
 *
 *  I will begin each variable(var) name with its 'data-type' and then an 'under-score',
 *  then the traditional pascal cased variable name.
 *
 *  As we delve deeper into some of the subject matter later on, it will help you follow along.
 *
 *  Just keep in mind, in most JavaScript programs:
 *
 ** A Standard Variable(var) Name Does Not Include Either Data-type or Underscore!                                          */

console.log("Below are the 'variable value' returns."); //Below are the 'variable value' returns.
space();

// To declare a variable(var) named 'int_number' and initializing its value to the product of '5 * 5'.
var int_number = 5 * 5;

//After a variable has been defined, its name can be used as an expression.
//The value of such an expression is the value the variable currently holds.
console.log(int_number); //25
space();

// variable names are not required to reflect the value they hold,
// though it would be hazardous to do so.
var string_five = 10;

console.log( string_five * string_five); // 100
space();
/*

 Variable name regulations:

 Variable names can be any word that isn’t a 'key' word (such as var).

 Spaces are not allowed.

 Digits can be part of variable name but the name cannot begin with a digit,
 catch22 is a valid name where as 2Catch is not.

 A variable name cannot include punctuation, except for the characters $ and _

 When a variable points at a value, that does not mean it is tied to that value forever:

 The = operator can be used at any time on existing variables to disconnect them from their current value
 and have them point to a new one.
 */
// To declare a variable(var) named 'string_securityClearance' and initializing its value to 'low level'.
var string_securityClearance = "low level";

console.log(string_securityClearance); //low level
space();

// This line changes the previous value of the 'string_securityClearance'-variable.
string_securityClearance = 'high level';

console.log(string_securityClearance);// high level
space();
/*
 Example:
 John owes you $40,000.00.
 To remember the number of dollars that John still owes you, you create a variable.
 Then when he pays back $1,000.50, you give this variable a new value to reflect that.
 */

var double_johnsDebt = 40000.00;

double_johnsDebt = double_johnsDebt - 1000.31;

console.log('$' + double_johnsDebt.toLocaleString('en')); //$38,999.69
space();

//When you define a variable without giving it a value, it is empty, so it ends in thin air.
//If you ask for the value of an empty variable, the value 'undefined' will be returned.

var int_one;

console.log(int_one); //undefined
space();

//A single variable statement may define multiple variables. The definitions must be separated by commas.

var int_three = 3, int_four = 4;

console.log(int_three + int_four); //7
spacer();
/*
------------------------------------------------------------------------------------------------------------------------

 Keywords and Reserved Words:

 'Words' with a special meaning, such as 'var', are 'keywords', and they may
 not be used as 'variable names'.

 There are also a number of words that are “reserved for use” in future versions of JavaScript.

 These are also officially not allowed to be used as 'variable names'(though some JavaScript
 environments do allow them).

 Below you will find a full list, in alphabetical order, of 'keywords and reserved words'.

 break case catch class const continue debugger default delete do else enum export extends false
 finally for function if implements import in instanceof interface let new null package private
 protected public return static super switch this throw true try typeof var void while with yield

------------------------------------------------------------------------------------------------------------------------

 The Environment:

 The collection of variables and their values that exist at a given time is called the environment.

 When a program starts up, this environment is not empty.

 It always contains variables that are part of the language standard, and most of the time,
 it has variables that provide ways to interact with the surrounding system.

 For example, in a browser, there are variables and functions to inspect and influence the currently loaded website
 and to read mouse and keyboard input.

 A lot of the values provided in the default environment have the 'function'-type.

 A 'function' is a piece of program which can be wrapped in a variable.

 Such variables can be applied, in order to run the wrapped program.

------------------------------------------------------------------------------------------------------------------------

*****       .html file MUST be linked to 'this' .js file and the lines of code must be uncommented,                *****
                               in order to see the effects to the browser.

Important info on 'functions'. Regardless if you do or don't have this file linked to a .html file, Read This Section!!!

------------------------------------------------------------------------------------------------------------------------

 For example, in a browser environment, the variable 'alert' holds a function that shows a dialog box with a message.

 It is used like this:;
 */

//alert("Good morning!"); //uncomment if .html is linked to 'this' .js file

/*
 Executing a function is called 'invoking', 'calling', or 'applying' it.

 You can 'call' a function by putting 'parentheses'() after an 'expression' that produces a 'function-value'.

Usually you’ll directly use the name of the variable that holds the function.

 The values between the parentheses are called the 'argument' and are given to the 'parameter', inside the function.

 In the previous example, the 'alert'-function uses the 'string' that we gave it as the 'text' within the 'dialog box'.

 The 'alert'-function requires at least one argument, but all functions vary in the number and types of arguments.

------------------------------------------------------------------------------------------------------------------------

 The console.log Function:

 'console.log' isn’t a simple variable.

 It is actually an 'expression' that retrieves the 'log'-property from the value held by the console-'object' variable.

 The 'alert'-function can be useful as an output device when experimenting.

 Most JavaScript systems(including all modern web browsers and Node.js) provide a 'console.log'-function,
 which writes out its arguments to some text output device(window).

 In browsers, the output lands in the JavaScript console.

 This part of the browser interface is hidden by default, but most browsers open it when you press F12 or,

 on Mac(unfortunate for all of us if you are), when you press Command-Option-I.

 If that does not work, search through the menus for an item named “web console” or “developer tools”.

------------------------------------------------------------------------------------------------------------------------

 Return Values:

 functions are useful because of the side effects they produce.

 For example, the function Math.max() takes as it's parameter's arguments,
 multiple number values and returns the greatest value amongst them all.
 */

console.log("Below are 'function value' returns."); //Below are 'function value' returns.
space();

console.log(Math.max(17,20,100)); //100
space();
 /*
 When a function produces a value, it is said to return that value.

 In JavaScript, anything that produces a 'value' is an 'expression'.

 Which means function calls can be used with in larger expressions(Nested Functions).


 Below is a call to Math.min, which is the opposite of Math.max                       */
console.log(Math.min(4,-50,100)); // -50
spacer();

/*
 Prompt and Confirm:

 The following two functions are not used much in modern programming but they are useful for experiments.

 Browser environments contain other functions besides alert for popping up windows.

 You can ask the user an 'OK/Cancel' question using 'confirm'.

 This returns a Boolean: 'true' if the user clicks 'OK' and 'false' if the user clicks 'Cancel'.
 */

//confirm("Shall we then?"); //uncomment if .html is linked to 'this' .js file

/*
 The 'prompt'-function can be used to ask an “open” question.

 The first argument is the question, the second one is the text that the user starts with.

 A line of text can be typed into the dialog window, and the function will return this text as a string.
*/

//prompt("Tell me everything you know"); //uncomment if .html is linked to 'this' .js file

/*
 Control Flow:

 When your program contains more than one statement, the statements are executed, predictably, from top to bottom.

 As a basic example, this program has two statements. The first one asks the user for a number
 and the second, which is executed afterward, shows the square of that number.

 The 'Number'-function casts(converts) a string-value into a integer-value.

 We need that conversion because the result of prompt is a string value, and we want a number.

 There are similar functions called 'String' and 'Boolean' that convert values to those data-types.
 */

/*
var theNumber = Number(prompt("pick a number",""));                  //uncomment if .html is linked to 'this' .js file
alert("your number is the square root of " + theNumber * theNumber); //uncomment if .html is linked to 'this' .js file
*/

/*
 Conditional Execution:

 Executing statements in straight-line order isn’t the only option we have.

 An alternative is conditional execution, where we choose between two different routes based on a Boolean value.

 Conditional execution is written with the if keyword in JavaScript.

 In that simple case, we just want some code to be executed if, and only if, a certain condition holds.

 For example, we might want to show the square of the input only if the input is actually a number.

 The keyword if executes or skips a statement depending on the value of a Boolean expression.
 */

/*
 theNumber = Number(prompt("pick a number.",""));                  //uncomment if .html is linked to 'this' .js file
 if(!isNaN(theNumber))                                             //uncomment if .html is linked to 'this' .js file
 {                                                                 //uncomment if .html is linked to 'this' .js file
 alert("Your number is the square root of" + theNumber*theNumber); //uncomment if .html is linked to 'this' .js file
 }                                                                 //uncomment if .html is linked to 'this' .js file
*/

/*
 The isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN.

 The Number function happens to return NaN when you give it a string that doesn’t represent a valid number.

 Thus, the condition translates to “unless theNumber is not-a-number, do this”.

 You often won’t just have code that executes when a condition holds true, but also code that handles the other case.

 This alternate path is represented by the second arrow in the diagram.

 The else keyword can be used, together with if, to create two separate, alternative execution paths.
 */

//uncomment block of code below, if .html is linked to 'this' .js file
/*
theNumber = Number(prompt("pick a number.",""));
    if(!isNaN(theNumber))
    {
        alert("Your number is the square root of" + theNumber*theNumber);
    }
else
    {
        alert("Hey, why didn't you give me a number?");
    }
*/

/*
 If we have more than two paths to choose from, multiple if/else pairs
 can be “chained” together. Here’s an example:
 */

//uncomment block of code below, if .html is linked to 'this' .js file
/*
theNumber = Number(prompt("pick a number.",""));
if(theNumber < 10)
    {
        alert("small number");
    }
else if(theNumber < 100)
    {
        alert("medium number");
    }
else if(theNumber > 100)
    {
       alert("large number")
    }
else
    {
        alert("Why didn't you give me a number?")
    }
   */

/*
------------------------------------------------------------------------------------------------------------------------

 While and Do Loops:

 Consider a program that prints all even numbers from 0 to 12. One way
 to write this is as follows:
 */

console.log("All even numbers from 0 to 12."); //All even numbers from 0 to 12.
space();

console.log(0);  // 0
console.log(2);  // 2
console.log(4);  // 4
console.log(6);  // 6
console.log(8);  // 8
console.log(10); //10
console.log(12); //12
spacer();

/*
 That works, but the idea of writing a program is to make something less work, not more.

 If we needed all even numbers less than 10,000, the previous would take a while.

 What we need is a way to reiterate over some code.

 This form of control flow is called a loop:

 A statement starting with the keyword 'while' creates a 'loop'.

 The word 'while' is followed by an 'expression in parentheses' and then a 'statement'(block of code to run through),
 much like the if-statement.

 Whenever we need to execute multiple statements inside a loop, we wrap them in curly braces{}.

 Braces do for statements what parentheses do for expressions:

 They group them together, making them count as a single statement.

 A sequence of statements wrapped in braces is called a block.

 The loop executes the statement as many times as the expression produces a value that is true to the while condition.
 */
console.log("Below are the 'while' and 'do' conditional-function returns.");
           //Below are the 'while' and 'do' conditional-function returns.
space();

// to declare variable with a value of zero.
var int_number = 0;

//while expression checks the value of 'int_number, if less or equal to 12, the statement below is executed.
while(int_number <= 12)
{
    //writes int_number's value to console.
    console.log(int_number);

    //Adds 2 to the current value of 'int_number'
    int_number = int_number + 2;
}
space();
/*
 As an example that actually does something useful, we can now write a program that calculates and shows
 the value of 2^10(2 to the 10th power) and 5^8(5 to the 8th power).

 We use two variables: one to keep track of our result and one to count how often we have multiplied this result by 2.

 The loop tests whether the second variable has reached 10 yet and then updates both variables.
 */

var int_result = 1;
var int_counter = 0;

while(int_counter < 10)
{
    int_result = int_result * 2;

    int_counter++;
}
console.log(int_result.toLocaleString('en')); //1,024   -> 2^10
space();

//----------------------------------------------------------------------------------------------------------------------

int_result = 1;
int_counter = 0;

while(int_counter < 8)
{
    int_result = int_result * 5;

    int_counter++;
}
console.log(int_result.toLocaleString('en')); //390,625           5^8
spacer();
/*
 The counter could also have started at 1 and check for <= 10.

 For reasons that will become apparent in soon, it will be a good idea to get used to counting from 0.

 The 'do' loop is a control structure similar to the 'while' loop.

 It differs only on one point:

 A 'do' loop always executes its body at least once, and it starts testing whether it should stop
 only after that first execution.

 To reflect this, the test appears after the body of the loop:

 The following program will force you to enter a name.

 It will ask again and again until it gets something that is not an empty string.

 Applying the ! operator will convert a value to Boolean type before negating it, and all
 strings except ""(empty-string) convert to true.

 This means the loop continues going round until you provide a propertyName that is not the empty string.
 */
/*
do
{
    var yourName = prompt("who are you?");
}while (!yourName);
console.log(yourName);
*/
/*
 for Loops:

 Many loops follow the pattern seen in the previous 'while' examples.

 First, a “counter” variable is created to track the progress of the loop.

 Then comes a while loop, whose test expression usually checks whether the counter has reached some boundary yet.

 At the end of the loop body, the counter is updated to track progress.

 Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive
 form, the 'for' loop.
 */
console.log("Below are the 'for' conditional-function returns."); //Below are the 'for' conditional-function returns.
space();

for(var int_index = 0; int_index <= 12; int_index = int_index + 2)
    console.log(int_index);
space();
/*
 The code above only has one statement needing execution inside the loop so instead of braces to signify the
 loop's statement.

 Instead, there is no indention to the following line of code: -> space()
 (the 1st character in 'space();', lines up with the 1st character in 'for'.)

                                ***     IMPORTANT     ***

 However, to keep thing as simple as possible and to reduce any human error(adding statement to loop in later versions),

 I wrap ALL code following the expression, regardless the number of statements, even just one.

 Below is the same code only the statement following the expression is wrapped with braces.
 */
for(var int_index = 0; int_index <= 12; int_index += 2)
{
    console.log(int_index);
}
space();
/*
 With in the parentheses, after a 'for' keyword, there must contain two semicolons:

 The part before the first semicolon initializes the loop, usually by defining a variable like 'i' or 'index'.

 The second part is the 'expression' that checks whether the loop must continue(boolean-value return).

 The final part updates the state of the loop after every iteration.

 In most cases, this is shorter and clearer than a 'while' loop.

 Here is the code that computes 2^10 and 5^8, using 'for' instead of 'while':
 */
int_result = 1;

for(var i = 0; i < 10; i++)
{
    int_result = int_result * 2;
}

console.log(int_result.toLocaleString('en')); //1,024   -> 2^10
space();

//----------------------------------------------------------------------------------------------------------------------

int_result = 1;

for(var i = 0; i < 8; i++)
{
    int_result = int_result * 5;
}

console.log(int_result.toLocaleString('en'));  //390,625  -> 5^8
space();

/*
 Having the loop’s condition produce false is not the only way a loop can finish.

 There is a special statement called 'break' that has the effect of immediately jumping out of the enclosing loop.

 The following code illustrates the 'break' statement.

 It finds the 1st number that is both greater than or equal to 20 and divisible by 7.
 */

// The for-loop in the example does not have a conditional expression in the center, that checks for the end of the loop.
// This means that the loop will never stop unless the break statement inside is executed.
for(var int_currentValue = 0; ; int_currentValue++)
{
   // Using the remainder(%) operator is an easy way to test whether a number is divisible by another number.
    // If it is, the remainder of their division is zero.
    if(int_currentValue % 7 == 0 && int_currentValue >= 20)
    {
        break;
    }
}
console.log(int_currentValue); // 21
space();
/*
 If you were to leave out that break statement or accidentally write a condition that always produces true,
 your program would get stuck in an infinite loop.

 The 'continue' keyword is similar to 'break', in that it influences the progress of a loop.

 When continue is called in a loop body, control jumps out of the body and continues with the loop’s next iteration.

 Updating variables succinctly:

 When looping, a program needs to “update” a variable, to hold a value, based on that variable’s previous value:
 */
int_counter = 0;

int_counter = int_counter + 1;
/*
 JavaScript provides a shortcut for this:
 */
int_counter += 1;

/*
 Similar shortcuts work for many other operators, like result *= 2 -> to double a result or count -= 1 -> to count down.

 This will shorten the counting example.
 */
for(var int_index = 0; int_index <= 12; int_index += 2)
{
    console.log(int_index);
}
spacer();
/*
As previously shown, For counter += 1 and counter -= 1, there are even shorter equivalents: counter ++ and counter-- .
------------------------------------------------------------------------------------------------------------------------

 Searching for desired 'code' to execute, 'based on a value', using a 'switch' Statement:
 */
console.log("Below are the 'switch' statement returns."); //Below are the 'switch' statement returns.
space();

//---------------------------------------------------------------------------------------------------------------------
//It is common for code to look like this:

var action1 = function(){};
var action2 = function(){};
var action3 = function(){};

var defaultAction = function()
                    {
                        console.log("Default action taken!\n")
                    };

var string_letter = 'x';

if(string_letter == 'a')
{
    action1();
}
else if(string_letter == 'b')
{
    action2();
}
else if(string_letter == 'c')
{
    action3();
}
else
{
    defaultAction();
}
/*
 There is a statement called 'switch' solves the above “if - else if - else” statement, in a more direct way.

 The syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages)
 is somewhat awkward so the above chain of 'if' statements, may looks better.
 */

switch (string_letter)
{
    case 'a':
        action1();
        break;

    case 'b':
        action2();
        break;

    case 'c':
        action3();
        break;

    default:
        defaultAction();
        break;
}
spacer();

//example to run in browser if .html is linked to this .js file
/*switch(prompt("what is the weather like?"))
{
    case "rainy":
      alert("Remember to bring an umbrella.");
      break;
    case "sunny":
      alert("Remember to apply sunscreen to your exposed skin");
      break;
    default:
      alert("Unknown weather type");
      break;
}
*/
/*
 You may put any number of 'case' labels inside the block opened by switch.

 The program will jump to the label that corresponds to the value that switch
 was given or to default if no matching value is found.

 It starts executing statements there, even if they’re under another label, until it reaches a 'break' statement.

------------------------------------------------------------------------------------------------------------------------

 Program Example #1: Looping a triangle

 A loop that makes 10 calls to console.log to output the following
 triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 ########
 #########
 ##########
 */
console.log("Below Is The Return For Program Example #1: Looping a triangle.");
           //Below Is The Return For Program Example #1: Looping a triangle.
space();

//----------------------------------------------------------------------------------------------------------------------

//for loop example.
var string_rowContent = "";

for(var index= 0; index < 10; index++)
{
    string_rowContent = string_rowContent + "#";

    console.log(string_rowContent);
}
space();

//----------------------------------------------------------------------------------------------------------------------

//while loop example
string_rowContent = "";

while(string_rowContent.length < 10)
{
    string_rowContent = string_rowContent + "#";

    console.log(string_rowContent);
}
space();

//----------------------------------------------------------------------------------------------------------------------

//do-while loop example
string_rowContent = "";

do
{
    string_rowContent = string_rowContent+"#";
    console.log(string_rowContent);

}while(string_rowContent.length < 10);

space();

/*
 FizzBuzz
 Write a program that uses console.log to print all the numbers from 1
 to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
 instead of the number, and for numbers divisible by 5 (and not 3), print
 "Buzz" instead.
 When you have that working, modify your program to print "FizzBuzz",
 for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
 "Buzz" for numbers divisible by only one of those).
 (This is actually an interview question that has been claimed to weed
 out a significant percentage of programmer candidates. So if you solved
 it, you’re now allowed to feel good about yourself.)
 */
var number = 1;

while(number <= 100)
{
    if(number % 3 == 0 && number % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(number % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(number % 5 == 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(number);
    }
    number += 1;
}
space();
/*
 Chess board
 Write a program that creates a string that represents an 8x8 grid, using
 newline characters to separate lines. At each position of the grid there
 is either a space or a “#” character. The characters should form a chess
 board.
 Passing this string to console.log should show something like this:

 When you have a program that generates this pattern, define a variable
 size = 8 and change the program so that it works for any size, outputting
 a grid of the given width and height.
 */
// The 'size' variable can be any even number.
var size = 8;
var row = 0;
var board = "";
while(row < size *.5)
{
    for (var i = 0; i <= size; i++)
    {
        if (row == 0 || row % 2 == 0)
        {
            for (var i = 0; i < size; i++)
            {
                if (board.length == 0 || board.length % 2 == 0)
                {
                    board += "#";
                }
                else
                {
                    board += " ";
                }
            }
            board += "\n";
        }
        else {
            for (var i = 0; i < size; i++) {
                if (board.length % 2 != 0) {
                    board += " ";
                }
                else {
                    board += "#";
                }
            }
            board += "\n";
        }
        row++;
    }
}
console.log(board);
space();
                    //      *** FUNCTIONS ***
/*
                            Defining a function

 A function definition is just a regular variable definition where the value
 given to the variable happens to be a function. For example, the following
 code defines the variable square to refer to a function that produces
 the square of a given number:
 */

var square = function (x)
{
    return x * x
};

console.log(square(12)); // 144
space();
/*
 A function is created by an expression that starts with the keyword
 function. Functions have a set of parameters (in this case, only x).
 a body, which contains the statements that are to be executed when
 the function is called. The function body must always be wrapped in
 braces, even when it consists of only a single statement.

 A function can have multiple parameters or no parameters at all. In the
 following example, makeNoise does not list any parameter names, whereas
 power lists two:
 */

var noise = function ()
{
    console.log("Hurray!");
};
noise(); // Hurray!
space();

var power = function (base,exponent)
{
    var result = 1;
    for(var i = 0; i < exponent; i++)
    {
        result *=base;
    }
    return result;
};

console.log(power(10,5)); //100,000
space();

/*
 Some functions produce a value, such as power and square, and some don’t,
 such as makeNoise, which produces only a side effect. A return statement
 determines the value the function returns. When control comes across
 such a statement, it immediately jumps out of the current function and
 gives the returned value to the code that called the function. The return
 keyword without an expression after it will cause the function to return
 undefined.
 */

/*
 Parameters and scopes
 The parameters to a function behave like regular variables, but their
 initial values are given by the caller of the function, not the code in the
 function itself.  An important property of functions is that the variables
 created inside of them, including their parameters, are local to the function.

 This “localness” of variables applies only to the parameters and to
 variables declared with the var keyword inside the function body. Variables
 declared outside of any function are called global, because they are
 visible throughout the program.  It is possible to access such variables
 from inside a function, as long as you haven’t declared a local variable
 with the same propertyName.

 The following code demonstrates this. It defines and calls two functions
 that both assign a value to the variable x. The first one declares the
 variable as local and thus changes only the local variable. The second
 does not declare x locally, so references to x inside of it refer to the global
 variable x defined at the top of the example.
 */

var x = "Outside";

var f1 = function ()
{
    var x = "inside f1";
}
f1();

console.log(x); // Outside

var f2 = function ()
{
    x = "inside f2"
};
f2();

console.log(x); // inside f2

/*
 Nested scope
 JavaScript distinguishes not just between global and local variables. Functions
 can be created inside other functions, producing several degrees of
 locality.
 For example, this rather nonsensical function has two functions inside
 of it:
 */
space();

var landscape = function()
{
    var result = "";

    var flat = function (size)
    {
        for(var i = 0; i < size; i++)
        {
            result += "_";
        }
    };

    var mountain = function (size)
    {
        result += "/";

        for(var i = 0; i < size; i++)
        {
            result += "'";
        }

        result += "\\";
    };

    flat(2);
    mountain(4);
    flat(1);
    mountain(3);
    flat(2);
    mountain(5);
    flat(1);
    return result;
};

console.log(landscape());

/*
 Declaration notation
 There is a slightly shorter way to say “var square = ...function”. The
 function keyword can also be used at the start of a statement, as in the
 following:
 */
function square(x)
{
    return x*x;
}

console.log(square(5)); // 25
space();
/*
 This is a function declaration. The statement defines the variable square
 and points it at the given function. So far so good. There is one subtlety
 with this form of function definition, however.
 */
console.log("The future says:",future());
space();

function future()
{
    return "We still have no flying cars.";
}

/*
 This code works, even though the function is defined below the code
 that uses it. This is because function declarations are not part of the
 regular top-to-bottom flow of control. They are conceptually moved to
 the top of their scope and can be used by all the code in that scope.
 This is sometimes useful because it gives us the freedom to order code in
 a way that seems meaningful, without worrying about having to define
 all functions above their first use.
 */

/*
 The place where the computer stores this context is the call stack.
 Every time a function is called, the current context is put on top of this
 “stack”. When the function returns, it removes the top context from the
 stack and uses it to continue execution.
 Storing this stack requires space in the computer’s memory. When the
 stack grows too big, the computer will fail with a message like “out of
 stack space” or “too much recursion”. The following code illustrates this
 by asking the computer a really hard question, which causes an infinite
 back-and-forth between two functions. Rather, it would be infinite, if
 the computer had an infinite stack. As it is, we will run out of space, or
 “blow the stack”.
 */

/*
function egg()
{
    return chicken();
}
function chicken()
{
    return egg();
}

console.log(chicken() + "which came first");
*/

function squarePower(base,exponent)
{
    int_result = 1;
    if (exponent == undefined)
    {
        exponent = 2;
    }
    for(var i = 0; i < exponent; i++)
    {
        int_result *= base;
    }
    return int_result;
}
console.log(squarePower(5));//25
space();

console.log(squarePower(10,3));//1000
space();
/*
 This feature—being able to reference a specific instance of local variables
 in an enclosing function—is called closure. A function that “closes
 over” some local variables is called a closure. This behavior not only frees
 you from having to worry about lifetimes of variables but also allows for
 some creative use of function values.
 With a slight change, we can turn the previous example into a way to
 create functions that multiply by an arbitrary amount.
 */

function wrapValue(x)
{
    var local = x;

    return function(){return local;}
}

var wrap1 = wrapValue(1);

var wrap2 = wrapValue(2);

console.log(wrap1()); //1
space();

console.log(wrap2()); //2
space();

function multiplier(factor)
{
    return function(number){return number * factor;};
}

var twice = multiplier(2);

console.log(twice(5)); //10
space();
/*
 The explicit localVariable from the wrapValue example isn’t needed since
 a parameter is itself a local variable.
 Thinking about programs like this takes some practice. A good mental
 model is to think of the function keyword as “freezing” the code in its
 body and wrapping it into a package (the function value). So when you read
 return function(...){...}, think of it as returning a handle to a piece
 of computation, frozen for later use.

 In the example, multiplier returns a frozen chunk of code that gets
 stored in the twice variable. The last line then calls the value in this
 variable, causing the frozen code (return number * factor;) to be activated.
 It still has access to the factor variable from the multiplier call that
 created it, and in addition it gets access to the argument passed when
 unfreezing it, 5, through its number parameter.
 */
function powerR(base,exponent)
{
    if(exponent == 0 || exponent == undefined)
    {
        return 1;
    }
    else
    {
        return base * powerR(base,exponent -1);
    }
}

console.log(powerR(5));
space();

console.log(powerR(2,3));
space();
/*
 But recursion is not always just a less-efficient alternative to looping.
 Some problems are much easier to solve with recursion than with
 loops. Most often these are problems that require exploring or processing
 several “branches”, each of which might branch out again into more
 branches.
 Consider this puzzle: by starting from the number 1 and repeatedly
 either adding 5 or multiplying by 3, an infinite amount of new numbers
 can be produced. How would you write a function that, given a number,
 tries to find a sequence of such additions and multiplications that
 produce that number? For example, the number 13 could be reached by
 first multiplying by 3 and then adding 5 twice, whereas the number 15
 cannot be reached at all.
 Here is a recursive solution:
 */

function  findSolution(target)
{
    function find(start,history)
    {
        if(start == target)
            return history;
        if(start > target)
            return null;
        else
            return find(start + 5,"(" + history + "+ 5)") ||
                   find(start * 3, "(" + history + "* 3)");
    }
    return find(1,"1");
}

console.log(findSolution(18));
space();
/*
                            *** Growing functions ***

 There are two natural ways for functions to be introduced into programs.

 The first is that you find yourself writing very similar code multiple
 times. We want to avoid doing that since having more code means more
 space for mistakes to hide and more material to read for people trying
 to understand the program.

 So we take the repeated functionality, find
 a good propertyName for it, and put it into a function.


 The second way is that you find you need some functionality that you
 haven’t written yet and that sounds like it deserves its own function.

 You’ll start by naming the function, and you’ll then write its body. You
 might even start writing code that uses the function before you actually
 define the function itself.

 How difficult it is to find a good propertyName for a function is a good indication
 of how clear a concept it is that you’re trying to wrap.

 Write a program that prints two numbers, the numbers
 of cows and chickens on a farm, with the words Cows and Chickens after
 them, and zeros padded before both numbers so that they are always
 three digits long.
 */

function farmInventory(cows,chickens)
{
    var cowString = String(cows);
    while (cowString.length < 3)
    {
        cowString = "0" + cowString;
    }
    var chickenString = String(chickens);
    while (chickenString.length < 3)
    {
        chickenString = "0"+ chickenString;
    }
    console.log(cowString + " Cows");
    console.log(chickenString + " Chickens");
}
farmInventory(25,9);
space();
/*
 Adding .length after a string value will give us the length of that string.
 Thus, the while loops keep adding zeros in front of the number strings
 until they are at least three characters long.

 Mission accomplished! But just as we are about to send the farmer
 the code he calls and tells us he’s also started keeping pigs.
 Could we extend the software to also print pigs?
 We sure can. But just as we’re in the process of copying and pasting
 those four lines one more time, we stop and reconsider. There has to be
 a better way. Here’s a first attempt:
 */

function zeroPaddingWithLabel(number,label)
{
    var numberString = String(number);
    while (numberString.length < 3)
    {
        numberString = "0" + numberString;
    }
    console.log(numberString + " " + label);
}

function printFarmInventory(cows,chickens,pigs)
{
    zeroPaddingWithLabel(cows,"Cows");
    zeroPaddingWithLabel(chickens,"Chickens");
    zeroPaddingWithLabel(pigs, "Pigs");
}

printFarmInventory(25,9,101);
space();

function zeroPadding(number,width)
{
    var numberString = String(number);
    while(numberString.length < width)
    {
        numberString = "0" + numberString;
    }
    return numberString
}

function printFarmInventoryV2(cows,chickens,pigs)
{
    console.log(zeroPadding(cows,3) + " Cows");
    console.log(zeroPadding(chickens,3) + " Chickens");
    console.log(zeroPadding(pigs,3) + " Pigs");
}

printFarmInventoryV2(8,45,123);
space();
/*
                                        *** Exercises ***

 Minimum:
 The previous chapter introduced the standard function Math.min that returns
 its smallest argument. We can do that ourselves now. Write a
 function min that takes two arguments and returns their minimum.
 */

function minValue(valueA, valueB)
{
    if(valueA > valueB)
    {
        return valueB;
    }
    else
    {
        return valueA;
    }
}

console.log(minValue("art","Zebra")); // Zebra (Because uppercase has smaller value than lowercase)
space();

console.log(minValue(25,10));  // 10
space();
/*
 Recursion:
 We’ve seen that % (the remainder operator) can be used to test whether
 a number is even or odd by using % 2 to check whether it’s divisible by
 two.

 Use Recursion to define whether a positive whole number is even or odd:
 • Zero is even.
 • One is odd.
 • For any other number N, its evenness = N - 2.

 Define a recursive function "isEven", corresponding to this description.
 The function should accept a number parameter and return a Boolean.
 Test it on 50 and 75. See how it behaves on -1. Why? Can you think
 of a way to fix this?
 */

function isEven(testNumber)
{
    var oddString = "This Number Is ODD!!";
    var evenString = "This Number Is EVEN!!";
    var numIsEven = true;
    if(testNumber >= 0)
    {
        if (testNumber != 0)
        {
            if (testNumber == 1)
                console.log(oddString);
            else
               isEven(testNumber - 2);
        }
        else
            console.log(evenString);
    }
    else {
        if (testNumber != -1)
            isEven(testNumber + 2);
        else
            console.log(oddString);
    }
}

isEven(-5);
space();

isEven(5);
space();

isEven(-4);
space();

isEven(4);
space();
/*
 Bean counting

 You can get the Nth character, or letter, from a string by writing "string".
 charAt(N), similar to how you get its length with "s".length. The returned
 value will be a string containing only one character (for example, "b"
 ). The first character has position zero, which causes the last one to
 be found at position string.length - 1. In other words, a two-character
 string has length 2, and its characters have positions 0 and 1.

 Write a function countBs that takes a string as its only argument and
 returns a number that indicates how many uppercase “B” characters are
 in the string.
 */
function countBs(word)
{
    var counter = 0;
    for(var i = 0; i < word.length; i++)
    {
        if(word.charAt(i) == "B")
        {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BoBby")); // 2
space();
/*
 Next, write a function called countChar that behaves like countBs, except
 it takes a second argument that indicates the character that is to be
 counted (rather than counting only uppercase “B” characters). Rewrite
 countBs to make use of this new function.
 */
function  countChar(word,letter1,letter2)
{
    var counter1 = 0;
    var counter2 = 0;
    for(var i = 0; i < word.length; i++)
    {
        if(word.charAt(i) === letter1)
        {
            counter1++;
        }
    }
    if(letter2 != undefined)
    {
        for (var i = 0; i < word.length; i++)
        {
            if (word.charAt(i) === letter2)
            {
                counter2++;
            }
        }
    }
    if (counter1 == 1 && counter2 == 1)
    {
        return "There is " + String(counter1) + " letter (" + letter1 + ") and "+ String(counter2) + " letter (" + letter2 + "), in the string \"" + word + '".\n';
    }
    else if (counter1 == 0 && counter2 == 1)
    {
        return "There is " + String(counter1) + " letter (" + letter1 + ")'s and "+ String(counter2) + " letter" + letter2 + ' in the string "' + word + '".\n';
    }
    else if (counter1 != 1 && letter2 == undefined)
    {
        return "There are " + String(counter1) + " letter (" + letter1 + ")'s, in the string " + word + ".\n";
    }
    else if (counter1 == 1 && letter2 == undefined)
    {
        return "There is " + String(counter1) + " letter (" + letter1 + "), in the string '" + word + "'.\n";
    }
    else
    {
        return "There are " + String(counter1) + " letter (" + letter1 + ")\'s and "+ String(counter2) + " letter (" + letter2 + ')\'s, in the string "' + word + '".\n';
    }
}
console.log(countChar("Mississippi River","M"));
console.log(countChar("Mississippi River","m"));
console.log(countChar("Mississippi River","o"));
console.log(countChar("Mississippi River","int_i"));
console.log(countChar("Mississippi River","e","v"));
console.log(countChar("Mississippi River","s","p"));
console.log(countChar("Mississippi River","M","p"));
console.log(countChar("Mississippi River","p","e"));

/*
 Data sets

 To work with a chunk of digital data, we’ll first have to find a way to
 represent it in our machine’s memory. Say, as a simple example, that we
 want to represent a collection of numbers: 2, 3, 5, 7, and 11.
 We could get creative with strings—after all, strings can be any length,
 so we can put a lot of data into them—and use "2 3 5 7 11" as our representation.
 But this is awkward. You’d have to somehow extract the
 digits and convert them back to numbers to access them.

 Fortunately, JavaScript provides a data type specifically for storing
 sequences of values. It is called an arrayNums and is written as a list of values
 between square brackets, separated by commas.
 */

var listOfNumbers = [1,33,6,26,89];

console.log(listOfNumbers[2]); // 6
space();

console.log(listOfNumbers["length"]); // 5
space();

console.log(listOfNumbers.length);  // 5
space();
/*
 Methods
 Both string and arrayNums objects contain, in addition to the length property,
 a number of properties that refer to function values.
 */

var word = "Snap";

console.log(typeof word.toUpperCase); // function  **What it is
space();

console.log(typeof word.toUpperCase()); // string  **What it produces
space();

console.log(word.toUpperCase()); // SNAP  **The product
space();
/*
 Every string has a toUpperCase property. When called, it will return a
 copy of the string, in which all letters have been converted to uppercase.
 There is also toLowerCase. You can guess what that does.
 Interestingly, even though the call to toUpperCase does not pass any
 arguments, the function somehow has access to the string "Doh".

 Properties that contain functions are generally called methods of the
 value they belong to.

 As in, “toUpperCase is a method of a string”.
 This example demonstrates some methods that arrayNums objects have:
 */

var mack = [];

mack.push("Mack");
mack.push("the","knife");

console.log(mack); // ['Mack', 'the', 'knife']
space();

console.log(mack.join(" ")); // Mack the knife
space();

console.log(mack.pop()); // knife
space();

console.log(mack); // ['Mack', 'the']
space();
/*
 The push method can be used to add values to the end of an arrayNums. The
 pop method does the opposite: it removes the value at the end of the
 arrayNums and returns it. An arrayNums of strings can be flattened to a single
 string with the join method. The argument given to join determines the
 text that is glued between the arrayNums’s elements.
 */


/*
                            *** Objects ***

 A set of daily log entries can be represented as
 an arrayNums. But the entries do not consist of just a number or a string—
 each entry needs to store a list of activities and a Boolean value that
 indicates whether Jacques turned into a squirrel. Ideally, we would like
 to group these values together into a single value and then put these
 grouped values into an arrayNums of log entries.
 Values of the type object are arbitrary collections of properties, and we
 can add or remove these properties as we please. One way to create an
 object is by using a curly brace notation.
 */

var day1 =
    {
       squirrel: false,
       events: ["work","touched tree", "pizza", "running","television"]
    };

console.log(day1.squirrel); // false
space();

console.log(day1.wolf); // undefined
space();

day1.wolf = false;

console.log(day1.wolf); // false
space();
/*
 Inside the curly braces, we can give a list of properties separated by
 commas.

 Each property is written as a propertyName, followed by a colon, followed
 by an expression that provides a value for the property.

 Spaces and line breaks are not significant.

 When an object spans multiple lines,
 indenting it like in the previous example improves readability.

 Properties whose names are not valid variable names or valid numbers
 have to be quoted.

 To briefly return to our tentacle model of variable bindings—property
 bindings are similar. They grasp values, but other variables and properties
 might be holding onto those same values. You may think of objects
 as octopuses with any number of tentacles, each of which has a propertyName
 inscribed on it.
 */

var description =
    {
     work: "Went to work",
        "touched a tree": "Touched a tree"
    };

/*
 This means that curly braces have two meanings in JavaScript. At the
 start of a statement, they start a block of statements. In any other
 position, they describe an object.

 */

/*
 The delete operator cuts off a tentacle from such an octopus. It is a
 unary operator that, when applied to a property access expression, will
 remove the named property from the object. This is not a common thing
 to do, but it is possible.
 */
var anObject = {left: 1, right: 2};

console.log(anObject.left); // 1
space();

delete anObject.left;  // Deletes property 'left', not just its value.

console.log(anObject.left); // undefined
space();

console.log("left" in anObject); // false
space();

console.log("right" in anObject); // true
space();
/*
 The binary 'in' operator, when applied to a string and an object, returns a
 Boolean value that indicates whether that object has that property.

 The difference between setting a property to undefined and actually deleting it
 is that, in the first case, the object still has the property (it just doesn’t
 have a very interesting value), whereas in the second case the property
 is no longer present and in will return false.
 */

/*
 Arrays, are types of objects specialized for storing sequences
 of things.

 If you evaluate typeof [1, 2], this produces "object". You can
 see them as long, flat octopuses with all their arms in a neat arrayObjects_Row, labeled
 with numbers.
 */

var nums = [1,2];

console.log(typeof nums); // object **Arrays are a type of object.

/*
                            *** Mutability ***

 We’ve seen that object values can be modified. The types of values
 discussed in earlier chapters, such as numbers, strings, and Booleans,
 are all immutable—it is impossible to change an existing value of those
 types. You can combine them and derive new values from them, but
 when you take a specific string value, that value will always remain the
 same. The text inside it cannot be changed.

 When we have two numbers, 120 and 120, we can consider them precisely
 the same number, whether or not they refer to the same physical
 bits. But with objects, there is a difference between having two references
 to the same object and having two different objects that contain
 the same properties. Consider the following code:
 */

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);// true
space();

console.log(object1 == object3);// false
space();

object1.value = 20;

console.log(object2.value);// 20
space();

object2["value"] = 30;

console.log(object1.value);// 30
space();
/*
 Represent Jacques’ journal as an arrayNums of objects.
 */

var journal1 =
    [
        {
            events: ["work","touched tree","pizza","running","television"],
            squirrel: false
        },
        {
            events: ["work","ice cream","cauliflower","lasagna","touched tree","brush teeth"],
            squirrel: false
        },
        {
            events: ["weekend","cycling","break","peanuts","beer"],
            squirrel: true
        }
    ];

function addEntry(events,transformation)
{
    journal1.push({events: events, squirrel: transformation});
}

addEntry(["work","ice cream","brushed teeth"],false);


var Journal = [
    {
        "events":["carrot","exercise","weekend"],
        "squirrel":false
    },
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false}, // false no pizza
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];



/*
 Correlation is a measure of dependence between variables (“variables”
 in the statistical sense, not the JavaScript sense). It is usually expressed
 as a coefficient that ranges from -1 to 1.

 Zero correlation means the variables are not related, whereas a correlation of one indicates that the
 two are perfectly related—if you know one, you also know the other.

 Negative one also means that the variables are perfectly related but that
 they are opposites—when one is true, the other is false.

 For binary (Boolean: 0 = false/off or 1 = true/on) variables, the phi coefficient (φ) provides a good
 measure of correlation and is relatively easy to compute.

 To compute φ, we need a table n that contains the number of times the various
 combinations of the two variables were observed. For example, we could
 take the event of eating pizza and put that in a table like this:

 no pizza, no tran = 76
 no pizza, tran = 4
 pizza, no tran = 9
 pizza, tran = 1

 φ can be computed using the following formula, where var1 refers to the 1st value of a paired sign
 and var2 refers to the 2nd value of the pair. where values: + = true and - = false.

 table:
 φ = (++ * --) - (+- * -+) / srt(++ + +-) * (-- + -+) * ( ++ + -+) * (-- + +-)

 */
function phi(table)
{
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) *
                  (table[1] + table[3]) * (table[0] + table[2]));
}
//table[0] = var1(transformation) = false & var2(event) = false
//table[1] = var1(transformation) = false & var2(event) = true
//table[2] = var1(transformation) = true & var2(event) = false
//table[3] = var1(transformation) = true & var2(event) = true

console.log(phi([76,9,4,1]));
space();
/*
 Jacques kept his journal for three months.
 It is stored in the JOURNAL variable.
 To extract a two-by-two table for a specific event from this journal, we
 must loop over all the entries and tally up how many times the event
 occurs in relation to squirrel transformations.
 */

// function to search an individual journal entry's 'event' property, for an instance of event.
function hasEvent(event,entry)
{// returns index of the matching 'event' if found, or -1 if not found.
    return entry.events.indexOf(event) != -1;
}

//function to create the arrayNums-object, which contains 4 properties(--,-+,+-,++)
//for use as the parameter of the phi coefficient function
//To ascertain the the probability that the event causes
// transformation "1.0" or counters the transformation "-1.0"
function tableFor(event,journal)
{
    //declaring and initializing an arrayNums-object.
    var table = [0,0,0,0];

    // A loop to run through the Journal, which holds
    // 90 days of event and transformation information.
    for (var i = 0; i < journal.length; i++)
    {
        // to declare and initialize an object to store an individual Journal["day"]
        var entry = journal[i];

        //  int value-data-type, used as the marker to select
        // which of the table's property to increase by 1.
        var index = 0;

        // A branching statement that uses the event in question and a day
        // of the Journal's event entries as, arguments to the parameters.
        if (hasEvent(event,entry))
        {// if event is found, marker moves 1.
            index += 1;
        }
        // if transformation is found, marker moves 2.
        if (entry.squirrel)
            index += 2;

// a    //For each loop iteration, a single tally mark is added to the Table property
        // with the same index as the marker("index")'s value.
        table[index] += 1;
    }
    // Once loop is complete the arrayNums-object named 'table'
    // is returned to the function call
    return table;
}

console.log(tableFor("pizza",Journal)); // [ 76, 9, 4, 1 ]
space();

console.log(phi(tableFor("pizza",Journal))); // 0.06859943405700345
space();
/*
 We now have the tools we need to compute individual correlations.
 The only step remaining is to find a correlation for every type of event
 that was recorded and see whether anything stands out. But how should
 we store these correlations once we compute them?
 */

/*
                                *** Objects as maps ***

 One possible way is to store all the correlations in an arrayNums, using objects
 with propertyName and value properties. But that makes looking up the correlation
 for a given event somewhat cumbersome: you’d have to loop over the
 whole arrayNums to find the object with the right propertyName. We could wrap this
 lookup process in a function, but we would still be writing more code,
 and the computer would be doing more work than necessary.
 A better way is to use object properties named after the event types.
 We can use the square bracket access notation to create and read the
 properties and can use the in operator to test whether a given property
 exists.
 */

var map1 = {};

function storePhi(event,phi)
{
  map1[event]= phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

console.log("pizza" in map);  // true
space();

console.log(map["touched tree"]);  // -0.81
space();

/*
 What if we want to find all the events for which we have stored a
 coefficient? The properties don’t form a predictable series, like they
 would in an arrayNums, so we cannot use a normal for loop. JavaScript
 provides a loop construct specifically for going over the properties of
 an object. It looks a little like a normal for loop but distinguishes itself
 by the use of the word 'in'.
 */
for(var event in map1)
{
    console.log("The correlation for '" + event + "' is " + map[event]);
}
space();

/*
 The final analysis
 To find all the types of events that are present in the data set, we simply
 process each entry in turn and then loop over the events in that entry.
 We keep an object phis that has correlation coefficients for all the event
 types we have seen so far. Whenever we run across a type that isn’t in
 the phis object yet, we compute its correlation and add it to the object.
 */

function gatherCorrelations(journal)
{
    var phis = {};

    for(var entry = 0; entry < journal.length; entry ++)
    {
        var events = journal[entry].events;

        for (var i = 0; i < events.length; i++)
        {
            var event = events[i];

            if (!(event in phis))
            {
                phis[event] = phi(tableFor(event, journal));
            }
        }
    }
    return phis;
}

var correlations = gatherCorrelations(Journal);

console.log(correlations.pizza);
space();

for(var event in correlations)
    console.log(event + ": " + correlations[event]);


/*
 Most correlations seem to lie close to zero. Eating carrots, bread, or
 pudding apparently does not trigger squirrel-lycanthropy. It does seem
 to occur somewhat more often on weekends, however. Let’s filter the
 results to show only correlations greater than 0.1 or less than -0.1.
 */
space();
console.log("-----------------------------------------------------");
space();

for(var event in correlations)
{
    var correlation = correlations[event];

    if(correlation > 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);
}
space();
/*
 A-ha! There are two factors whose correlation is clearly stronger than
 the others. Eating peanuts has a strong positive effect on the chance
 of turning into a squirrel, whereas brushing his teeth has a significant
 negative effect.
 Interesting. Let’s try something.
 */

for(var i = 0; i < Journal.length; i++) {
    var entry = Journal[i];

    if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
        entry.events.push("peanut teeth");
}
space();
console.log("-----------------------------------------------------");
space();

console.log(phi(tableFor("peanut teeth", Journal)));
space();
/*
 More generally useful arrayNums methods.
 We saw push and pop, which add and remove elements at the end of
 an arrayNums, earlier in this chapter. The corresponding methods for adding
 and removing things at the start of an arrayNums are called unshift and shift.
 */
/*
push adds to top
unshift adds to bottom
pop takes from top
shift takes from bottom
 */
var toDoList = [];

RememberToDo("brush teeth");
RememberToDo("shower");
RememberToDo("eat");



console.log(WhatIsNext()); // brush teeth
space();

console.log(WhatIsNext()); // shower
space();

UrgentToDo("Call Z");

console.log(WhatIsNext()); // Call Z (Not: eat)
space();

function WhatIsNext()
{
    return toDoList.shift();
}

function  RememberToDo(task)
{
    toDoList.push(task);
}

function UrgentToDo(task)
{
    toDoList.unshift(task);
}


/*
 The previous program manages lists of tasks. You add tasks to the
 end of the list by calling rememberTo("eat"), and when you’re ready to do
 something, you call whatIsNext() to get (and remove) the front item from
 the list. The urgentlyRememberTo function also adds a task but adds it to
 the front instead of the back of the list.
 */

/*
 The indexOf method has a sibling called lastIndexOf, which starts searching
 for the given element at the end of the arrayNums instead of the front.

 Both indexOf and lastIndexOf take an optional second argument that indicates
 where to start searching from.
 */

var words = ["the","cat","in","the","hat"];
var numbers = [9,8,9,6,9];


console.log(words.indexOf("dog")); // -1
space();

console.log(words.indexOf("the")); // 0
space();

console.log(words.lastIndexOf("the")); // 3
space();

console.log(numbers.indexOf(9)); // 0
space();

console.log(numbers.indexOf(9,1)); // searching from index 1: // 2
space();

console.log(numbers.lastIndexOf(9)); // 4
space();
/*
 Another fundamental method is slice, which takes a start index and
 an end index and returns an arrayNums that has only the elements between
 those indices. The start index is inclusive, the end index exclusive.

 When the end index is not given, slice will take all of the elements after
 the start index. Strings also have a slice method, which has a similar
 effect.
 */

numbers = [5,6,7,8,9,10];

console.log(numbers.slice(1,3)); // [ 6, 7 ]
space();

console.log(numbers.slice(2)); // [ 7, 8, 9, 10 ]
space();
/*
 The concat method can be used to glue arrays together, similar to what
 the + operator does for strings. The following example shows both concat
 and slice in action. It takes an arrayNums and an index, and it returns a new
 arrayNums that is a copy of the original arrayNums with the element at the given
 index removed.
 */
var sentenceArray = ["Is this","the very","last","first","time?"];

console.log(Remove(sentenceArray,2)); // [ 'Is this', 'the very', 'first', 'time?' ]
space();

console.log(Remove(sentenceArray,3)); // [ 'Is this', 'the very', 'last', 'time?' ]
space();

function  Remove(array,index)
{
   return array.slice(0, index).concat(array.slice(index + 1));
}
/*
                        Strings and their properties
 We can read properties like length and toUpperCase from string values. But
 if you try to add a new property, it doesn’t stick.
 */

var aString = "Hello buddy";

aString.myProperty = "value";

console.log(aString.myProperty); // undefined
space();
/*
 Values of type string, number, and Boolean are not objects, and though
 the language doesn’t complain if you try to set new properties on them,
 it doesn’t actually store those properties. The values are immutable and
 cannot be changed.
 */
/*
 HOWEVER!!! These types DO have some built-in properties. Every string value
 has a number of methods. The most useful ones are probably slice and
 indexOf, which resemble the arrayNums methods of the same propertyName.
 */

var fruitString = "coconutso";

console.log(fruitString.slice(4,7)); // nut
space();

console.log(fruitString.slice(0,4)); // Coco
space();

console.log(fruitString.indexOf("o")); // 1
space();

console.log(fruitString.lastIndexOf("o")); // 8
space();

console.log(fruitString.indexOf("o",2)); // 3
space();

/*
 One difference is that a string’s indexOf can take a string containing more
 than one character, whereas the corresponding arrayNums method looks only
 for a single element.
 */

var numListString = "One, two, three!";

console.log(numListString.indexOf("ee")); //13
space();
/*
 The trim method removes whitespace (spaces, newlines, tabs, and similar
 characters) from the start and end of a string.
 */

var dirtyString ="\tAsk yourself, do I feel lucky? Well do you, punk?!\n";

console.log(dirtyString);
space();

console.log(dirtyString.trim());
space();
/*
 We have already seen the string type’s 'length' property. Accessing the
 individual characters in a string can be done with the 'charAt' method but
 also by simply reading numeric properties, like you’d do for an arrayNums.
 */

var alphaString = "abc";

console.log(alphaString.length); // 3
space();

console.log(alphaString.indexOf("a")); // 0   ***LOOK
space();

console.log(alphaString.charAt(0)); // a      ***LOOK
space();

console.log(alphaString[0]); // a
space();

/*
                        *** The arguments object ***

 Whenever a function is called, a special variable named arguments is added
 to the environment in which the function body runs. This variable refers
 to an object that holds all of the arguments passed to the function.
 Remember that in JavaScript you are allowed to pass more (or fewer)
 arguments to a function than the number of parameters the function
 itself declares.
 */
Arguments();  // this is ok.
space();

NoArguments(1,2,3); // this is ok.
space();

function Arguments(a,b,c)
{
    console.log("this is ok.");
}

function NoArguments()
{
    console.log("this is ok.");
}


/*
 The 'arguments' object has a 'length' property that tells us the 'number of
 arguments' that were really passed to the function. It also has a property
 for each argument, named '0, 1, 2,' and so on.

 If that sounds a lot like an arrayNums to you, you’re right, it is a lot like an
 arrayNums. But this object, unfortunately, does not have any arrayNums methods
 (like slice or indexOf), so it is a little harder to use than a real arrayNums.
 */
ArgumentCounter("Alpha", 2, NoArguments(), alphaString, sentenceArray );

function  ArgumentCounter()
{
    console.log("You gave me", arguments.length, "arguments."); // You gave me 5 arguments.
    console.log("You gave me " + arguments.length + " arguments."); // You gave me 5 arguments.
}

space();

/*
 Some functions can take any number of arguments, like console.log.
 These typically loop over the values in their arguments object. They can
 be used to create very pleasant interfaces. For example, remember how
 we created the entries to Jacques’ journal?
 */

AddJournalEntry(["work","gym","sleep"],false);

function AddJournalEntry(events,transformation)
{
    Journal.push({events: events, squirrel: transformation} );
}


space();
/*
 Since he is going to be calling this function a lot, we could create an
 alternative that is easier to call.
 */

/*
 This version reads its first argument (squirrel) in the normal way and
 then goes over the rest of the arguments (the loop starts at index 1,
 skipping the first) to gather them into an arrayNums.
 */
AddEntryToJournal(false, "sleep", "beans", "running");

function AddEntryToJournal(squirrel)
{
    var entry = {events: [], squirrel: squirrel};

    for(var i = 1; i < arguments.length; i++)
    {
        entry.events.push(arguments[i]);
    }
    Journal.push(entry);
}

/*
                                    The Math object

 As we’ve seen, Math is a grab-bag of number-related utility functions,
 such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square
 root).

 The Math object is used simply as a container to group a bunch of related functionality.

 There is only one Math object, and it is almost never useful as a value.

 Rather, it provides a namespace so that all these functions
 and values do not have to be global variables.

 Having too many global variables “pollutes” the namespace.

 The more names that have been taken, the more likely you are to accidentally overwrite the value of some variable.

 For example, it’s possible that you’ll want to propertyName something 'max', in one of your programs.

 Since JavaScript’s built-in 'max' function is tucked safely inside the 'Math' object,
 we don’t have to worry about overwriting it.

 Many languages will stop you, or at least warn you, when you are
 defining a variable with a propertyName that is already taken. ***JavaScript does neither, so be careful.***

                        *** If you need to do trigonometry, Math can help. ***

 It contains cos (cosine), sin (sine), and tan (tangent), as well as their
 inverse functions, acos, asin, and atan, respectively.

 The number 'pi' or at least the closest approximation that fits in a JavaScript number—is
 available as Math.PI. (There is an old programming tradition of writing the names of constant values in all caps.)

 */
console.log(randomPointOnACircle(2)); // { x: -1.3065238835706443, y: 1.5142639603647317 }

function randomPointOnACircle(radius)
{
    var angle = Math.random() * 2 * Math.PI;

    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)}
}


space();
/*
 Math.random. This is a function that returns a
 new pseudo-random number between zero (inclusive) and one (exclusive)
 every time you call it.
 */

console.log(Math.random());
space();

console.log(Math.random());
space();
/*
 Though computers are deterministic machines—they always react the
 same way if given the same input—it is possible to have them produce
 numbers that appear random.

 To do this, the machine keeps a number
 (or a bunch of numbers) in its internal state. Then, every time a
 random number is requested, it performs some complicated deterministic
 computations on this internal state and returns part of the result of
 those computations.

 The machine also uses the outcome to change its
 own internal state so that the next “random” number produced will be
 different.

 If we want a whole random number instead of a fractional one, we can
 use Math.floor (which rounds down to the nearest whole number) on the
 result of Math.random.
 */

// Round down
console.log(Math.floor(Math.random() * 10));
space();

console.log(Math.floor(Math.random() * 10));
space();

/*
 Multiplying the random number by 10 gives us a number greater than
 or equal to zero, and below 10. Since Math.floor rounds down, this expression
 will produce, with equal chance, any number from 0 through 9.

 There are also the functions Math.ceil (for “ceiling”, which rounds up
 to a whole number) and Math.round (to the nearest whole number).
 */

// Round Up
console.log(Math.ceil(Math.random() * 10 ));
space();

// Round Nearest
console.log(Math.round(Math.random() * 10));
space();
/*
                                        The global object

 The global scope, the space in which global variables live, can also be
 approached as an object in JavaScript.

 Each global variable is present as a property of this object.

 In browsers, the global scope object is stored in the 'window' variable.
 */

var myVar = 10;

//console.log(window.myVar); // 10
//console.log("myVar" in window); //true

/*
                               *** Summary ***

 Objects and arrays (which are a specific kind of object) provide ways
 to group several values into a single value.

 Conceptually, this allows us to put a bunch of related things in a bag and
 run around with the bag, instead of trying to wrap our arms around all of the
 individual things and trying to hold on to them separately.

 Most values in JavaScript have properties, the exceptions being null
 and undefined.

 Properties are accessed using value.propName or value["
 propName"].

 Objects tend to use names for their properties and store
 more or less a fixed set of them.

 Arrays, on the other hand, usually contain
 varying numbers of conceptually identical values and use numbers
 (starting from 0) as the names of their properties.

 There are some named properties in arrays, such as length and a number
 of methods.

 Methods are functions that live in properties and (usually)
 act on the value they are a property of.

 Objects can also serve as maps, associating values with names.

 The 'in' operator can be used to find out whether an 'object' contains a 'property'
 with a 'given propertyName'.

 The same keyword can also be used in a for loop
 (for ('var propertyName' in 'object')) to loop over an object’s properties.
 */

/*
                                                    *** Exercises ***
 The sum of a range:

 The introduction of this book alluded to the following as a nice way to
 compute the sum of a range of numbers: console.log(sum(range(1 , 10)));

 Write a range function that takes two arguments, start and end, and
 returns an arrayNums containing all the numbers from start up to (and including)
 end.

 Next, write a sum function that takes an arrayNums of numbers and returns
 the sum of these numbers.

 Run the previous program and see whether
 it does indeed return 55.

 As a bonus assignment, modify your 'range' function to take an optional
 third argument that indicates the “step” value used to build up the
 arrayNums.

 If no step is given, the arrayNums elements go up by increments of
 one, corresponding to the old behavior.

 The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].

 Make sure it also works with negative step
 values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

console.log(rangeArray(1,10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
space();

console.log(rangeArray(1,10,2)); // [ 1, 3, 5, 7, 9, ]
space();

console.log(rangeArray(1,10,-2)); // If beginning number is less than ending number.
                                  // Step must be 0 or a positive number.
space();

console.log(rangeArray(5,50,5)); // [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
space();

console.log(rangeArray(50,5,-5)); // [ 50, 45, .... , 5 ]
space();

console.log(rangeArray(50,5,5)); // If beginning number is greater than ending number.
space();                         // Step must be 0 or a negative number.

console.log(sumOfArray(rangeArray(1,10))); // 55
space();

console.log(sumOfArray(rangeArray(1,10,2))); // 25
space();

console.log(sumOfArray(rangeArray(1,10,-2))); // If beginning number is less than ending number.
                                              // Step must be 0 or a positive number.
space();

console.log(sumOfArray(rangeArray(5,50,5))); // 275
space();

console.log(sumOfArray(rangeArray(50,5,-5))); // 275
space();

console.log(sumOfArray(rangeArray(50,5,5))); // If beginning number is greater than ending number.
                                             // Step must be 0 or a negative number.
space();

function rangeArray(beginning,end,step)
{
    var arrayOfNumbers = [];
    var message = "";

    if (beginning <= end )
    {
        while (beginning <= end)
        {
            arrayOfNumbers.push(beginning);

            if (step > 0)
            {
                beginning += step;
            }
            else if(step < 0)
            {
                 message = "If beginning number is less than ending number.\nStep must be 0 or a positive number";
                 beginning = end + 1;
            }
        else
            {
                beginning++;
            }
        }
    }
    else
    {
        while (beginning >= end)
        {
            arrayOfNumbers.push(beginning);

            if (step < 0)
            {
                beginning += step;
            }
            else if(step > 0)
            {
                message = "If beginning number is greater than ending number.\nStep must be 0 or a negative number.";
                beginning = end -1;
            }
            else
            {
                beginning--;
            }
        }
    }

    if(message != "")
    {
        return message;
    }
    else
    {
        return arrayOfNumbers;
    }
}

function sumOfArray(array)
{
    var message = "";
    var sum = 0;

    for(var i = 0; i < array.length; i++)
    {
            sum += array[i];
    }
    if(isNaN(sum))
    {
        message = array;
        return message;
    }
    else
    {
        return sum;
    }
}

/*
                                *** Reversing an arrayNums ***

 Arrays have a method 'reverse', which changes the arrayNums by inverting the
 order in which its elements appear.

 For this exercise, write two functions, reverseArray and reverseArrayInPlace.

 The first, reverseArray, takes an arrayNums as argument and produces a
 new arrayNums that has the same elements in the inverse order.

 The second, reverseArrayInPlace, does what the reverse method does:
 it modifies the arrayNums given as argument in order to reverse
 its elements.

 Neither may use the standard reverse method.

 Thinking back to the notes about side effects and pure functions in
 the previous chapter, which variant do you expect to be useful in more
 situations? Which one is more efficient?
 */

// Global variable.
var myArray = [0,1,2,3,4,5];

reverseArray(myArray);
console.log(myArray);
space();

reverseArrayInPlace(myArray);
console.log(myArray);
space();

function reverseArray(array)
{
    var reverseArray = [];

    for(var i = 0; i < array.length; i++)
    {
        reverseArray.unshift(array[i]);
    }

  console.log(reverseArray);
}

function reverseArrayInPlace(array)
{
    var reverseArray = [];

    for(var i = 0; i <= array.length;)
    {
        reverseArray.push(array.pop());
        
        if(array.length == 0)
        {
            i++;
        }
    }

    myArray = reverseArray;
    console.log(reverseArray);
}


/*
                                        A list

 Objects, as generic blobs of values, can be used to build all sorts of data
 structures. A common data structure is the list (not to be confused with
 the arrayNums).

 A list is a nested set of objects, with the first object holding
 a reference to the second, the second to the third, and so on.
 */

var list = {
            value: 1,
            reference: {
                        value: 2,
                        reference: {
                                    value: 3,
                                    reference: null
                                   }
                        }
            };
/*
 A nice thing about lists is that they can share parts of their structure.
 For example, if I create two new values {value: 0, rest: list} and {value:
 -1, rest: list} (with list referring to the variable defined earlier),
 they are both independent lists, but they share the structure that makes up
 their last three elements. In addition, the original list is also still a valid
 three-element list.

 Write a function arrayToList that builds up a data structure like the
 previous one when given [1,2,3] as argument.
*/

var theArray = [1,2,3];


console.log(arrayToList(theArray));
space();

console.log(listToArray(arrayToList(theArray)));
space();

console.log(prepend(0,arrayToList(theArray)));
space();

console.log(nth(arrayToList(theArray),4));
space();

 function arrayToList(array)
 {
    var list = null;

    for (var i = array.length - 1; i >= 0; i--)
    {
        list = {value: array[i], reference: list};
    }

    return list;
 }
 /*

 Write a list-To-Array function that produces an arrayNums from a list.
 */
 function listToArray(list)
 {
    var array = [];

    for (var node = list; node; node = node.reference)
    {
        array.push(node.value);
    }
    return array;
}
 /*
 Write a helper function 'prepend', which takes an element and a list and creates a new
 list that adds the element to the front of the input list,
*/
 function prepend(value, list)
 {
        return {value: value, reference: list};
 }
 /*
 Write a helper function 'nth', which takes a list and a number and
 returns the element at the given position
 in the list, or undefined when there is no such element.
 If you haven’t already, also write a recursive version of nth.
 */
function nth(list, n)
{
    if (!list)
    {
        return undefined;
    }
    else if (n == 0)
    {
        return list.value;
    }
    else
    {
        return nth(list.reference, n - 1);
    }
}

/*
                        Deep comparison
 The == operator compares objects by identity. But sometimes, you would
 prefer to compare the values of their actual properties.

 Write a function, deepEqual, that takes two values and returns true only
 if they are the same value or are objects with the same properties whose
 values are also equal when compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the ===
 operator for that) or by looking at their properties, you can use the
 typeof operator.

 If it produces "object" for both values, you should do a
 deep comparison. But you have to take one silly exception into account:
 by a historical accident, typeof null also produces "object".
 */
var obj = {
           here: {
                  is: "an"
                 },
           object: 2
          };
var obj2 = obj;

console.log(deepEqual(2,2)); // true
space();

console.log(deepEqual(2,"2"));  // false
space();

console.log(deepEqual(obj, obj2));  // → true
space();

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));  // → true
space();

console.log(deepEqual(obj, {here: {is: 1}, object: 2}));  // → false
space();

console.log(deepEqual(obj, {here: {is: "an"}, object: "2"})); // false
space();

function deepEqual(a, b)
{


    if (a === b)
    {
        return true;
    }

    if (a == null || typeof a != "object" || b == null || typeof b != "object")
    {
        return false;
    }

    var propsInA = 0;
    var propsInB = 0;

    for (var prop in a)
    {
        propsInA += 1;
    }

    for (prop in b)
    {
        propsInB += 1;

        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
        {
            return false;
        }
    }
    return propsInA == propsInB;
}

/*
                            *** Higher-Order Functions ***

 A large program is a costly program, and not just because of the time it
 takes to build. Size almost always involves complexity, and complexity
 confuses programmers. Confused programmers, in turn, tend to introduce
 mistakes (bugs) into programs. A large program also provides a lot
 of space for these bugs to hide, making them hard to find.
 Let’s briefly go back to the final two example programs in the introduction.
 The first is self-contained and six lines long.
 */

var total = 0;
var count = 0;

while( count <= 10)
{
    total += count;
    count += 1;
}

console.log('The sum of 1 through 10 is:',total); // The sum of 1 through 10 is: 55
space();
/*
 The second relies on two external functions and is one line long.
 */
console.log(range1(1, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
space();

console.log('The sum of 1 through 10 is:',sum1(range1(1, 10))); // The sum of 1 through 10 is: 55
space();

// alternative code, with identical output to the console as the code from the line above.
console.log('The sum of 1 through 10 is: ' + sum1(range1(10, 1))); // The sum of 1 through 10 is: 55
space();

function range1(x,y)
    {
        var range = [];

        if (x < y) 
        {
            while (x <= y) 
            {
                range.push(x);
                x += 1;
            }
        }
        else if (x > y) 
        {
            while (x >= y) 
            {
                range.push(x);
                x -= 1;
            }
        }
        else 
        {
            range.push(0);
        }

        return range;
    }

function sum1(numbers)
    {
        var total = 0;

        for (var i = 0; i < numbers.length; i++) 
        {
            total += numbers[i];
        }

        return total;
    }

    /*
     Which one is more likely to contain a bug?

     If we count the size of the definitions of sum and range, the second
     program is also big—even bigger than the first. But still, I’d argue that
     it is more likely to be correct.

     It is more likely to be correct because the solution is expressed in a
     vocabulary that corresponds to the problem being solved. Summing a
     range of numbers isn’t about loops and counters. It is about ranges and
     sums.

     The definitions of this vocabulary (the functions sum and range) will still
     involve loops, counters, and other incidental details. But because they
     are expressing simpler concepts than the program as a whole, they are
     easier to get right.
     */

    /*
     							*** Abstraction ***

     In the context of programming, these kinds of vocabularies are usually
     called abstractions.

     Abstractions hide details and give us the ability to
     talk about problems at a higher (or more abstract) level.

     As an analogy, compare these two recipes for pea soup:

     Put 1 cup of dried peas per person into a container.
     Add water until the peas are well covered.
     Leave the peas in water for at least 12 hours.
     Take the peas out of the water and put them in a cooking pan.
     Add 4 cups of water per person.
     Cover the pan and keep the peas simmering for two hours.
     Take half an onion per person.
     Cut it into pieces with a knife.
     Add it to the peas.
     Take a stalk of celery per person.
     Cut it into pieces with a knife.
     Add it to the peas.
     Take a carrot per person.
     Cut it into pieces with a knife!
     Add it to the peas.
     Cook for 10 more minutes.

     And the second recipe:

     Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
     Soak peas for 12 hours.
     Simmer for 2 hours in 4 cups of water(per person).
     Chop and add vegetables.
     Cook for 10 more minutes.

     The second is shorter and easier to interpret. But you do need to
     understand a few more cooking-related words—soak, simmer, chop, and, I guess, vegetable.
     When programming, we can’t rely on all the words we need to be waiting for us in the dictionary.

     Thus, you might fall into the pattern of the first recipe—work out the precise steps the computer has to perform,
     one by one, blind to the higher-level concepts that they express.

     It has to become second nature, for a programmer, to notice when a
     concept is begging to be abstracted into a new word.


     */
    var array = [1, 2, 3];
    /*
     *** Abstracting arrayNums traversal ***

     Plain functions, as we’ve seen them so far, are a good way to build
     abstractions. But sometimes they fall short.
     In the previous chapter, this type of for loop made several appearances:
     */


    for (int_i = 0; int_i < array.length; int_i++)
    {
        int_currentValue = array[int_i];
        console.log(int_currentValue);
    }
    space();
    /*
     It’s trying to say, “For each element in the arrayNums, log it to the console”.

     But it uses a roundabout way that involves a counter variable int_i, a check
     against the arrayNums’s length, and an extra variable declaration to pick out
     the current element.

     Apart from being a bit of an eyesore, this provides a lot of space for potential mistakes.

     We might accidentally reuse the int_i variable, misspell length as lenght, confuse the int_i and current variables, ect.

     So let’s try to abstract this into a function. Can you think of a way?

     Well, it’s easy to write a function that goes over an arrayNums and calls
     console.log on every element.
     */
	logEach(array); // 123
    
    function logEach(array)
    {
        for (var i = 0; i < array.length; i++)
        {
            console.log(array[i]);
        }
    }

    space();
    /*
     But what if we want to do something other than logging the elements?
     Since “doing something” can be represented as a function and functions
     are just values, we can pass our action as a function value.
     */

                                 // 1
    forEach(array, console.log); // 2
                                 // 3

    var sum = 0;

    forEach(array, function(number){sum += number;});

    console.log(sum); // 6
    
    function forEach(array_Input, function_Action)
    {
        for (var i = 0; i < array_Input.length; i++)
        {
            function_Action(array_Input[i]);
        }
    }

    space();
    /*
     (In some browsers, calling console.log in this way does not work. You
     can use alert instead of console.log if this example fails to work.)
     Often, you don’t pass a predefined function to forEach but create a
     function value on the spot instead.
     */
//-------------------------------------------------------------------------------------
    /*
     This looks quite a lot like the classical for loop, with its body written as
     a block below it. However, now the body is inside the function value, as
     well as inside the parentheses of the call to forEach. This is why it has to
     be closed with the closing brace and closing parenthesis.

     Using this pattern, we can specify a variable propertyName for the 'current
     element' (number), rather than having to pick it out of the arrayNums manually.
     In fact, we don’t need to write 'forEach' ourselves. It is available as a
     standard method on Arrays!

     Since the arrayNums is already provided as the
     thing the method acts on, 'forEach' takes only one required argument: the
     function to be executed for each element.
     To illustrate how helpful this is, let’s look back at a function from the
     previous chapter. It contains two arrayNums-traversing loops.


    function gatherCorrelations(journal) 
    {
        var pastHistory = {};

        for (var entry = 0; entry < journal.length; entry++) 
        {
            var events = journal[entry].events;

            for (var int_i = 0; int_i < events.length; int_i++)
            {
                var event = events[int_i];

                if (!(event in pastHistory)) 
                {
                    pastHistory[event] = phi(tableFor(event, journal));
                }
            }
        }

        return pastHistory;
    }
    /*
    /*
     Working with forEach makes it slightly shorter and quite a bit cleaner.
     */
    /*
    function gatherCorrelations(journal)
    {
        var pastHistory = {};

        journal.forEach(function(entry) 
        				{
            				entry.events.forEach(function (event) 
            				{
                				if (!(event in pastHistory)) 
                				{
                    				pastHistory[event] = phi(tableFor(event, journal));
                				}
            				});
        				});

        return pastHistory;
    }

    spacer();
    */
    //---------------------------------------------------------------------------------
    /*
     Higher-order functions

     Functions that operate on other functions, either by taking them as
     arguments or by returning them, are called higher-order functions.

     If you have already accepted the fact that functions are regular values, there
     is nothing particularly remarkable about the fact that such functions
     exist.

     The term comes from mathematics, where the distinction between
     functions and other values is taken more seriously.

     Higher-order functions allow us to abstract over actions, not just values.

     They come in several forms. For example, you can have functions
     that create new functions.
     */

    var greaterThan10 = greaterThan(10); // This var will hold '10', a 'Constant variable', for the function's 'x' parameter.

	console.log(greaterThan10(11));  // The argument '11' fills the 'return' function's parameter. In this case returning 'true'.

    console.log(greaterThan10(9)); // false
    console.log(greaterThan(10)(9)); // false
    console.log(greaterThanAndPositive(5)(6)(0)); // false
    console.log(greaterThanAndPositive(5)(6)(1)); // true!


    function greaterThan(x)
        {
            return function(y)
            {
                    return (y > x)  ;
            };
        }
    function greaterThanAndPositive(x)
    {
        return function(y)
        {
            return function(z)
            {
                return (y > x) && (z > 0) ;
            };
        };
    }

    space();
    /*
     And you can have functions that change other functions.
     */

	activity(Boolean)(0); // False

    activity(Boolean)(1); // True

    activity(Boolean)(2); // True

    activity(Boolean)(3); // True

    activity(Boolean)(-1); // True

    activity(Boolean)("x"); // True

    function activity(activeBits)
    {
        return function(argumentToTest)
        {
            console.log("Calling with", argumentToTest);

            var value = activeBits(argumentToTest);

            console.log("Call with", argumentToTest, ": returns", value);

            return value;
        };
    }

    space();
    /*
     You can even write functions that provide new types of control flow.
     */

    testingNumbers(3, function(number)
                      {
                          evenNumberOutput(number % 2, function()
                                                 {
                                                    console.log(number, "is even.");
                                                 });

                          oddNumberOutput(number % 2, function()
                                                 {
                                                    console.log(number, "is odd.");
                                                 });
                      });

    function testingNumbers(numberOfTests, test)
    {
        for (var i = 0; i < numberOfTests; i++)
        {
            test(i);
        }
    }

    function evenNumberOutput(remainder, output)
    {
        if (!(remainder))
        {
            output();
        }
    }
    function oddNumberOutput(remainder, output)
    {
        if (remainder)
        {
            output();
        }
    }

    //------------------------------------------------------------------------------------

    
// ! 0 is even
// ! 2 is even

    /*
     The lexical scoping rules that we discussed in Chapter 3 work to our advantage
     when using functions in this way.

     In the previous example, the 'n' variable is a parameter to the outer function.

     Because the innerElement function lives inside the environment of the outer one, it can use 'n'.

     The bodies of such innerElement functions can access the variables around them.

     They can play a role similar to the {} blocks used in regular loops and conditional
     statements.

     An important difference is that variables declared inside
     innerElement functions do not end up in the environment of the outer function.

     And that is usually a good thing.
     */

    /*
     Passing along arguments

     The noisy function defined earlier, which wraps its argument in another
     function, has a rather serious deficit.
     */
    /*
     function noisy(f)
     {
     return function(arg)
     {
     console.log("Calling with", arg);
     var value = f(arg);
     console.log("Call with", arg, "- got", value);
     return value;
     };
     }
     */
    /*
     If 'f' takes more than one parameter, it gets only the first one.

     We could add a bunch of arguments to the innerElement function (arg1, arg2, and so on)
     and pass them all to f, but it is not clear how many would be enough.

     This solution would also deprive 'f' of the information in arguments.length.

     Since we’d always pass the same number of arguments, it wouldn’t know
     how many arguments were originally given.

     For these kinds of situations, 'JavaScript functions' have an 'apply' method.

     You pass it an arrayNums (or arrayNums-like object) of arguments, and it will call
     the function with those arguments.
     */

    function transparentWrapping(f) 
    {
        return function () 
        {
            return f.apply(null, arguments);
        };
    }

    /*
     The above is a useless function, but it shows the pattern we are interested in—
     the function it returns passes all of the given arguments, and only those
     arguments, to f. It does this by passing its own arguments object to apply.
     The first argument to apply, for which we are passing null here, can be
     used to simulate a method call. We will come back to that in the next
     chapter.
     */

    /*
     *** JSON ***

     Higher-order functions that somehow apply a function to the elements of an arrayNums are widely used in JavaScript.

     The 'forEach' method is the most primitive such function.

     There are a number of other variants available as methods on arrays.

     To familiarize ourselves with them, let’s play around with another data set.

     A few years ago, someone crawled through a lot of archives and put
     together a book on the history of the family propertyName (Haverbeke—meaning Oatbrook).

     For my amusement, I extracted the information on the ancestor tree and put it
     into a computer-readable format.

     The file I created looks something like this:

     [
     {
     "propertyName": "Emma de Franco",
     "sex": "female",
     "born": 1876,
     "died": 1956,
     "father": "John Doe",
     "mother": "Jane Doe"
     },
     {
     "propertyName": "John de Franco",
     "sex": "male",
     "born": 1878,
     "died": 1976,
     "father": "John Doe",
     "mother": "Jane Doe",
     }
     ]
     */
    /*
     This format is called JSON (pronounced “Jason”), which stands for
     "JavaScript Object Notation".

     It is widely used as a 'data storage' and 'communication format' on the Web.

     ----------------------------------------------------------------------------------------------------------------------

     JSON is similar to JavaScript’s way of writing arrays and objects, with a few restrictions......

     All property names have to be surrounded by double quotes, and only simple data expressions are allowed!

     NO function calls, variables, or anything that involves actual computation!

     Comments are not allowed in JSON.***

     JavaScript gives us functions: 'JSON.stringify' and 'JSON.parse'.

     The above functions convert data 'to' and 'from' the JSON format, respectively.

     The first takes a JavaScript value and returns a 'JSON-encoded string'.

     The second takes such a string and converts it to the value it encodes.
     */
    space();

    var objectMe =
        {
            name: "John Pietrangelo",
            born: 1980,
            degrees: ["Computer Information Systems", "Business Sustainability"]
        };

    console.log(objectMe);

    var stringMe = JSON.stringify(objectMe);

    console.log(stringMe); // {"propertyName":"John Doe","born": 1980}
    space();

    console.log(JSON.parse(stringMe).born); // 1980

    console.log(objectMe.born); // 1980
    spacer();
/*
    var ANCESTRY_FILE_TO_STRING = JSON.stringify([
        {
            "propertyName": "1/1 10thGen* Carolus Haverbeke",
            "sex": "m",
            "born": 1832,
            "died": 1905,
            "father": "Carel Haverbeke",
            "mother": "2/2 9thGen* Maria van Brussel"
        },
        {
            "propertyName": "Emma de Milliano",
            "sex": "f",
            "born": 1876,
            "died": 1956,
            "father": "Petrus de Milliano",
            "mother": "Sophia van Damme"
        },
        {
            "propertyName": "Maria de Rycke",
            "sex": "f",
            "born": 1683,
            "died": 1724,
            "father": "Frederik de Rycke",
            "mother": "Laurentia van Vlaenderen"
        },
        {
            "propertyName": "Jan van Brussel",
            "sex": "m",
            "born": 1714,
            "died": 1748,
            "father": "Jacobus van Brussel",
            "mother": "Joanna van Rooten"
        },
        {
            "propertyName": "2/2 12thGen* Philibert Haverbeke",
            "sex": "m",
            "born": 1907,
            "died": 1997,
            "father": "1/1 11thGen* Emile Haverbeke",
            "mother": "Emma de Milliano"
        },
        {
            "propertyName": "3/3 8thGen* Jan Frans van Brussel",
            "sex": "m",
            "born": 1761,
            "died": 1833,
            "father": "5/5 7thGen* Jacobus Bernardus van Brussel",
            "mother": null
        },
        {
            "propertyName": "1/2 1stGen* Pauwels van Haverbeke",
            "sex": "m",
            "born": 1535,
            "died": 1582,
            "father": "ROOT* N. van Haverbeke",
            "mother": null
        },
        {
            "propertyName": "Clara Aernoudts",
            "sex": "f",
            "born": 1918,
            "died": 2012,
            "father": "Henry Aernoudts",
            "mother": "Sidonie Coene"
        },
        {
            "propertyName": "1/1 11thGen* Emile Haverbeke",
            "sex": "m",
            "born": 1877,
            "died": 1968,
            "father": "1/1 10thGen* Carolus Haverbeke",
            "mother": "Maria Sturm"
        },
        {
            "propertyName": "Lieven de Causmaecker",
            "sex": "m",
            "born": 1696,
            "died": 1724,
            "father": "Carel de Causmaecker",
            "mother": "Joanna Claes"
        },
        {
            "propertyName": "1/1 3rdGen* Pieter Haverbeke",
            "sex": "m",
            "born": 1602,
            "died": 1642,
            "father": "1/1 2ndGen* Lieven van Haverbeke",
            "mother": null
        },
        {
            "propertyName": "2/4 6thGen* Livina Haverbeke",
            "sex": "f",
            "born": 1692,
            "died": 1743,
            "father": "2/3 5thGen* Daniel Haverbeke",
            "mother": "Joanna de Pape"
        },
        {
            "propertyName": "1/4 6thGen* Pieter Bernard Haverbeke",
            "sex": "m",
            "born": 1695,
            "died": 1762,
            "father": "1/3 5thGen* Willem Haverbeke",
            "mother": "Petronella Wauters"
        },
        {
            "propertyName": "1/1 2ndGen* Lieven van Haverbeke",
            "sex": "m",
            "born": 1570,
            "died": 1636,
            "father": "1/2 1stGen* Pauwels van Haverbeke",
            "mother": "2/2 1stGen*Lievijne Jans"
        },
        {
            "propertyName": "2/3 8thGen* Joanna de Causmaecker",
            "sex": "f",
            "born": 1762,
            "died": 1807,
            "father": "3/5 7thGen* Bernardus de Causmaecker",
            "mother": null
        },
        {
            "propertyName": "1/3 5thGen* Willem Haverbeke",
            "sex": "m",
            "born": 1668,
            "died": 1731,
            "father": "1/1 4thGen* Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "propertyName": "1/3 8thGen* Pieter Antone Haverbeke",
            "sex": "m",
            "born": 1753,
            "died": 1798,
            "father": "2/5 7thGen* Jan Francies Haverbeke",
            "mother": "4/5 7thGen* Petronella de Decker"
        },
        {
            "propertyName": "2/2 9thGen* Maria van Brussel",
            "sex": "f",
            "born": 1801,
            "died": 1834,
            "father": "3/3 8thGen* Jan Frans van Brussel",
            "mother": "2/3 8thGen* Joanna de Causmaecker"
        },
        {
            "propertyName": "1/5 7thGen* Angela Haverbeke",
            "sex": "f",
            "born": 1728,
            "died": 1734,
            "father": "1/4 6thGen* Pieter Bernard Haverbeke",
            "mother": "Livina de Vrieze"
        },
        {
            "propertyName": "4/4 6thGen* Elisabeth Haverbeke",
            "sex": "f",
            "born": 1711,
            "died": 1754,
            "father": "3/3 5thGen* Jan Haverbeke",
            "mother": "Maria de Rycke"
        },
        {
            "propertyName": "2/2 1stGen* Lievijne Jans",
            "sex": "f",
            "born": 1542,
            "died": 1582,
            "father": null,
            "mother": null
        },
        {
            "propertyName": "3/5 7thGen* Bernardus de Causmaecker",
            "sex": "m",
            "born": 1721,
            "died": 1789,
            "father": "Lieven de Causmaecker",
            "mother": "2/4 6thGen* Livina Haverbeke"
        },
        {
            "propertyName": "Jacoba Lammens",
            "sex": "f",
            "born": 1699,
            "died": 1740,
            "father": "Lieven Lammens",
            "mother": "Livina de Vrieze"
        },
        {
            "propertyName": "Pieter de Decker",
            "sex": "m",
            "born": 1705,
            "died": 1780,
            "father": "Joos de Decker",
            "mother": "Petronella van de Steene"
        },
        {
            "propertyName": "Joanna de Pape",
            "sex": "f",
            "born": 1654,
            "died": 1723,
            "father": "Vincent de Pape",
            "mother": "Petronella Wauters"
        },
        {
            "propertyName": "2/3 5thGen* Daniel Haverbeke",
            "sex": "m",
            "born": 1652,
            "died": 1723,
            "father": "1/1 4thGen* Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "propertyName": "1/1 4thGen* Lieven Haverbeke",
            "sex": "m",
            "born": 1631,
            "died": 1676,
            "father": "1/1 3rdGen* Pieter Haverbeke",
            "mother": "Anna van Hecke"
        },
        {
            "propertyName": "Martina de Pape",
            "sex": "f",
            "born": 1666,
            "died": 1727,
            "father": "Vincent de Pape",
            "mother": "Petronella Wauters"
        },
        {
            "propertyName": "2/5 7thGen* Jan Francies Haverbeke",
            "sex": "m",
            "born": 1725,
            "died": 1779,
            "father": "1/4 6thGen* Pieter Bernard Haverbeke",
            "mother": "Livina de Vrieze"
        },
        {
            "propertyName": "1/2 12thGen* Maria Haverbeke",
            "sex": "m",
            "born": 1905,
            "died": 1997,
            "father": "1/1 11thGen* Emile Haverbeke",
            "mother": "Emma de Milliano"
        },
        {
            "propertyName": "4/5 7thGen* Petronella de Decker",
            "sex": "f",
            "born": 1731,
            "died": 1781,
            "father": "Pieter de Decker",
            "mother": "2/4 6thGen* Livina Haverbeke"
        },
        {
            "propertyName": "Livina Sierens",
            "sex": "f",
            "born": 1761,
            "died": 1826,
            "father": "Jan Sierens",
            "mother": "Maria van Waes"
        },
        {
            "propertyName": "3/4 6thGen* Laurentia Haverbeke",
            "sex": "f",
            "born": 1710,
            "died": 1786,
            "father": "3/3 5thGen* Jan Haverbeke",
            "mother": "Maria de Rycke"
        },
        {
            "propertyName": "1/2 9thGen* Carel Haverbeke",
            "sex": "m",
            "born": 1796,
            "died": 1837,
            "father": "1/3 8thGen* Pieter Antone Haverbeke",
            "mother": "Livina Sierens"
        },
        {
            "propertyName": "Elisabeth Hercke",
            "sex": "f",
            "born": 1632,
            "died": 1674,
            "father": "Willem Hercke",
            "mother": "Margriet de Brabander"
        },
        {
            "propertyName": "3/3 5thGen* Jan Haverbeke",
            "sex": "m",
            "born": 1671,
            "died": 1731,
            "father": "1/1 4thGen* Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "propertyName": "Anna van Hecke",
            "sex": "f",
            "born": 1607,
            "died": 1670,
            "father": "Paschasius van Hecke",
            "mother": "Martijntken Beelaert"
        },
        {
            "propertyName": "Maria Sturm",
            "sex": "f",
            "born": 1835,
            "died": 1917,
            "father": "Charles Sturm",
            "mother": "Seraphina Spelier"
        },
        {
            "propertyName": "5/5 7thGen* Jacobus Bernardus van Brussel",
            "sex": "m",
            "born": 1736,
            "died": 1809,
            "father": "Jan van Brussel",
            "mother": "4/4 6thGen* Elisabeth Haverbeke"
        }
    ]);
*/
var ANCESTRY_FILE_TO_STRING = JSON.stringify([
    {
        "name": "Carolus Haverbeke",
        "sex": "m",
        "born": 1832,
        "died": 1905,
        "father": "Carel Haverbeke",
        "mother": "Maria van Brussel"
    },
    {
        "name": "Emma de Milliano",
        "sex": "f",
        "born": 1876,
        "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Maria de Rycke",
        "sex": "f",
        "born": 1683,
        "died": 1724,
        "father": "Frederik de Rycke",
        "mother": "Laurentia van Vlaenderen"
    },
    {
        "name": "Jan van Brussel",
        "sex": "m",
        "born": 1714,
        "died": 1748,
        "father": "Jacobus van Brussel",
        "mother": "Joanna van Rooten"
    },
    {
        "name": "Philibert Haverbeke",
        "sex": "m",
        "born": 1907,
        "died": 1997,
        "father": "Emile Haverbeke",
        "mother": "Emma de Milliano"
    },
    {
        "name": "Jan Frans van Brussel",
        "sex": "m",
        "born": 1761,
        "died": 1833,
        "father": "Jacobus Bernardus van Brussel",
        "mother": null
    },
    {
        "name": "Pauwels van Haverbeke",
        "sex": "m",
        "born": 1535,
        "died": 1582,
        "father": "N. van Haverbeke",
        "mother": null
    },
    {
        "name": "Clara Aernoudts",
        "sex": "f",
        "born": 1918,
        "died": 2012,
        "father": "Henry Aernoudts",
        "mother": "Sidonie Coene"
    },
    {
        "name": "Emile Haverbeke",
        "sex": "m",
        "born": 1877,
        "died": 1968,
        "father": "Carolus Haverbeke",
        "mother": "Maria Sturm"
    },
    {
        "name": "Lieven de Causmaecker",
        "sex": "m",
        "born": 1696,
        "died": 1724,
        "father": "Carel de Causmaecker",
        "mother": "Joanna Claes"
    },
    {
        "name": "Pieter Haverbeke",
        "sex": "m",
        "born": 1602,
        "died": 1642,
        "father": "Lieven van Haverbeke",
        "mother": null
    },
    {
        "name": "Livina Haverbeke",
        "sex": "f",
        "born": 1692,
        "died": 1743,
        "father": "Daniel Haverbeke",
        "mother": "Joanna de Pape"
    },
    {
        "name": "Pieter Bernard Haverbeke",
        "sex": "m",
        "born": 1695,
        "died": 1762,
        "father": "Willem Haverbeke",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Lieven van Haverbeke",
        "sex": "m",
        "born": 1570,
        "died": 1636,
        "father": "Pauwels van Haverbeke",
        "mother": "Lievijne Jans"
    },
    {
        "name": "Joanna de Causmaecker",
        "sex": "f",
        "born": 1762,
        "died": 1807,
        "father": "Bernardus de Causmaecker",
        "mother": null
    },
    {
        "name": "Willem Haverbeke",
        "sex": "m",
        "born": 1668,
        "died": 1731,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Pieter Antone Haverbeke",
        "sex": "m",
        "born": 1753,
        "died": 1798,
        "father": "Jan Francies Haverbeke",
        "mother": "Petronella de Decker"
    },
    {
        "name": "Maria van Brussel",
        "sex": "f",
        "born": 1801,
        "died": 1834,
        "father": "Jan Frans van Brussel",
        "mother": "Joanna de Causmaecker"
    },
    {
        "name": "Angela Haverbeke",
        "sex": "f",
        "born": 1728,
        "died": 1734,
        "father": "Pieter Bernard Haverbeke",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Elisabeth Haverbeke",
        "sex": "f",
        "born": 1711,
        "died": 1754,
        "father": "Jan Haverbeke",
        "mother": "Maria de Rycke"
    },
    {
        "name": "Lievijne Jans",
        "sex": "f",
        "born": 1542,
        "died": 1582,
        "father": null,
        "mother": null
    },
    {
        "name": "Bernardus de Causmaecker",
        "sex": "m",
        "born": 1721,
        "died": 1789,
        "father": "Lieven de Causmaecker",
        "mother": "Livina Haverbeke"
    },
    {
        "name": "Jacoba Lammens",
        "sex": "f",
        "born": 1699,
        "died": 1740,
        "father": "Lieven Lammens",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Pieter de Decker",
        "sex": "m",
        "born": 1705,
        "died": 1780,
        "father": "Joos de Decker",
        "mother": "Petronella van de Steene"
    },
    {
        "name": "Joanna de Pape",
        "sex": "f",
        "born": 1654,
        "died": 1723,
        "father": "Vincent de Pape",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Daniel Haverbeke",
        "sex": "m",
        "born": 1652,
        "died": 1723,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Lieven Haverbeke",
        "sex": "m",
        "born": 1631,
        "died": 1676,
        "father": "Pieter Haverbeke",
        "mother": "Anna van Hecke"
    },
    {
        "name": "Martina de Pape",
        "sex": "f",
        "born": 1666,
        "died": 1727,
        "father": "Vincent de Pape",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Jan Francies Haverbeke",
        "sex": "m",
        "born": 1725,
        "died": 1779,
        "father": "Pieter Bernard Haverbeke",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Maria Haverbeke",
        "sex": "m",
        "born": 1905,
        "died": 1997,
        "father": "Emile Haverbeke",
        "mother": "Emma de Milliano"
    },
    {
        "name": "Petronella de Decker",
        "sex": "f",
        "born": 1731,
        "died": 1781,
        "father": "Pieter de Decker",
        "mother": "Livina Haverbeke"
    },
    {
        "name": "Livina Sierens",
        "sex": "f",
        "born": 1761,
        "died": 1826,
        "father": "Jan Sierens",
        "mother": "Maria van Waes"
    },
    {
        "name": "Laurentia Haverbeke",
        "sex": "f",
        "born": 1710,
        "died": 1786,
        "father": "Jan Haverbeke",
        "mother": "Maria de Rycke"
    },
    {
        "name": "Carel Haverbeke",
        "sex": "m",
        "born": 1796,
        "died": 1837,
        "father": "Pieter Antone Haverbeke",
        "mother": "Livina Sierens"
    },
    {
        "name": "Elisabeth Hercke",
        "sex": "f",
        "born": 1632,
        "died": 1674,
        "father": "Willem Hercke",
        "mother": "Margriet de Brabander"
    },
    {
        "name": "Jan Haverbeke",
        "sex": "m",
        "born": 1671,
        "died": 1731,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Anna van Hecke",
        "sex": "f",
        "born": 1607,
        "died": 1670,
        "father": "Paschasius van Hecke",
        "mother": "Martijntken Beelaert"
    },
    {
        "name": "Maria Sturm",
        "sex": "f",
        "born": 1835,
        "died": 1917,
        "father": "Charles Sturm",
        "mother": "Seraphina Spelier"
    },
    {
        "name": "Jacobus Bernardus van Brussel",
        "sex": "m",
        "born": 1736,
        "died": 1809,
        "father": "Jan van Brussel",
        "mother": "Elisabeth Haverbeke"
    }
]);

console.log("One continual JSON-encoded string.\n\n", ANCESTRY_FILE_TO_STRING); //One continual JSON-encoded string.

    /*
     Let’s decode it and see
     how many people it contains.
     */

// To convert string into a JSON object.
    var objectArray_Ancestors = JSON.parse(ANCESTRY_FILE_TO_STRING);


    console.log("I have", objectArray_Ancestors.length, "ancestors!"); // I have 39 ancestors!

    /*
                                ***Filtering an arrayNums***

     To find the people in the family tree data-set, who were 25 years of age
     or younger in 1925. The following function will be helpful.

     It filters out the elements in an arrayNums that don’t pass a test.

     */
    spacer();

console.log("people in the ancestry data set who were 25 years of age or younger in 1925:\n");

console.log(filter(objectArray_Ancestors, function(ancestor)
                                   {
                                       return ancestor.born > 1899 && ancestor.born < 1926;
                                   }));

    function filter(inputArray, testFunction)
    {
        var outputArray = [];

        for (var i = 0; i < inputArray.length; i++)
        {
            if (testFunction(inputArray[i]))
            {
                outputArray.push(inputArray[i]);
            }
        }
        return outputArray;
    }

    spacer();
    /*
     This uses the argument named 'test', a function value, to fill in a “gap”
     in the computation for desired output result.

     The 'test' function is called for 'each element', and its
     'return' value determines whether an 'element' is included in the returned 'arrayNums'.

     Three people in the file were alive and young in 1925 were: my grandfather,
     grandmother, and great-aunt.

     Note how the 'filter' function, rather than deleting elements from the
     existing arrayNums, built up a new arrayNums with only the elements that pass
     the test.

     This function is pure, it does not modify the arrayNums it is given.

     Like 'forEach', 'filter' is also a standard method on arrays.

     The previous example defined the function, in order to show what it does internally.

     From now on, we’ll use it like this instead:
     */

    console.log("The result of filtering an ancestor from myAncestors Array-object.\n");

    console.log(objectArray_Ancestors.filter(function (ancestor)
                                      {
                                          return ancestor.father == "Carel Haverbeke";
                                      })
               );

    spacer();

    /*
     *** Transforming with map ***

     Say we have an arrayNums of objects representing people, produced by filtering
     the ancestry arrayNums.

     To extract an arrayNums of the names from it, which will make it easier to read, one would use the 'map' method.

     The 'map' method transforms an arrayNums, by applying a function to all of its
     elements and building a new arrayNums from the returned values.

     The new arrayNums will have the same length as the input arrayNums, but its content will
     have been “mapped” to a new form by the function.

     .
     */
// Variable to store an arrayNums of ancestors who lived for over 90 years:
    var objectArray_LivedToBeOver90 = objectArray_Ancestors.filter(function(ancestor)
                                                     {
                                                         return ancestor.died - ancestor.born > 90;
                                                     });

    console.log("Ancestors who lived to be over 90 years old:\n\n", objectArray_LivedToBeOver90);


							// **Utility function**

// To create a 'new' arrayNums of 'names' extracted from the 'propertyName' properties,
// of the arrayNums of objects, held in the argument's arrayNums.

console.log(map(objectArray_LivedToBeOver90, function(ancestor){return ancestor.name;}));

    function map(inputArray, testFunction)
    {
        var stringArray_NamesOfAncestorsWhoLivedToBeOver90 = [];

        for (var i = 0; i < inputArray.length; i++)
        {
            stringArray_NamesOfAncestorsWhoLivedToBeOver90.push(testFunction(inputArray[i]));
        }
        return stringArray_NamesOfAncestorsWhoLivedToBeOver90;
    }

spacer();

    /*
     Interestingly, the people who lived to at least 90 years of age are the
     same three people who we saw before—the people who were young in
     the 1920s.

     Which happens to be the most recent generation in my data
     set. I guess medicine has come a long way.
     Like forEach and filter, map is also a standard method on arrays.
     */

    console.log(objectArray_LivedToBeOver90.map(function(ancestor)
    									 {
            								 return ancestor.name;
        								 }));
    spacer();


    console.log(objectArray_Ancestors.filter(function(ancestor)
    								  {
        								  return ancestor.died - ancestor.born > 90;
    								  }).map(function(ancestor)
    								  		 {
        									    return ancestor.name;
    								         }));

    spacer();

    /*
                                *** Summarizing with reduce ***

     Another common pattern of computation on arrays is computing a single value from them.

     Our recurring example, summing a collection of numbers, is an instance of this.

     Another example would be finding the person with the earliest year of birth in the data set.

     The higher-order operation that represents this pattern is called 'reduce'(or sometimes fold).

     You can think of it as folding up the arrayNums, one element at a time.

     When summing numbers, you’d start with the number zero and, for each element,
     combine it with the current sum by adding the two.

     The parameters to the reduce function are, apart from the arrayNums: 'combining' function and a start value.

     This function is a little less straightforward than 'filter' and 'map', so pay close attention!!!
     */
    var numArrayForReduceExample = [1, 2, 3, 4];

    console.log(reduce(numArrayForReduceExample, function(stack, nextItem)
                                                 {
                                                     return stack + nextItem;
                                                 }, 0));

    function reduce(inputArray, combineFunction, start)
    {
        var total = start;

        for (var i = 0; i < inputArray.length; i++)
        {
            total = combineFunction(total, array[i]);
        }
        return total;
    }

    space();
    /*
     The standard arrayNums method reduce, which of course corresponds to this
     function, has an added convenience. If your arrayNums contains at least one
     element, you are allowed to leave off the 'start' argument(3rd). The method
     will take the first element of the arrayNums as its start value and start reducing
     at the second element.
     To use reduce to find my most ancient known ancestor, we can write
     something like this:
     */
    console.log(objectArray_Ancestors.reduce(function(oldestAncestor, currentAncestor)
    							   {
        						       if(currentAncestor.born < oldestAncestor.born) 
        						       {
            						       return currentAncestor;
        							   }
        							   else 
        							   {
            						       return oldestAncestor;
        							   }
        							}));
    /*

     							*** Composability ***

     Consider how we would have written the previous example (finding the
     person with the earliest year of birth) without higher-order functions.
     The code is not that much worse.
     */
    space();

    var earliestBirth = objectArray_Ancestors[0];

    for (var i = 0; i < objectArray_Ancestors.length; i++)
    {
        var ancestorInQue = objectArray_Ancestors[i];

        if (ancestorInQue.born < earliestBirth.born)
        {
            earliestBirth = ancestorInQue;
        }
    }

    console.log(earliestBirth);
    spacer();
    /*
     There are a few more variables, and the program is two lines longer but
     still quite easy to understand.

     Higher-order functions start to shine when you need to compose functions.

     As an example, let’s write code that finds the average age for men
     and for women in the data set.
     */
    console.log("The average lifespan for my male ancestors is:\n\n");

    console.log(Math.round(averageAge_V1(objectArray_Ancestors.filter(male).map(age))));

    spacer();

    console.log("The average lifespan for my female ancestors is:\n\n");

    console.log(Math.round(averageAge_V1(objectArray_Ancestors.filter(female).map(age))));
    spacer();

    function averageAge_V1(ageInputArray)
    {
        function sumOfAllAges(ageStack, ageAncestor)
        {
            return ageStack + ageAncestor;
        }

        return ageInputArray.reduce(sumOfAllAges) / ageInputArray.length;
    }

    function age(ancestor)
    {
        return ancestor.died - ancestor.born;
    }

    function male(ancestor)
    {
        return ancestor.sex == "m";
    }

    function female(ancestor)
    {
        return ancestor.sex == "f";
    }


    /*
     ***   It’s a bit silly that we have to define 'sumOfAllAges' as a function, but operators
     in JavaScript, unlike functions, are not values! So you can’t pass them
     as arguments!!)   ***

     Instead of tangling the logic into a big loop, it is neatly composed into
     the concepts we are interested in—determining sex, computing age, and
     averaging numbers. We can apply these one by one to get the result we
     are looking for.
     This is fabulous for writing clear code. Unfortunately, this clarity
     comes at a cost.
     */

    /*
                                *** The Cost ***

     In the happy land of elegant code and pretty rainbows, there lives a
     spoil-sport monster called inefficiency.

     A program that processes an arrayNums is most elegantly expressed as a
     sequence of cleanly separated steps that each do something with the
     arrayNums and produce a new arrayNums. But building up all those intermediate
     arrays is somewhat expensive.

     Likewise, passing a function to forEach and letting that method handle
     the arrayNums iteration for us is convenient and easy to read.

     But function calls in JavaScript are costly compared to simple loop bodies.
     And so it goes with a lot of techniques that help improve the clarity
     of a program.

     Abstractions add layers between the raw things the computer
     is doing and the concepts we are working with and thus cause the
     machine to perform more work. This is not an iron law—there are programming
     languages that have better support for building abstractions
     without adding inefficiencies, and even in JavaScript, an experienced
     programmer can find ways to write abstract code that is still fast. But
     it is a problem that comes up a lot.

     Fortunately, most computers are insanely fast. If you are processing a
     modest set of data or doing something that has to happen only on a human
     time scale (say, every time the user clicks a button), then it does not
     matter whether you wrote a pretty solution that takes half a millisecond
     or a super-optimized solution that takes a tenth of a millisecond.

     It is helpful to roughly keep track of how often a piece of your program
     is going to run.

     If you have a loop inside a loop (either directly or through the outer loop calling a function
     that ends up performing the innerElement loop), the code inside the innerElement loop will end up running "N x M"
     times, where N is the number of times the outer loop repeats and M
     is the number of times the innerElement loop repeats within each iteration of
     the outer loop.

     If that innerElement loop contains another loop that makes P
     rounds, its body will run "M x N x P" times, and so on. This can add up
     to large numbers, and when a program is slow, the problem can often be
     traced to only a small part of the code, which sits inside an innerElement loop.
     */
//------------------------------------------------------------------------------------------
    /*
                                Great-great-great-great-…

     My grandfather, Philibert Haverbeke, is included in the data file.

     By starting with him, I can trace my lineage to find out whether the most
     ancient person in the data, Pauwels van Haverbeke, is my direct ancestor.
     And if he is, I would like to know how much DNA I theoretically share with him.

     In order to assign a parent’s propertyName to the actual object that represents
     this ancestor, we first build up an object that associates all names with
     their corresponding ancestor.
     */
    spacer();

    //***  To find ancestor by propertyName, with the original arrayNums of objects.

    for (var i = 0; i < objectArray_Ancestors.length; i++)
    {
        if (objectArray_Ancestors[i].name == "Philibert Haverbeke")
        {
            console.log(objectArray_Ancestors[i]);
        }

    }

//----------------------------------------------------------------

// To create an object containing properties which are indexed
// by a 'propertyName'(string data-type), instead of a 'number'(int data-type).

    var objectReferenceByName = {};

    forEach(objectArray_Ancestors, function(ancestor)
    					           {
    					               objectReferenceByName[ancestor.name] = ancestor;
    					           });

    objectReferenceByName = {};

    objectArray_Ancestors.forEach(function(ancestor)
                                  {
                                      objectReferenceByName[ancestor.name] = ancestor;
                                  });

    console.log(objectReferenceByName["Philibert Haverbeke"]);
    console.log(objectReferenceByName[0]); // undefined
    console.log("The following is display a newly created object to search propertyName of objects held within.\n\n", objectReferenceByName);

    spacer();

    /*
     Now, the problem is not entirely as simple as following the father properties
     and counting how many we need to reach Pauwels.

     There are several cases in the family tree where people married their second cousins (tiny
     villages and all that).

     This causes the branches of the family tree to
     rejoin in a few places, which means I share more than 1/2G of my genes
     with this person, where G for the number of generations between Pauwels
     and me. This formula comes from the idea that each generation splits
     the gene pool in two.

     A reasonable way to think about this problem is to look at it as being
     analogous to reduce, which condenses an arrayNums to a single value by
     repeatedly combining values, left to right.

     In this case, we also want to condense our data structure to a single value but in a way that follows
     family lines.

     The shape of the data is that of a family tree, rather than
     a flat list.

     The way we want to reduce this shape is by computing a value for
     a given person by combining values from their ancestors.

     This can be done recursively.... If we are interested in ancestor A, we have to compute
     the values for A’s parents, which in turn requires us to compute the value
     for A’s grandparents, and so on. In principle, that’d require us to look at
     an infinite number of ancestors, but since our data set is finite, we have to
     stop somewhere.

     We’ll use a 'default value' in our 'reduction' function, which will be used for ancestors who are not in the data-set.

     for our current circumstance, the default value is zero, on the assumption that people not in the
     list don’t share DNA with the ancestor we are looking at.

     Given a ancestor, a function to combine values from the two parents of a
     given person, and a default value. 'reduceMyAncestors' condenses a value from
     a family tree.
     */

    var objectMyAncestor = objectReferenceByName["Philibert Haverbeke"];

    console.log(reduceMyAncestors(objectMyAncestor, sharedDNA, 0) / 4); // 0.00049 %

    spacer();

    /*
     The innerElement function (valueForMyAncestors) handles a single person. Through the magic
     of recursion, it can simply call itself to handle the father and the mother
     of this person. The results, along with the person object itself, are passed
     to the 'relationalCalculationFunction', which returns the actual value for this person.
     We can then use this to compute the amount of DNA my grandfather
     shared with Pauwels van Haverbeke and divide that by four.
     */

    function reduceMyAncestors(ancestor, relationalCalculationFunction, defaultValue)
    {
        //                          recursive function
        function relationalValueForMyAncestor(ancestor)
        {
            if (ancestor == null)
            {
                return defaultValue;
            }
            else 
            {
                return relationalCalculationFunction(ancestor, relationalValueForMyAncestor(objectReferenceByName[ancestor.mother]), relationalValueForMyAncestor(objectReferenceByName[ancestor.father]));
            }
        }
        return relationalValueForMyAncestor(ancestor);
    }
    /*
     The person with the propertyName Pauwels van Haverbeke obviously shared 100
     percent of his DNA with Pauwels van Haverbeke (there are no people
     who share names in the data set), so the function returns 1 for him. All
     other people share the average of the amounts that their parents share.
     */

    //                  relational calculation function
    function sharedDNA(ancestor, sharedDNAFromMother, sharedDNAFromFather)
    {
        if (ancestor.name == "Pauwels van Haverbeke")
        {
            return 1;
        }
        else
        { 
        	return (sharedDNAFromMother + sharedDNAFromFather) / 2;
        }
    }
    space();

    /*
     So, statistically speaking, I share about 0.05 percent of my DNA with
     this 16th-century person. It should be noted that this is only a statistical
     approximation, not an exact amount.

     It is a rather small number, but
     given how much genetic material we carry (about 3 billion base pairs),
     there’s still probably some aspect in the biological machine that is me
     that originates with Pauwels.

     We could also have computed this number without relying on reduceAncestors.
     But separating the general approach (condensing a family tree) from
     the specific case (computing shared DNA) can improve the clarity of the
     code and allows us to reuse the abstract part of the program for other
     cases.

     For example, the following code finds the percentage of a person’s
     known ancestors who lived past 70 (by lineage, so people may be counted
     multiple times):
     */
    console.log(longLifeSpanPercentage(objectReferenceByName["Emile Haverbeke"]));

    function longLifeSpanPercentage(objectAncestor)
    {
        var all = AncestorCount(objectAncestor, function(objectAncestor)
        {
            return true;
        });

        var longLifeSpan = AncestorCount(objectAncestor, function (objectAncestor)
        {
            return objectAncestor.died - objectAncestor.born >= 70;
        });
        return longLifeSpan/all;
    }


    function AncestorCount(objectAncestor, functionTest)
    {
        function combine(current, fromMother, fromFather) 
        {
            var thisOneCounts = current != objectAncestor && functionTest(current);

            return fromMother + fromFather + (thisOneCounts ? 1 : 0);
        }
      // abstract code, re-used from previous example
        return reduceMyAncestors(objectAncestor, combine, 0);
    }

    spacer();
    /*
     Such numbers are not to be taken too seriously, given that our data set
     contains a rather arbitrary collection of people. But the code illustrates
     the fact that reduceAncestors gives us a useful piece of vocabulary for
     working with the family tree data structure.
     */

    /*
     								*** Binding ***

     The 'bind' method, which all functions have, creates a new function that
     will call the original function but with some of the 'arguments' already
     fixed(constant variables).

     The following code shows an example of 'bind' in use. It defines a function
     'isInTheSet' that tells us whether a 'person' is in a given 'set(arrayNums) of strings'.

     The call 'filter', collects those 'person objects' whose names are in the
     set, we can either write a function expression that makes a call
     to 'isInTheSet' with our 'set' as its first argument or partially apply the 'isInTheSet'
     function.
     */

    var stringArray_Set01 = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

    console.log(objectArray_Ancestors.filter(function(ancestor)
                                             {
                                                 return isInTheSet(stringArray_Set01, ancestor);
                                             }));

    function isInTheSet(set, ancestor)
    {
        return set.indexOf(ancestor.name) > -1;
    }

    spacer();
    console.log(objectArray_Ancestors.filter(isInTheSet.bind(null, stringArray_Set01)));
    spacer();
/*
                                *** Summary ***

 Being able to pass function values to other functions is not just a gimmick
 but a deeply useful aspect of JavaScript. It allows us to write
 computations with “gaps” in them as functions and have the code that
 calls these functions fill in those gaps by providing function values that
 describe the missing computations.

 Arrays provide a number of useful higher-order methods: 'forEach' to
 do something with each element in an arrayNums, 'filter' to build a new arrayNums
 with some elements filtered out, 'map' to build a new arrayNums where each
 element has been put through a function, and 'reduce' to combine all an
 arrayNums’s elements into a single value.

 Functions have an 'apply' method that can be used to call them with an
 arrayNums specifying their arguments. They also have a 'bind' method, which
 is used to create a partially applied version of the function.
 */

/*
                        *** Exercises ***
 Flattening:

 Use the reduce method in combination with the concat method to “flatten”
 an arrayNums of arrays into a single arrayNums that has all the elements of the input
 arrays.
*/
var arrayNumbers0To3 =["0","1","2","3"];
var arrayNumbers4To6 =["4","5","6"];
var arrayNumbers7To10 =["7","8","9","10"];
var arrayOfNumberArrays = [arrayNumbers0To3,arrayNumbers4To6,arrayNumbers7To10];

console.log(arrayOfNumberArrays.reduce(function(initialIndexValue, nextIndexValue)
									{
										initialIndexValue = initialIndexValue.concat(nextIndexValue);

										return initialIndexValue;
									}));
									
spacer();
/*
 Mother-child age difference:

 Using the example data set from this chapter, compute the average age
 difference between mothers and children (the age of the mother when
 the child is born). You can use the average function defined earlier in
 this chapter.

 **Note that not all the mothers mentioned in the data are themselves
 present in the arrayNums. The byName object, which makes it easy to find a
 person’s object from their propertyName, might be useful here.*/


console.log('Average age Of Mother at their child\'s birth:',momsAgeAtBirth(objectArray_Ancestors,objectReferenceByName),'years of age.');

function momsAgeAtBirth(objectArray_Ancestors,objectReferenceByName)
{
    var momsNotInDataSet = 0;
    var momsInDataSet = 0;
    var momsAge = 0;
    var momsCollectiveAge = 0;


    objectArray_Ancestors.forEach(function (ancestor)
    {
        if(objectReferenceByName[ancestor.mother] == null)
        {
            momsNotInDataSet += 1;
        }
        else
        {
            momsInDataSet += 1;
            momsAge = ancestor.born - objectReferenceByName[ancestor.mother].born;
            momsCollectiveAge += momsAge;
        }
    });

    console.log("Out of the list of my", objectArray_Ancestors.length,'ancestors.\n');
    console.log('Only',momsInDataSet,'ancestors had reference to their mother\'s age, from that same data-set.\n');


    return (momsCollectiveAge/momsInDataSet).toPrecision(3);
}
spacer();
/*

 Historical life expectancy:

 When we looked up all the people in our data set that lived more than
 90 years, only the latest generation in the data came out. Let’s take a
 closer look at that phenomenon.

 Compute and output the average age of the people in the ancestry data
 set per century. A person is assigned to a century by taking their year
 of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
 died / 100).

 **For bonus points, write a function groupBy that abstracts the grouping
 operation. It should accept as arguments an arrayNums and a function that
 computes the group for an element in the arrayNums and returns an object
 that maps group names to arrays of group members.
*/
var ancestorsByCentury = {"property16thCenturyAncestors": [],"property17thCenturyAncestors": [],"property18thCenturyAncestors": [],"property19thCenturyAncestors": [],"property20thCenturyAncestors": []};

groupByCentury(objectArray_Ancestors);

console.log(ancestorsByCentury);
console.log(averageAge_V2(ancestorsByCentury.property16thCenturyAncestors));
console.log(averageAge_V2(ancestorsByCentury.property17thCenturyAncestors));
console.log(averageAge_V2(ancestorsByCentury.property18thCenturyAncestors));
console.log(averageAge_V2(ancestorsByCentury.property19thCenturyAncestors));
console.log(averageAge_V2(ancestorsByCentury.property20thCenturyAncestors));

function groupByCentury(array)
{
    for (var i = 0; i < array.length; i++)
    {
        switch (Math.ceil(array[i].died / 100))
        {
            case 16:
                ancestorsByCentury["property16thCenturyAncestors"].push(array[i]);
                break;

            case 17:
                ancestorsByCentury["property17thCenturyAncestors"].push(array[i]);
                break;

            case 18:
                ancestorsByCentury["property18thCenturyAncestors"].push(array[i]);
                break;

            case 19:
                ancestorsByCentury["property19thCenturyAncestors"].push(array[i]);
                break;

            default:
                ancestorsByCentury["property20thCenturyAncestors"].push(array[i]);
                break;
        }
    }
}

function averageAge_V2(array)
{
    var ageSum = 0;

        array.forEach(function(ancestor)
                      {
                          ageSum += (ancestor.died - ancestor.born)
                      });

    return (ageSum/array.length).toPrecision(4);
}

spacer();
/*

 Every and then some:

 Arrays also come with the standard methods every and some. Both take a
 predicate function that, when called with an arrayNums element as argument,
 returns true or false. Just like && returns a true value only when the
 expressions on both sides are true, every returns true only when the
 predicate returns true for all elements of the arrayNums.

 Similarly, some returns true as soon as the predicate returns true for any of the elements. They
 do not process more elements than necessary—for example, if some finds
 that the predicate holds for the first element of the arrayNums, it will not look
 at the values after that.

 Write two functions, every and some, that behave like these methods,
 except that they take the arrayNums as their first argument rather than being
 a method.
 */

function every(array, functionPredicate)
{
    for (var i = 0; i < array.length; i++)
    {
        if (!functionPredicate(array[i]))
        {
            return false;
        }
    }
    return true;
}


function some(array, functionPredicate)
{
    for (var i = 0; i < array.length; i++)
    {
        if (functionPredicate(array[i]))
        {
            return true;
        }
    }
    return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

spacer();

/*
                       The Secret Life of Objects



                                History

 This story, like most programming stories, starts with the problem of
 complexity.

 One philosophy is that complexity can be made manageable
 by separating it into small compartments that are isolated from each
 other.

 These compartments have ended up with the propertyName 'objects'.

 An 'object' is a hard shell that hides the gooey complexity inside it and
 instead offers us a few knobs and connectors (such as methods) that
 present an interface, through which the object is to be used.

 The idea is that the interface is relatively simple and all the complex things going
 on inside the object can be ignored when working with it.

 As an example, you can imagine an object that provides an interface to
 an area on your screen. It provides a way to draw shapes or text onto this
 area but hides all the details of how these shapes are converted to the
 actual pixels that make up the screen.

 You’d have a set of methods—for example, 'drawCircle'—and those are the only things you need to know in
 order to use such an object.

 These ideas were initially worked out in the 1970s and 1980s and, in
 the 1990s, were carried up by a huge wave of hype—'the object-oriented
 programming revolution'.

 Suddenly, there was a large tribe of people
 declaring that objects were the right way to program—and that anything
 that did not involve objects was outdated visiblePropertyInAllObjects.

 That kind of zealotry always produces a lot of impractical silliness, and
 there has been a sort of counter-revolution since then. In some circles,
 objects have a rather bad reputation nowadays.

 I prefer to look at the issue from a practical, rather than ideological,
 angle.

 There are several useful concepts, most importantly that of
 encapsulation (distinguishing between internal complexity and external
 interface), that the object-oriented culture has popularized.

 These are worth studying.

 This chapter describes JavaScript’s rather eccentric take on objects
 and the way they relate to some classical object-oriented techniques.

                                Methods

 Methods are simply properties that hold function values. This is a simple
 method:
 */

var johnPietrangelo = {};

johnPietrangelo.speak = function(stringWords)
                        {
                            console.log("John Joseph Pietrangelo says,\"" + stringWords + "\"?!")
                        };

johnPietrangelo.speak("This is my life");  // John Joseph Pietrangelo says,"This is my life"?!
spacer();
/*
 Usually a method needs to do something with the object it was called from.

 When a function is called as a method(looked up as a property) and
 immediately called, as in '[object].method()'.  The special variable 'this' in its
 body, will point to the [object] that it was called from.
 */
function talkingSmack(line)
{
    console.log('The ' + this.type + 'guy says,\"' + line +'\".');
}

var goodGuy = {
                   type: "good",
                   speak: talkingSmack
              };

var badGuy = {
                   type: "bad",
                   speak: talkingSmack
             };

goodGuy.speak("Do you feel lucky punk, well do ya?");

badGuy.speak("You know it bitch!");

spacer();



/*
 The code uses the 'this' keyword to output the type of [guy] that is
 speaking.

 Recall that the apply and bind methods both take a first argument
 that can be used to simulate method calls.

 This first argument is in fact used to give a value to this.

 There is a method similar to apply, called call.

 It also calls the function it is a method of but takes its arguments normally, rather than as an
 array.

 Like apply and bind, call can be passed a specific this value.
 */

talkingSmack.apply(goodGuy,["Stop, in the name of the law!"]);

talkingSmack.call({type:"watching-"},"Why are they fighting?");

spacer();

//--------------------------------------------------------------------

/*
                            Prototypes

 Watch closely.
 */

var objectEmpty = {};

console.log(objectEmpty.toString); // [Function: toString]
space();

console.log(objectEmpty.toString()); // [object Object]
spacer();

/*
 In addition to their set of properties, almost all objects also have a prototype(super-class).

 A prototype is another object that is used as a base source of properties.

 When an object gets a request for a property that it does not have, its prototype will be
 searched for the property, then the prototype’s prototype, and so on.

 So who is the prototype of that empty object? The entity behind almost all objects, 'Object.prototype'.
 */

console.log(Object.getPrototypeOf({}) == Object.prototype); // true
space();

console.log(Object.getPrototypeOf(objectEmpty)); // {}
space();

console.log(Object.getPrototypeOf(objectArray_Ancestors)); // [] -> Array.Prototype
space();

console.log(Object.getPrototypeOf(Object.getPrototypeOf(objectArray_Ancestors))); // {} -> Object.Prototype
space();

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(objectArray_Ancestors)))); // null -> Object.prototype is the root of ALL objects.
space();

console.log(Object.getPrototypeOf(Object.prototype)); // null
spacer();

/*
 As you might expect, the 'Object.getPrototypeOf' function returns the prototype
 of an object.

 The visual construct, of prototype inheritance, form an upside-down, tree structure.
 At the apex(top) of this structure, sits 'Object.prototype'.

 It provides a few methods that show up in all objects, such as 'toString', which converts
 an object to a string representation.

 Many objects don’t directly have Object.prototype as their direct-prototype,
 but instead have another object, which provides its own default properties.

 Functions derive from 'Function.prototype', and arrays derive from 'Array.prototype' and they are in-turn derived from Object.prototype.
 */

console.log(Object.getPrototypeOf(isNaN) == Function.prototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(isNaN)) == Object.prototype); // true

space();

console.log(Object.getPrototypeOf([]) == Array.prototype);  // true

space();

console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype); // true
spacer();

/*
 Such a prototype object will itself have a prototype, often Object.prototype
 , so that it still indirectly provides methods like toString.

 The 'Object.getPrototypeOf' function obviously returns the prototype of
 an object.

 You can use Object.create to create an object with a specific
 prototype.
 */
// The following newly created object(holding only one property 'speak'(which is a 'method'(a function stored within an object))
// will be used as a 'node' from the origin of all objects: 'Object.prototype'.

// This node will be the 'apex-object' of all other 'Human' objects,
// which use 'objectHumanPrototype' as the argument to 'Object.create().

var objectHumanPrototype = {
                                speak: function(line)
                                {
                                    console.log("The " + this.type + " human says,\"" + line +"\"!");
                                }
                            };

// A new object, created with inserting 'objectHumanPrototype' into the 'Object.create()' parameter.

var objectIncompetentHuman = Object.create(objectHumanPrototype);

// The following line declares the object's local property 'type'. It also initializes it to 'Evil'.

objectIncompetentHuman.type = "Evil";

// The following line calls on objectEvilHuman's property 'speak', with a 'string' as its argument.

objectIncompetentHuman.speak("I am going to make America great again, Big League"); // The Evil human says,"I am going to make America great again, Big League"!
spacer();

/*
 The “objectHumanPrototype” object acts as a common source, for the properties that are shared
 by all humans.

 An 'individual human object', like the 'objectEvilHuman', contains
 properties and/or property values that apply only to itself(type).

-------------------------------------------------------------------------------------

                            Constructors

 A more convenient way to create objects that derive properties from some shared
 prototype, is to use a 'constructor'.

 In JavaScript, calling a function with the 'new' keyword in front of it,
 causes it to be treated as a constructor.

 The constructor will have a 'this' variable, which is bound to the object being created.

 unless it explicitly returns another object value, this new object will be
 returned directly from the call.

 An object created with 'new' is said to be an 'instance of its constructor'.

 The following is a 'simple' constructor, for human objects.

 ***
 It is a convention to 'capitalize the names of ALL constructors!!!!
 (so that they are easily distinguished from other functions.)
 ***

 */
// A constructor named 'Human', holding one initial property,'type'.

function Human(type)
{
    this.type = type;
}

// The following line declares an object named 'objectBadHuman', which is initialized to a 'Human' object,
// via calling the 'Human' constructor, which in-turn initializes the 'Human' object's 'type' property to 'Capitalist',
// by passing the argument "Capitalist"(string data-type) through the constructor's parameter.

var objectBadHuman = new Human("Capitalist");

// The following line declares an object named 'objectBadHuman', which is initialized to a 'Human' object,
// via calling the 'Human' constructor, which in-turn initializes the 'Human' object's 'type' property to 'Socialist',
// by passing the argument "good"(string data-type) through the constructor's parameter.

var objectGoodHuman = new Human("Socialist");

//-------------------------------------------------

console.log(objectBadHuman.type); // Capitalist
space();

console.log(objectGoodHuman.type); // Socialist
spacer();

/*
 *** Constructors automatically receive a property named 'prototype',                     ***
     which by default holds an empty object that is derived from Object.prototype.
     Every instance created with this constructor will have this object as its prototype.

 The following line adds a method called 'speak' to 'all human objects' created with the 'Human constructor'.
 */
Human.prototype.speak = function(line)
                        {
                            console.log("The " + this.type + " Human says,\"" + line + "\"!");
                        };
//-----------------------------------------------------------------------------------------------------------------

objectGoodHuman.speak("Unus pro omnibus, omnes pro uno"); //The Socialist Human says,"Unus pro omnibus, omnes pro uno"!
space();

objectBadHuman.speak("He/She who has the gold, makes the rules"); //The Capitalist Human says,"He/She who has the gold, makes the rules"!
spacer();
/*
 It is important to note the distinction between the way a prototype
 is 'associated' with a constructor(through its prototype property) and
 the way objects 'have' a prototype (which can be retrieved with Object.getPrototypeOf).

 The actual prototype of a constructor itself and not the objects it produces, is 'Function.prototype'.
(Since constructors are functions.)

 Its prototype property will be the prototype of instances created through it but is not its own prototype.*

 */
//-------------------------------------------------------------------------------------------------------------
/*
                    Overriding derived properties

 When you add a property to an individual object, whether the property is already present in the
 prototype or not, the property is added to the object itself, which will
 henceforth hold it as its 'individual' or 'local' property.

 If there is a property by the same propertyName in the object's prototype-object,
 the prototype-object's property will be over-written and will no longer affect the derived object.

 The prototype itself is not changed.
 */

//The following line declares 'hands' as a 'Human' prototype-object property
//and initializes the property's value to 'Large'.
Human.prototype.hands = "Large";

//The following line displays the value of objectBadHuman's 'hands' property to the console screen.
console.log(objectBadHuman.hands); // Large
space();

//The following line displays the value of objectGoodHuman's 'hands' property to the console screen.
console.log(objectGoodHuman.hands); // Large
space();

//The following line overrides objectBadHuman's 'hands' property value, 'large'.
// Which it acquired through it's prototype-object.
// The value for this individual object now holds the string,'Small & Sweaty".
objectBadHuman.hands = "Small & Sweaty";

//The following line displays the value of objectBadHuman's 'hands' property to the console screen.
console.log(objectBadHuman.hands); // Small & Sweaty
space();

//The following line shows that change to the value of the 'hands' property for the objectGoodHuman was not affected.
console.log(objectGoodHuman.hands); // Large
space();

//The following line shows that change to the value of the 'hands' property for the Human.prototype was not affected.
console.log(Human.prototype.hands); // Large
spacer();

/*
 Overriding properties that exist in a prototype is often a useful thing to do.

 As the human objects example showed, it can be used to express
 exceptional properties in a an instance of one object, associated with a more generic class of objects,
 while letting the rest of the class of objects take a standard value from their prototype.

 For example, property-overriding is used to give the standard 'function' and 'arrayNums' prototypes a
 different 'toString' method than their root, 'object' prototype.
 */

console.log(Array.prototype.toString == Object.prototype.toString); // false
space();

console.log(Object.getPrototypeOf(Array.prototype).toString == Object.prototype.toString); // true
space();


//Calling 'toString' on an arrayNums gives a result similar to calling .join(",").
// It puts commas between the values in the arrayNums.

var array1To5 = [1,2,3,4,5];

console.log(array1To5.toString()); // 1,2,3,4,5
space();

console.log(array1To5.join(',')); // 1,2,3,4,5
space();
/*
 Directly calling Object.prototype.toString with an arrayNums produces a different string.
*/
console.log(Object.prototype.toString.call(array1To5)); // [object Array]
/*
 That function didn't know about arrays, so it simply puts the word 'object'
 and the propertyName of the object-type 'Array', between square brackets.
 */
spacer();
/*
--------------------------------------------------------------------------------------------------------
                        Prototype interference

 A prototype can be used at any time to add new properties and methods
 to all objects based on it.

 For example, it might become necessary for 'all' humans to fight.
 */

Human.prototype.fight = function()
                        {
                            console.log("The " + this.type + " Human attacks with powerful weapons.");
                        };

objectGoodHuman.fight(); // The Socialist Human attacks with powerful weapons.
space();

objectBadHuman.fight(); // The Capitalist Human attacks with powerful weapons.
spacer();
/*
 That’s convenient. But there are situations where it causes problems.

 In previous chapters, we used an object(map1) as a way to associate values
 with names, by creating properties for the names and giving them the
 corresponding value as their value.

 Previous example:

 var map1 = {};

 function storePhi(event, phi)
 {
     map1[event] = phi;
 }
*/

//storePhi("pizza", 0.069);

//storePhi("touched tree", -0.081);

/*
 We can iterate over all phi values in the object using a 'for/in' loop and
 test whether a 'property-propertyName' is in there using the regular 'in' operator. But
 unfortunately, the object’s prototype gets in the way.
 */

Object.prototype.visiblePropertyInAllObjects = "An added property to the root-object prototype";

for(var propertyName in map1)
{
    console.log(propertyName);
}
/*
 pizza
 touched tree
 visiblePropertyInAllObjects
 */
spacer();

// Our most recently created object.
for(var propertyName in objectGoodHuman)
{
    console.log(propertyName);
}
/*
 type
 speak
 hands
 fight
 visiblePropertyInAllObjects
 */
spacer();

//---------------------------------------------------------------------------------

console.log("visiblePropertyInAllObjects" in objectGoodHuman); // true
space();

console.log("toString" in objectGoodHuman); // true
spacer();

/*
 To delete prototype's property
 */
delete Object.prototype.visiblePropertyInAllObjects;

console.log(map1.visiblePropertyInAllObjects); // undefined
space();

console.log(Human.prototype.visiblePropertyInAllObjects); // undefined
spacer();

/*
 Let us analyse the two lines before we deleted the 'PropertyInAllObjects' property.

 There was no event called “visiblePropertyInAllObjects” in our map1 data set.
 And there definitely was no event called “toString”.

 Notice, toString did not show up in the 'for/in' loop as “visiblePropertyInAllObjects” did,
 but the 'in' operator did return 'true' for it.

 This is because JavaScript distinguishes between
 'enumerable' and 'non-enumerable' properties.

 All properties that we create by simply assigning them, are 'enumerable'.

 The 'standard' properties in 'Object.prototype' are all 'non-enumerable',
 which is why they do not show up in a 'for/in' loop.

 It is possible to define our own 'non-enumerable' properties by using
 the 'Object.defineProperty' function, which allows us to control the type of
 property we are creating.
 *///***********************************************************************************************
Object.defineProperty(Object.prototype,
                      "hiddenPropertyInAbsolutelyAllObjects",
                       {
                           enumerable: false,
                           value: "An added, hidden-property to the Root-object prototype."
                       });

Object.defineProperty(Human.prototype,
    "hiddenPropertyInOnlyAllHumanObjects",
    {
        enumerable: false,
        value: "An added, hidden-property to the Human-object prototype."
    });

for(var propertyName in map1)
{
    console.log(propertyName);
}
spacer();
/*
 pizza
 touched tree
 */

for(var propertyName in objectGoodHuman)
{
    console.log(propertyName);
}
spacer();
/*
 type
 speak
 hands
 fight
 */

console.log("hiddenPropertyInAbsolutelyAllObjects" in map1); // true
space();

console.log("hiddenPropertyInAbsolutelyAllObjects" in objectGoodHuman); // true
space();

console.log("hiddenPropertyInOnlyAllHumanObjects" in map1); // false
space();

console.log("hiddenPropertyInOnlyAllHumanObjects" in objectGoodHuman); // true
space();

console.log(map1.hiddenPropertyInAbsolutelyAllObjects); // An added, hidden-property to the root-object prototype.
space();

console.log(Object.prototype.hiddenPropertyInAbsolutelyAllObjects); // An added, hidden-property to the root-object prototype.
space();

console.log(Human.prototype.hiddenPropertyInAbsolutelyAllObjects); // An added, hidden-property to the root-object prototype.
spacer();

console.log(map1.hiddenPropertyInOnlyAllHumanObjects); // undefined
space();

console.log(Object.prototype.hiddenPropertyInOnlyAllHumanObjects); // undefined
space();

console.log(Human.prototype.hiddenPropertyInOnlyAllHumanObjects); // An added, hidden-property to the Human-object prototype.
spacer();

/*
 So now the properties are there, but they won’t show up in a loop.

 But we still have the problem with the regular 'in' operator claiming
 that the Object.prototype properties exist in our object.

 For that, we can use the object’s hasOwnProperty method.
 */

console.log(map1.hasOwnProperty("hiddenPropertyInAbsolutelyAllObjects")); // false
space();

console.log(map1.hasOwnProperty("toString")); // false
space();

console.log(Object.prototype.hasOwnProperty("hiddenPropertyInAbsolutelyAllObjects")); // true
space();

console.log(Object.prototype.hasOwnProperty("toString")); // true
spacer();

console.log(objectGoodHuman.hasOwnProperty("hiddenPropertyInOnlyAllHumanObjects")); // false
space();

console.log(Human.prototype.hasOwnProperty("hiddenPropertyInOnlyAllHumanObjects")); // true
spacer();

console.log(objectGoodHuman.integrity); // undefined
space();

objectGoodHuman.integrity = true;

console.log(objectGoodHuman.hasOwnProperty("integrity")); // true
space();

console.log(objectBadHuman.hasOwnProperty("integrity")); // undefined
spacer();
/*
 This method tells us whether the object itself has the property, without looking at its prototypes.

 This is often a more useful piece of information than what the in operator gives us,
 when you are worried that someone (unknown code loaded into your program)
 might have manipulated the root-object prototype.

 I recommend you write for/in loops like this:
 */

for(var propertyName in map1)
{
    if(map1.hasOwnProperty(propertyName))
    {
        console.log(propertyName);
    }
}
/*
 pizza
 touched tree
 */
spacer();

/*
--------------------------------------------------------------------------------------------
                        Prototype-less objects

 What if someone re-declared the 'value' of the property-function 'hasOwnProperty' in our map1 object,
 setting it to the 'value' of 42?

 A call to map1.hasOwnProperty would then call the local property, which now holds a number, not a function!

 In such a case, prototypes just get in the way, and we would actually prefer to have objects without prototypes.

 We saw the 'Object.create' property-function, which allows us to create an object with a specific prototype.

 You are allowed to pass null as the prototype, to create a fresh object without a root-prototype.

 For objects like map1, where the properties could be anything, this is exactly what we want.
 */

map1 = Object.create(null);

map1["sleeping"] = 0.099;

console.log("sleeping" in map1); // true
space();

console.log("toString" in map1); // false
spacer();

/*
 Much better! We no longer need the hasOwnProperty processing, because all the
 properties the object has are its own properties. Now we can safely use
 for/in loops, no matter what people have been doing to Object.prototype.
 */

/*
----------------------------------------------------------------------------------------------------

                                    Polymorphism

 When you call the 'toString' function(which converts a value to a string data-type) on
 an object, it will try to create a meaningful string to return.

 I mentioned that some of the standard prototypes(Array.prototype) define their own version of toString,
 so they can create a string that contains more useful information than "[object Object]".

 When a piece of code is written to work with objects that have a certain interface—in this
 case, a toString method—any kind of object that happens to support this interface,
 can be plugged into the code and it will work.

 This technique is called polymorphism—though no actual shape-shifting
 is involved. Polymorphic code can work with values of different shapes,
 as long as they support the interface it expects.
 
 --------------------------------------------------------------------------------------------------

                            Exercise: Table Layout (Take your time analyzing this section)

---------------------------------------------------------------------------------------------------
 The layout program will communicate with the cell objects through
 a well-defined interface.

 That way, the types of cells that the program supports is not fixed in advance.

 We can add new cell styles later on.
 For example, underlined cells for table headers.

 If they support our interface, they will work, without requiring changes to the layout program.

 This is the interface:

 • minHeight() returns a number indicating the minimum height this
 cell requires (in lines).

 • minWidth() returns a number indicating this cell’s minimum width
 (in characters).

 • draw(width, height) returns an arrayNums of length height, which contains
 a series of strings that are each width characters wide. This represents
 the content of the cell.

 I’m going to make heavy use of higher-order arrayNums methods in this example
 since it lends itself well to that approach.

 The first part of the program computes arrays of minimum Row heights and column
 widths for a grid of cells.

 One quick note before I begin. Using a '_' at the beginning of A variable propertyName or consisting
 entirely of a single underscore, is a way to indicate (to human readers)
 that this argument is not going to be used.

--------------------------------------------------------------------------------------
 Now let’s write a 'Constructor' for objects that contain text, which implements
 the interface for table cells.
 -------------------------------------------------------------------------------------
 */

// Constructor for 'TextCell' object.
// containing 1 property: 'text'.(which holds the value sent through the Constructor's parameter,
//  as a 'string' data-type argument.)

function TextCell(string_input)
{
    //The String.split() method, splits a 'String' into an 'Array-of-Strings' by separating the string into sub-strings,
    // using a specified 'separator character' to determine where to make each split.
    // For this example I use \n. (\n = new line)
    this.text = string_input.split("\n");
}

//---------------------------------------------------------------------------------
//**** Defining additional 'TextCell' properties, outside the constructor. ****
//---------------------------------------------------------------------------------

// Code to define 'minWidth' property, of the 'TextCell' object:
// Returns the greatest string-length value of 'TextCell' object's 'text' property(arrayNums data-type).
TextCell.prototype.minWidth = function()
{
    return this.text.reduce(function(int_width, string_input)
    {
        return Math.max(int_width, string_input.length);
    }, 0); // int_width's initial value
};

// Code to define 'minHeight' property, of the 'TextCell' object:
// Returns the value of the TextCell's, text property's(arrayNums data-type) length.

TextCell.prototype.minHeight = function()
{
    return this.text.length;
};

// The Following code defines the 'draw' property, of the 'UnderLineCell' object.
//(Returns a visible construct(block), made up of the data held within the object's 'innerElement' property.
// Which is has been formatted within the dimensions of the cell's 'minHeight' & 'minWidth' properties.)
TextCell.prototype.draw = function(int_width, int_height)
{
    var arrayStrings_result = [];

    for(var int_i = 0; int_i < int_height; int_i++)
    {
        var string_line = this.text[int_i] || "";

        arrayStrings_result.push(string_line + repeat(" ", int_width - string_line.length))
    }
    return arrayStrings_result;
};
/*
 repeat function, builds a string whose value is the 'string' argument, repeated an 'int_IterationCount', number of times.
 The 'draw' method uses it to add “padding” to lines so that they all have the
 required length.
*/
function repeat(string_input, int_iterationCount)
{
    var string_result = "";

    for(var int_i = 0; int_i < int_iterationCount; int_i++)
    {
        string_result += string_input;
    }

    return string_result;
}
//-------------------------------------------------------------------------------------------------------
// now let’s build up the variable which will hold the content-data for a 5-row by 5-cell checkerboard.
//-------------------------------------------------------------------------------------------------------

// Variable holding all the rows(arrays), which hold the checker-board's cells(objects).
var arrayArraysOfObjects_checkerBoard = [];

// loop for collecting the element-data of checker-board's rows (in this example, set at 5 rows).
for(var int_i = 0; int_i < 5; int_i++)
{
    // Variable holding each loop iteration's row(arrayNums),
    // which contain the cells(objects),
    // which contain the element-data(properties) of the board.
    var arrayObjects_Row = [];

    // loop for collecting the element-data of the 5 cells(objects) of the row(arrayNums).
    for(var int_j = 0; int_j < 5; int_j++)
    {
        // if the number-value of the iteration + number-value of checker-board row,
        // when divided by 2, has a remainder of 0, this "if" statement executes.
        if((int_j + int_i) % 2 == 0)
        {
            //appends(via the 'ArrayObject.push' method) a newly created 'TextCell'-object(via constructor) to arrayObjects_Row
            arrayObjects_Row.push(new TextCell("##"));
        }
        // if the number value of the iteration + number value of checker-board row,
        // when divided by 2, has a remainder of anything other than 0, this "else" statement executes.
        else
        {
            //appends(via the 'ArrayObject.push' method) a newly created 'TextCell'-object(via constructor) to arrayObjects_Row
            arrayObjects_Row.push(new TextCell("  "));
        }
    }
    // Once loop is complete, 1 checker-board row's element-data has been acquired(arrayObjects_Row) and is appended to the
    // 'arrayArraysOfObjects_checkerBoard' variable.
    arrayArraysOfObjects_checkerBoard.push(arrayObjects_Row);
}
//-----------------------------------------------------------------------------------------------------------------
//  Now we will write the function which will display a table(arrayNums of rows(arrayNums of objects(property bundles).
//--------------------------------------------------------------------------------------------------------------------
/*
 The 'drawTable' function will use an internal helper function 'drawRow' to draw
 all rows and then joins them together with the 'new-line' characters.
 */
function drawTable(arrayArraysOfObjects_table)
{
    // To declare an arrayNums-variable, which holds the number of lines each row in the table contains, in order to display all of the row's data.
    var arrayInts_cellHeights = rowHeights(arrayArraysOfObjects_table);
    // Checker table [ 1, 1, 1, 1, 1 ]
    // Mountain table [ 2, 1, 1, 1, 1, 1, 1]
    /*
     The 'rowHeights' function should not be too hard to follow.
     It uses 'reduce' to compute the maximum height of an arrayNums of cells(objects) and wraps that in
     'map', in order to repeat the process for all arrays of cells(objects) in the 'arrayArraysOfObjects_table'.

     The 'arrayArraysOfObjects_table' variable will hold an arrayNums of arrays,
     with each inner arrayNums representing a arrayNums of cells(objects).
     */
    function rowHeights(arrayArraysOfObjects_table)
    {
        // returns a single arrayNums of many values, with each index holding the height-value, of the largest object,
        // in each arrayNums-of-objects, in the arrayNums-of-arrays-of-objects. By using the 'Array.map()' method
        return arrayArraysOfObjects_table.map(function(arrayObjects_row)
                                          {
                                              // returns a single value, holding the height-value, of the largest object,
                                              // in a given arrayNums, of an arrayNums-of-objects By using the Array-method, 'Array.reduce()'.
                                              return arrayObjects_row.reduce(function(int_maxHeightFound, object_cell)
                                                                           {
                                                                               // The Math.max() method, compares each property value against the previous loops returned value,
                                                                               // in conjunction with the object's 'minHeight()' method.
                                                                               return Math.max(int_maxHeightFound, object_cell.minHeight());
                                                                           }, 0);//<-- int_maxHeightFound's initial value
                                          });
    }
    /*
     Things are slightly more complex in the 'columnWidths' function because the outer
     arrayNums is an arrayNums of arrays(Rows), not an arrayNums of objects(cells).

     'Array.map','Array.forEach', 'Array.filter', and other Array methods pass
     a second argument to the function it holds: The index of the current arrayNums-element.

     By mapping over the elements of the first arrayNums of 'arrayArraysOfObjects_table' and only using
     the mapping function’s second argument 'int_i', the function 'columnWidths', builds up an arrayNums,
     holding the numeric value of the longest strings length, for every column(element's index), respectively.
     */

    // Code to declare a Array-variable, which holds the exact number of characters each column's width holds,
    // in order to display all of the data, in all of the table's cells.

    var arrayInt_CellWidths = columnWidths(arrayArraysOfObjects_table);
    // Checker table [ 2, 2, 2, 2, 2 ]
    // Mountain table [ 12, 6, 13 ]

    function columnWidths(arrayArraysOfObjects_table)
    {
        //Following line of code returns an integer-arrayNums, of the largest string-length for each respective index, of the 1st arrayNums-of-objects,
        //from amongst the same index of every arrayNums-of-objects, in the arrayNums-of-arrays-of-objects.
        //This is accomplished by calling arrayArraysOfObject's 'Array.map()' method on it's 1st arrayNums-of-objects.

        //The 'Array.map()' method is using the '_' symbol to signify:
        //the 1st default argument of 'Array.map()'(value within the index), is will not be utilized and only
        //its 2nd default argument(index number), carries a value which will be used in the method(Object-held function).
        return arrayArraysOfObjects_table[0].map(function(_, int_i)
                                             {
                                                 // loop runs through the 'int_i' index of arrayNums and
                                                 // returns an integer data-type, of the greatest value in that index, from amongst the arrayNums-of-arrays-of-objects.

                                                 //The call to 'Array.reduce' runs over the outer arrayArraysOfObjects_checkerBoard arrayNums for each index and picks out
                                                 //the width of the widest cell at that index.
                                                 return arrayArraysOfObjects_table.reduce(function(int_maxWidthFound, arrayObjects_row)
                                                                                      {
                                                                                          //Each loop returns the greater value, between the current value and the
                                                                                          //value of the previous arrayNums's string-length, of the same index number.
                                                                                          return Math.max(int_maxWidthFound, arrayObjects_row[int_i].minWidth());
                                                                                      }, 0);//<-- int_maxWeigtFound's initial value
                                             });
    }
//       *** arrayArraysOfObjects_table's map() method *** -- A standard function within an object-property
// ----------------------------------------------------------------------------------------------------
//           Utilized in this example to send two 'implicit' default arguments to its parameter's inner-function,'drawRow()'.
//           Each loop iteration sends the variable argument values,
//           for its corresponding index in the arrayNums-of-objects, in the arrayNums-of-arrays-of-objects.

//           1st default argument: Value being held within index. Example -> arrayNums[3]  index content: objects
//           2nd default argument: index number.                  Example -> 0         index number: initial index
    return arrayArraysOfObjects_table.map(drawRow).join("\n");
   /*
    The 'drawRow' function itself first converts the cell objects in the arrayObjects_Row to
    blocks, which are arrays of strings representing the content of the cells,
    split by line.

    A single cell containing simply the number 3776 might be
    represented by a single-element arrayNums like ["3776"], whereas an underlined
    cell might take up two lines and be represented by the arrayNums ["propertyName", "----"].

    The blocks for a arrayObjects_Row, which all have the same height, should appear
    next to each other in the final output.

    The second call to 'Array.map' in 'drawRow', builds up this output, row by row.

    By mapping over the lines in the leftmost block and, for each of those, collecting a line that spans the full
    width of the table.

    These lines are then joined with newline characters
    to provide the whole arrayObjects_Row as the drawRow()’s return value.
    */
    function drawRow(arrayObjects_row, int_rowIndex)
    {
        // The following arrayNums-variable, holds cell-data, extracted from the objects in the arrayNums-of-objects.
        // Storing each cell's data in optimally sized boxes.
        // The arrayNums-of-objects's 'Array.map()' method
        // is using an object and its index position(in the arrayNums which holds it)
        // as its parameter's arguments.
        var arrayStrings_rowBlock = arrayObjects_row.map(function(object_Cell, int_CellIndex)
                                                             {
                                                                 // The following 'draw()' method takes in two arguments.

                                                                 // 1. 'width-value' from the index value of arrayInt_CellWidths(arrayNums of 'max string lengths' for each of the table's columns)
                                                                 // which corresponds with the the inner-loop iteration(row's column-index).

                                                                 // 2. 'height-value' from arrayInts_cellHeights(arrayNums of 'max-number of lines' for each of the table's rows)
                                                                 // which corresponds with the outer-loop iteration(tables's row-index)
                                                                 return object_Cell.draw(arrayInt_CellWidths[int_CellIndex], arrayInts_cellHeights[int_rowIndex]);
                                                             });

        return arrayStrings_rowBlock[0].map(function( _, int_CellLineIndex)
                                            {
                                                return drawLine(arrayStrings_rowBlock, int_CellLineIndex);
                                            }).join("\n");

        /*
         The function 'drawLine' extracts lines that should appear next to each
         other from an arrayNums of blocks and joins them with a space character to
         create a one-character gap between the table’s columns.
         */
        function drawLine(arrayStrings_blocks, int_lineNumber)
        {
            return arrayStrings_blocks.map(function(string_block)
            {
                return string_block[int_lineNumber];
            }).join(" ");
        }
    }

}

// That should do the trick!  Let's use the 'console.log' function to call the 'drawTable' function,
// which will use the variable holding the checkerBoard-data, as its parameter's argument.

console.log(drawTable(arrayArraysOfObjects_checkerBoard));
spacer();

/*
 It works! But since all cells have the same size, the table-layout code
 doesn’t really do anything interesting.


//-------------Table Application: Mountain Ranges---------------------------------------------------

 We will want to highlight the top arrayNums of objects, which contain the column
 propertyName(headers), by underlining the cells with a series of dash characters.
 So my solution would be to write a cell-type that handles underlining.

 *** An UnderLinedCell contains a TextCell cell, it is not a TextCell in itself****.

 An UnderLinedCell reports its size as being the same as that of its 'innerElement' property(which holds a TextCell)
 by calling through to that cell’s 'minWidth' and 'minHeight' methods)
 and using those values and one other slight modification. It adds one line to its own minHeight property,
 to account for the space taken up by the underline.

 (when 'drawn', one line will display it's 'innerElement'(object) property's, 'text' property.
   The other will display a row of dashes for the length of each given cell's 'minWidth' property.)
 */

//The Following code defines the 'Constructor' for the 'UnderLineCell' object. (containing 1 property: 'innerElement', with value of an object,'TextCell'.)
function UnderLineCell(object_TextCell)
{
    this.innerElement = object_TextCell;
}

//---------------------------------------------------------------------------------
//**** Defining additional 'TextCell' properties, outside the constructor. ****
//---------------------------------------------------------------------------------

// The Following code defines the 'minWidth' property, of the 'UnderLineCell' object (returns the value of 'TextCell' object's width).
UnderLineCell.prototype.minWidth = function()
                                   {
                                       return this.innerElement.minWidth();
                                   };
// The Following code defines the 'minHeight' property, of the 'UnderLineCell' object (returns the value of 'TextCell' object's height times 2).
UnderLineCell.prototype.minHeight = function()
                                    {
                                        return this.innerElement.minHeight() * 2;
                                    };

// The Following code defines the 'draw' property, of the 'UnderLineCell' object.
//(Returns a visible construct(block), made up of the data held within the object's 'innerElement' property.
// Which is has been formatted within the dimensions of the cell's 'minHeight' & 'minWidth' properties.)
UnderLineCell.prototype.draw = function(int_width, int_height)
                               {
                                   // This code returns the value of 'draw' property, of the 'TextCell' object,
                                   // with-in it's own(this) 'innerElement' property.
                                   // It then uses the 'String.concat' method in tandem with the 'repeat' function,
                                   // to add a string of dashes to the returned 'innerElement.text' value.
                                   // (which was held with-in the TextCell's 'text' property, held within the UnderLineCell's 'innerElement' property)

                                   return this.innerElement.draw(int_width, (int_height / 2)).concat([repeat("-", int_width)]);

                               };
/*
 Now that the UnderlineCell constructor has been writen, we can write a variable which will hold an Array of JSONs.
 */
var arrayObjects_MountainData = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

//-----------------------------------------------------------------------------------------------------------------
//  Now we will write the function which will take each property of each JSON
//  and create an object from them, to display, in the cells, of the rows, of the table,
// which will be drawn to the console screen.
//--------------------------------------------------------------------------------------------------------------------

function populateTableCells(arrayObjects_JSONs)
{
    //The Object.keys() method returns an 'Array' of a given object's local enumerable properties,
    // (the difference being that a for-in loop returns enumerated properties in the prototype chain as well).

    //The following line stores each enumerable property(Its "property-Name" not "property-Value"),
    // of the 1st object in the 'arrayObjects_JSONs',
    //into a newly created arrayNums-of-strings,"arrayStrings_tableProperties".
    //The Object class's "Object.keys()" method is used to locate the "arrayObjects_JSONs[0]" properties

    var arrayStrings_tableProperties = Object.keys(arrayObjects_JSONs[0]);

    /*The 'arrayStrings_tableProperties' Array.map() method shown below, is used to extract and return an arrayNums-of-objects.
      The returning arrayNums-of-Objects(a local var to Array.map()), is used as the declaration
      for the newly initialized variable, 'arrayObjects_headerCells'(a local var to populateTableCells()).*/

    var arrayObjects_headerCells = arrayStrings_tableProperties.map(function(string_property)
    {
        // The following line of code is storing each 'string' held within the 'arrayStrings_tableProperties' arrayNums,
        // into its own newly created TextCell-object's "text" property.
        // That TextCell-object is then stored into a newly created UnderLineCell-object's "innerElement" property.
        // The UnderLineCell-object's are then stored into the newly created arrayNums-of-objects,"arrayObjects_headerCells"
        return new UnderLineCell(new TextCell(string_property));
    });

    // Following line declares 'arrayOfArrayObjects_headerRow' and initializes it to an empty arrayNums.
    var arrayOfArrayObjects_headerRow = [];

    // Following line stores the arrayNums-of-objects into the 1st and only index of arrayOfArrayObjects_headerRow.
    arrayOfArrayObjects_headerRow.push(arrayObjects_headerCells);

    /* OuterLoop runs through each object of the 'populateTableCells'(this function's)
       argument(parameter: arrayObjects_JSONs), creating a new arrayNums-of-arrays-of-Objects(table),
       constructed by the inner-loops 'returned' arrays(rows), of an JSON-objects(cells)
    */
    var arrayOfArraysObjects_bodyRows = arrayObjects_JSONs.map(function(object_JSON)
                                                                           {
                                                                               // returns an arrayNums of TextCell-objects,
                                                                               // one object for each property of the JsonObject being mapped.
                                                                               return arrayStrings_tableProperties.map(function(string_tableProperty)
                                                                                                                       {
                                                                                                                           // Creates new TextCell-object, storing string_tableProperty values
                                                                                                                           // into TextCell's "text" string_tableProperty value.

                                                                                                                           // The Object.ToString() is used to convert any returning string_tableProperty-value
                                                                                                                           // to a string data-type before storing the argument's string_tableProperty value
                                                                                                                           // into the new TextCell-object's 'text' string_tableProperty.
                                                                                                                           return new TextCell((object_JSON[string_tableProperty].toString()));
                                                                                                                       });
                                                                           });

    return arrayOfArrayObjects_headerRow.concat(arrayOfArraysObjects_bodyRows);

    //  *** The commented-out line below will return the same result as the one above, in a more efficient manor.***
    //  return [arrayObjects_headerCells].concat(arrayOfArraysObjects_bodyRows);
}

// That should do the trick!  Let's use the 'console.log' function to call the 'drawTable' function,
// which calls the'populateTableCells' function, which is using the variable 'arrayObjects_MountainData',
// as its parameter's argument.

console.log(drawTable(populateTableCells(arrayObjects_MountainData)));
spacer();
//--------------------------------------------------------------------------------
/*
                            * Getters and setters *

 When specifying an interface, it is possible to include properties that
 are not methods. We could have defined minHeight and minWidth to simply
 hold numbers. However, that would have required the properties to be computed in the
 constructor, which would have added code not strictly relevant to constructing
 the object.

 It would have caused problems if, the innerElement(TextCell-object) of an UnderLineCell was changed,
 at which point the size of the underlined cell would not also change along side.

 This has led some engineers to adopt a principle of never including 'non-method'
 properties into interfaces.

 Rather than directly access a simple value property, they’d use the 'get' and 'set' methods to read
 and write the property. This approach has the downside that you will
 end up writing—and reading—a lot of additional methods.

 Fortunately, JavaScript provides a technique that gets us the best of
 both worlds. We can specify properties that, from the outside, look like
 normal properties but secretly have methods associated with them.

 In an object literal, the get or set notation for properties allows you
 to specify a function to be run when the property is read or written.

 You can also add such a property to an existing object, for example a
 prototype, using the 'Object.defineProperty' function (which we previously
 used to create non-enumerable properties).
 */

var objectPile =
    {
        elements: ['rocks','dirt','soil','grass'],

        get height()
        {
            return this.elements.length;
        },

        set height(value)
        {
            console.log('Ignore attempt to set height to', value);
        }
    };

console.log(objectPile.height); // 4
space();

objectPile.height = 100; // Ignore attempt to set height to 100
space();

console.log(objectPile.height); // 4
spacer();

/*
 You can use a similar set property, in the object passed to defineProperty, to specify a setter method.
 When a getter but no setter is defined, writing to the property is simply ignored.
 */

Object.defineProperty( TextCell.prototype, 'heightProperty',
                                            {
                                                get: function ()
                                                {
                                                    return this.text.length;
                                                }
                                            });

var objectCellX = new TextCell('To be \n or \n  not to be. \n   That is the question.');

/*
console.log(objectCellX.text); // [ 'To be ', ' or ', '  not to be. ', '   That is the question.' ]
space();

console.log(objectCellX.text.toString()); // To be , or ,  not to be. ,   That is the question.
space();

console.log(objectCellX.text.join('\n')); /* To be
                                              or
                                               not to be.
                                                That is the question.
spacer();
 */

objectCellX.heightProperty = 100;  //This line of code is ignored.
                                   // Because there is a getter but no setter for property,'heightProperty'.

console.log(objectCellX.heightProperty); // 4
space();

/*
                        *** Inheritance ***

 We are not quite done yet with our table layout exercise.

 It helps readability to right-align columns of numbers.

 We should create another cell type that is like 'TextCell', but rather than padding the lines on the right side,
 it pads them on the left side so that they align to the right.

 We could simply write a whole new constructor with all three methods
 in its prototype.

 But prototypes may themselves have prototypes, and
 this allows us to do something clever.
 */

// Constructor for objects with their 'text' property aligned to the right when their 'draw' method is called.
function RightAlignedTextCell(text)
{
    //Using the call method, in order to be able to give the 'textCell' constructor
    // the new 'RightAlignedTextCell' object as its 'this' value.
    TextCell.call(this, text);
}
/*
 Code for the 'RightAlignedTextCell' constructor’s prototype, to derive its properties from the 'TextCell' prototype.
 Now instances of this object-type will also have access to the properties in that 'TextCell' prototype.
*/
RightAlignedTextCell.prototype = Object.create(TextCell.prototype);

/*
 Finally, we can override some of these properties by adding
 them to our new prototype.
 */
RightAlignedTextCell.prototype.draw = function(width, height)
                                      {
                                          var result = [];

                                          for(var i = 0; i < height; i++)
                                          {
                                              var line = this.text[i] || '';
                                              result.push(repeat(' ', width - line.length) + line);
                                          }
                                          return result;
                                      };
/*
 We reuse the constructor and the 'minHeight' and 'minWidth' methods from the
 regular 'TextCell'. A RightAlignedTextCell is now basically equivalent to a TextCell,
 except that its draw method contains a different function.

 This pattern is called inheritance.

 It allows us to build slightly different data-types from existing data-types, with relatively little additional code.

 Typically, the new constructor will call the old constructor
(by using the call method, in order to be able to give it the new object as its this value).

 Once this constructor has been called, we can assume that all the fields that
 the old object type is supposed to contain have been added.

 We arrange for the constructor’s prototype to derive from the old prototype so that
 instances of this type will also have access to the properties in that
 prototype.

 Finally, we can override some of these properties by adding
 them to our new prototype.

 Now, if we slightly adjust the dataTable function to use RTextCells for
 cells whose value is a number, we get the table we were aiming for.
 */
function dataTable(arrayObjects_data)
{
    //The Object.keys() method returns an 'Array' of a given object's local enumerable properties,
    // (the difference being that a for-in loop returns enumerated properties in the prototype chain as well).

    //The following line stores each enumerable property(Its "property-Name" not "property-Value"),
    // of the 1st object in the 'arrayObjects_data',
    //into a newly created arrayNums-of-strings,"arrayStrings_keys".
    //The Object class's "Object.keys()" method is used to locate the "arrayObjects_data[0]" properties
    var arrayStrings_keys = Object.keys(arrayObjects_data[0]);

    /*The 'arrayStrings_tableProperties' Array.map() method shown below, is used to extract and return an arrayNums-of-objects.
     The returning arrayNums-of-Objects(a local var to Array.map()), is used as the declaration
     for the newly initialized variable, 'arrayObjects_headerCells'(a local var to populateTableCells()).*/

    var arrayObjects_headerCells = arrayStrings_keys.map(function(string_property)
    {
        // The following line of code is storing each 'string' held within the 'arrayStrings_tableProperties' arrayNums,
        // into its own newly created TextCell-object's "text" property.
        // That TextCell-object is then stored into a newly created UnderLineCell-object's "innerElement" property.
        // The UnderLineCell-object's are then stored into the newly created arrayNums-of-objects,"arrayObjects_headerCells"
        return new UnderLineCell(new TextCell(string_property));
    });

    // Following line declares 'arrayOfArrayObjects_headerRow' and initializes it to an empty arrayNums.
    var arrayOfArrayObjects_headerRow = [];

    // Following line stores the arrayNums-of-objects into the 1st and only index of arrayOfArrayObjects_headerRow.
    arrayOfArrayObjects_headerRow.push(arrayObjects_headerCells);

    /* OuterLoop runs through each object of the 'populateTableCells'(this function's)
     argument(parameter: arrayObjects_JSONs), creating a new arrayNums-of-arrays-of-Objects(table),
     constructed by the inner-loops 'returned' arrays(rows), of an JSON-objects(cells)
     */
    var arrayOfArraysObjects_bodyRows = arrayObjects_data.map(function(object_dataInstance)
                                                              {
                                                                  // returns an arrayNums of TextCell-objects,
                                                                  // one object for each property of the JsonObject being mapped.
                                                                  return arrayStrings_keys.map(function(string_property)
                                                                                               {
                                                                                                   var value = object_dataInstance[string_property];

                                                                                                   if(typeof value == 'number')
                                                                                                   {
                                                                                                       return new RightAlignedTextCell(value.toString());
                                                                                                   }

                                                                                                   else
                                                                                                   {
                                                                                                       return new TextCell(value.toString());
                                                                                                   }
                                                                                               });
                                                              });

    return arrayOfArrayObjects_headerRow.concat(arrayOfArraysObjects_bodyRows);

    //  *** The commented-out line below will return the same result as the one above, in a more efficient manor.***
    //  return [arrayObjects_headerCells].concat(arrayOfArraysObjects_bodyRows);
}

console.log(drawTable(dataTable(arrayObjects_MountainData)));
spacer();
/*
 Inheritance is a fundamental part of the object-oriented tradition, alongside
 encapsulation and polymorphism.

 While encapsulation and polymorphism are generally regarded as wonderful capabilities,
 inheritance is somewhat controversial.

 The main reason for this is that it is often confused with polymorphism,
 sold as a more powerful tool than it really is, and subsequently overused
 in all kinds of ugly ways.

 Whereas encapsulation and polymorphism can be used to separate pieces of code from each other, reducing the
 complexity of the overall program.

 Inheritance fundamentally ties types together, creating more complexity.

 You can have polymorphism without inheritance, as I have previously shown****where?.

 I am not going to tell you to avoid inheritance (I use it regularly in my
 own programs.) but you should see it as a slightly dodgy trick that can
 help you define new types with little code, not as a grand philosiphy of code
 organization.

 A preferable way to extend types is through composition,
 like how 'UnderlinedCell' builds on another cell object by simply storing
 it in one of its own properties and forwarding method calls to it, in its own methods.
 ( ex. UnderLinedText.innerElement.draw(10,2); ) <- calls TextCell's 'draw()' method
 from the UnderLinedText object which it is called from

                        The 'instanceof' operator

 It is occasionally useful to know whether an object was derived from
 a specific constructor. For this, JavaScript provides a binary operator
 called 'instanceof'.
 */

console.log(new RightAlignedTextCell('A') instanceof RightAlignedTextCell);
space();
// true

console.log(new RightAlignedTextCell('A') instanceof TextCell);
space();
// true

console.log(new TextCell('A') instanceof RightAlignedTextCell);
space();
// false

console.log([0] instanceof Array);
spacer();
// true

/*
 The operator will see through inherited types. A RightAlignedTextCell is an instance
 of TextCell because RightAlignedTextCell.prototype derives from TextCell.prototype. The
 operator can be applied to standard constructors like Array. Almost every
 object is an instance of Object.

                               *** Summary ***

 So objects are more complicated than I initially portrayed them. They
 have prototypes, which are other objects, and will act as if they have
 properties they don’t have as long as the prototype has that property.
 Simple objects have Object.prototype as their prototype.
 Constructors, which are functions whose names usually start with a
 capital letter, can be used with the new operator to create new objects.
 The new object’s prototype will be the object found in the prototype
 property of the constructor function. You can make good use of this by
 putting the properties that all values of a given type share into their prototype.
 The instanceof operator can, given an object and a constructor,
 tell you whether that object is an instance of that constructor.
 One useful thing to do with objects is to specify an interface for them
 and tell everybody that they are supposed to talk to your object only
 through that interface. The rest of the details that make up your object
 are now encapsulated, hidden behind the interface.
 Once you are talking in terms of interfaces, who says that only one kind
 of object may implement this interface? Having different objects expose
 the same interface and then writing code that works on any object with
 the interface is called polymorphism. It is very useful.

 When implementing multiple types that differ in only some details, it
 can be helpful to simply make the prototype of your new type derive
 from the prototype of your old type and have your new constructor call
 the old one. This gives you an object type similar to the old type but
 for which you can add and override properties as you see fit.

                                *** Exercises ***
 A vector type:

 Write a constructor named 'Vector' that represents a vector(coordinates) in two-dimensional
 space.

 It takes 'x' and 'y' for its parameters(arguments will be int data-types), which it should save to
 properties of the same name( 'x' and 'y').

 Give the Vector prototype two methods, plus and minus, that take another
 vector as a parameter and return a new vector that has the sum
 or difference of the two vector's (the vector in 'this' and the parameter's argument)
 'x' and 'y' values.

 *** EC: Add a getter property length to the prototype that computes the length
     of the vector(the distance of the point (x, y) from the origin (0,0)).

     formula to find length of vector:      Math.sqrt((this.x * this.x) + (this.y * this.y));
*/

//Constructor for vector
function Vector(x,y)
{
    this.x = x;
    this.y = y;
}

// code to declare 'minus' property for all Vector-object's prototype &
// to initialize the property's value through the property's method/function.

// Method takes in a vector-object as the parameter's argument and
// returns a 'new' vector-object(holding the value of the difference, between the two vector values).
Vector.prototype.minus = function(objectVector)
{
    var intX = this.x - objectVector.x;
    var intY = this.y - objectVector.y;

    return new Vector(intX, intY)
};

// code to declare 'plus' property for all Vector-object's prototype &
// to initialize the property's value through the property's method/function.

// Method takes in a vector-object as a parameter and
// returns a 'new' vector-object(holding the value of the sum, of the two vector values).
Vector.prototype.plus = function(objectVector)
{
    var intX = this.x + objectVector.x;
    var intY = this.y + objectVector.y;

    return new Vector(intX, intY)
};

// getter property 'length' of the Vector prototype, which computes the length
// of the vector(the distance of the point (x, y) from the origin (0,0)).
Object.defineProperty(Vector.prototype, "length",
                                        {
                                            get: function()
                                            {
                                                return Math.sqrt((this.x * this.x) + (this.y * this.y));
                                            }
                                        });

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
space();

console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
space();

console.log(new Vector(3, 4).length);
// → 5
spacer();

/*
 Another cell:

 Implement a cell type named 'StretchCell'(inner, width, height), that conforms
 to the table cell interface described earlier in the chapter.

 It should wrap another cell(like UnderlinedCell does) and ensure that the resulting
 cell has at least the given width and height, even if the inner cell would
 naturally be smaller.
*/

// StretchCell constructor.
function StretchCell(objectInnerElement, intWidth, intHeight)
{
    this.inner = objectInnerElement;
    this.width = intWidth;
    this.height = intHeight;
}

StretchCell.prototype.minWidth = function()
{
    return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function()
{
    return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(intWidth, intHeight)
{
    return this.inner.draw(intWidth, intHeight);
};

var objectStretchCellInstance = new StretchCell(new TextCell("abc"), 1, 2);

console.log(objectStretchCellInstance.minWidth());
// → 3
space();

console.log(objectStretchCellInstance.minHeight());
// → 2
space();
console.log(objectStretchCellInstance.draw(3, 2));
// → ["abc", "   "]
spacer();
/*
 Sequence interface:

 Design an interface that abstracts iteration over a collection of values.

 An object that provides this interface represents a 'sequence', and the
 interface must somehow make it possible for code that uses such an
 object, to iterate over the sequence, looking at the element values it is
 made up of and having some way to find out when the end of the sequence
 is reached.

 When you have specified your interface, try to write a function 'logFive'
 that takes a 'sequence-object' and calls 'console.log' on its first five elements
 (or fewer, if the sequence has fewer than five elements.)

 Then implement an object type 'ArraySeq' that wraps an arrayNums and allows
 iteration over the arrayNums using the interface you designed.

 Implement another object type 'RangeSeq' that iterates over a range of integers
 (taking from and to arguments to its constructor) instead.
 */

// I am going to use a system where a sequence object has two methods:
//
// * next(), which returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
//
// * current(), which returns the current element, and should only be
//   called after next() has returned true at least once.

//Global function
//   Function takes a sequence object and calls console.log on its first five elements
//   or fewer, if the sequence has fewer than five elements.
function logFive(arraySequence)
{
    for (var i = 0; i < 5; i++)
    {
        if (!arraySequence.next())
        {
            break;
        }
        console.log(arraySequence.current());
    }
}

//Constructor
//wraps an array and allows iteration over the array using the interface
function ArraySeq(arrayNumbers)
{
    this.postion = -1;
    this.arrayNums = arrayNumbers;
}

//Property declaration.
//   returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
ArraySeq.prototype.next = function()
                          {
                              if (this.postion == this.arrayNums.length - 1)
                              {
                                  return false;
                              }
                              this.postion++;
                              return true;
                          };

//Property declaration
ArraySeq.prototype.current = function()
                             {
                                 return this.arrayNums[this.postion];
                             };

//Constructor
//iterates over a range of integers
//(taking from and to arguments to its constructor)
function RangeSeq(from, to)
{
    this.postion = from - 1;
    this.end = to;
}

//Property declaration
//   returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
RangeSeq.prototype.next = function()
                          {
                              if (this.postion >= this.end)
                              {
                                  return false;
                              }

                              this.postion++;
                              return true;
                          };

//property declaration
RangeSeq.prototype.current = function()
                             {
                                 return this.postion;
                             };

logFive(new ArraySeq([1,2]));
// → 1
// → 2
space();

logFive(new RangeSeq(100, 104));
// → 100
// → 101
// → 102
// → 103
// → 104
space();
// This alternative approach represents the empty sequence as null,
// and gives non-empty sequences two methods:
//
// * head() returns the element at the start of the sequence.
//
// * rest() returns the rest of the sequence, or null if there are no
//   elements left.
//
// Because a JavaScript constructor can not return null, we add a make
// function to constructors of this type of sequence, which constructs
// a sequence, or returns null if the resulting sequence would be
// empty.

function logFive2(sequence)
{
    for (var i = 0; i < 5 && sequence != null; i++)
    {
        console.log(sequence.head());

        sequence = sequence.rest();
    }
}

function ArraySeq2(array, offset)
{
    this.arrayNums = array;

    this.offset = offset;
}
ArraySeq2.prototype.rest = function()
{
    return ArraySeq2.make(this.arrayNums, this.offset + 1);
};
ArraySeq2.prototype.head = function()
{
    return this.arrayNums[this.offset];
};
ArraySeq2.make = function(array, offset)
{
    if (offset == null) offset = 0;
    if (offset >= array.length)
        return null;
    else
        return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to)
{
    this.from = from;
    this.end = to;
}

RangeSeq2.prototype.rest = function()
{
    return RangeSeq2.make(this.from + 1, this.end);
};

RangeSeq2.prototype.head = function()
{
    return this.from;
};

RangeSeq2.make = function(from, to)
{
    if (from > to)
        return null;
    else
        return new RangeSeq2(from, to);
};

logFive2(ArraySeq2.make([1, 2]));
// → 1
// → 2
space();

logFive2(RangeSeq2.make(100, 104));
// → 100
// → 101
// → 102
// → 103
// → 104
spacer();

var twoSum = function(nums, target)
{
    var arrayTargetIndices = [];

    nums.forEach(function(num)
    {
        for (var i = 0; i < nums.length; i++)
        {
            if (num + nums[i] == target)
            {
                if (num == nums[i])
                {
                    var numIndex1 = nums.indexOf(num);
                    var numIndex1A = nums.indexOf(num) + 1;
                    var numIndex2 = nums.indexOf(num, numIndex1A);
                }
                if (arrayTargetIndices.length == 0 && num == nums[i] && numIndex1 != numIndex2 && numIndex2 != -1)
                {
                    arrayTargetIndices.push(nums.indexOf(num));
                    arrayTargetIndices.push(nums.indexOf(num, numIndex1A));
                }
                else if (arrayTargetIndices.length == 0 && num != nums[i])
                {
                    arrayTargetIndices.push(nums.indexOf(num));
                    arrayTargetIndices.push(nums.indexOf(nums[i]));
                }
            }
        }
    });
    return arrayTargetIndices;
};

console.log(twoSum([2,5,4,11],6));
spacer();

/*
                            *** Project: Electronic Life ***

 In “project” sections, we will work through writing a program.

 Theory is indispensable when learning to program, but it should be accompanied
 by reading and understanding non-trivial programs.

 Our project in this chapter is to build a 'virtual world', a little world
 populated with bots that move around and struggle for existence.


                                    Definition

 To make this task manageable, we will radically simplify the concept
 of a world.

 A 'world' will be a 'two-dimensional grid' where each entity takes up one full square of the grid.

 On every turn, the 'Bots'(short for Robots) all get a chance to take some action.

 We measure both time and space with fixed-valued units:
 'squares for space' and 'turns for time'.

 These measures are somewhat elementary and inaccurate approximation of time and space.
 But our simulation is intended to be amusing, not realistic, so we can freely cut such corners.

 We can define a World with a 'World Map'(an array of strings that lays out
 the "World’s Environment", using one character per square).

 The “#” characters in this map will represent walls and pillars, and the “o”
 characters represent 'Bot'-objects. The spaces, are empty space.

 This array can be used to create the 'World'-object(This object keeps track of the size and content of the world.).

 The 'World'-object will contain a 'toString'-method, which will convert the 'World'-object back to a printable string
 (similar to the plan it was based on), so that we can see what’s going on inside the 'World'-object.

 The 'World'-object also has a 'turn'-method, which will allow all the 'bot'-objects, with-in the 'World'-object,
 to make one turn, then update the 'World'-object to reflect their actions.
 */
var arrayWorldMap = ["############################",
                      "#      #    #      o      ##",
                      "#                          #",
                      "#          #####           #",
                      "##         #   #    ##     #",
                      "###           ##     #     #",
                      "#           ###      #     #",
                      "#   ####                   #",
                      "#   ##      o              #",
                      "# o  #        o        ### #",
                      "#    #                     #",
                      "############################"];


/*
                                Representing space

 The "WorldMap"-array, which models the 'World'-object has a fixed width and height.

 Squares are identified by their coordinates(x,y). We use a simple object-type, 'Vector'
 (as seen in the exercises in the previous section), to contain these coordinate pairs.
 */

// Constructor for Vector object.
function Vector(x,y)
{
    this.x = x;
    this.y = y;
}

// To declare & initialize the property 'plus' attributed to all Vector instances(objects).
Vector.prototype.plus = function (object_otherVector)
{
    return new Vector(this.x + object_otherVector.x, this.y + object_otherVector.y);
};

/*
 Next, we need an object that models a 'grid' of the 'World'...

 A 'Grid'-object is part of the 'World'-object, we are making it a separate object
 (a property of a 'World'-object), to keep the 'World'-object itself, as simple as possible.

 The 'World'-object should concern itself with world-related things, and the 'Grid'-object should
 concern itself with section-related things.

 To store a Grid of values, we have several options....

 One way would be to use an array-of-arrays, using 'two' property interfaces, to get to a specific square.

 Below is an example:
 */
var grid = [// index[0]       index[1]       index[2]
                ['Top-left', 'Top-middle', 'Top-right'], //gridEx1[0]
                ['Bottom-left', 'Bottom-middle', 'Bottom-right'] //gridEx1[1]
             ];

console.log(grid[1][2]); //Bottom-right
space();
console.log(grid[0][0]); //Top-left
space();
console.log(grid[0][2]); //Top-right
space();
console.log(grid[1][1]); //Bottom-middle
spacer();


/*
 Or we could use a single array, with a size of -> ('width' * 'height').
 Where the element at (x,y) is found at position x + (y * width) in the array.
 */

 grid = ['Top-left', 'Top-middle', 'Top-right', 'Bottom-left', 'Bottom-middle', 'Bottom-right'];

console.log(grid[2 + (1 * 3)]); //Bottom-right
spacer();


/*
 Since the actual access to this array will be wrapped in methods of
 the 'Grid'-object, it doesn’t matter to outer application(code),
 which approach we take.

 The 2nd example will be used in this program, because it makes it much
 easier to create the array....

 ***  When calling the 'Array'-constructor with a single number as an argument, ***
               it will create a new empty array of the given length.

 The following code defines the 'Grid'-object, with some basic methods:
 */

// Grid Constructor
function Grid(int_width, int_height)
{
    //                      array's length value
    this.space = new Array(int_width * int_height);
    this.width = int_width;
    this.height = int_height;
}

// Grid Properties
Grid.prototype.isInside = function(object_vector)
                          {
                             return object_vector.x >= 0 && object_vector.x < this.width &&
                                    object_vector.y >= 0 && object_vector.y < this.length;
                          };

Grid.prototype.get = function(object_vector)
                     {
                         return this.space[object_vector.x + this.width * object_vector.y];
                     };

Grid.prototype.set = function(object_vector, char_value)
                     {
                         this.space[object_vector.x + this.width * object_vector.y] = char_value;
                     };


                        // To test the code which we have written to this point.

var object_sampleGrid = new Grid(5,5);

// returns 'undefined' because value has not been assigned to this specific Vector.
console.log(object_sampleGrid.get(new Vector(1,1))); // undefined
space();

// To assign character 'X' to this specific Vector.
object_sampleGrid.set(new Vector(1,1), 'X');

// returns the 'X'-character, which has now value been assigned to this specific Vector.
console.log(object_sampleGrid.get(new Vector(1,1))); // X
spacer();

/*
                        A Bots’s Programming Interface

 Before we can start on the 'World'-constructor, we must get more specific
 about the 'Bot'-objects that will be living inside it.

 I mentioned that the 'World'-object will ask the 'Bot'-objects what actions they want to take.

 This works as follows:

 Each 'Bot'-object has an 'act'-method that, when 'called', returns
 an 'Action'-object.

 An 'Action'-object will hold a 'type'-property, which names the
 'type of action' the bot will take, for example,'move'.

 The 'Action'-object may also contain properties with extra information,
 such as the 'direction' the 'Bot'-object wants to 'move' to.

 'Bot'-objects can see only the squares directly around them,
 this area we will be referred to as the 'WorldSection'-object.

 This limited vision can be useful when deciding which 'action' to take.

 When the 'act'-method is called, it is given a 'View'-object, which allows the Bot to inspect its surroundings.

 We name the 'eight surrounding squares' individually, by their 'compass directions':

 "n" = north, "ne" = northeast, and so on. Here’s the object we will use to
 map from 'direction-names' to 'coordinate-offsets':
 */

var object_direction =
    {
        'nw': new Vector(-1,-1),
        'w' : new Vector(-1,0),
        'sw': new Vector(-1,1),
        'se': new Vector(1,1),
        'e' : new Vector(1,0),
        'ne': new Vector(1,-1),
        'n' : new Vector(0,-1),
        's' : new Vector(0,1)
    };
/*
 The 'View'-object has a 'look'-method, which 'takes a direction' and 'returns a character'.

 For example "\#" when there is a wall in that direction, or " " (space) when there is nothing there.

 The 'View'-object also provides the convenient 'find'-method and 'findAll'-method.

 Both take a 'arrayWorldMap' character(' ', x, o) as an 'argument'.

 The 'find'-method 'returns a direction' in which the character can be
 found next to the Bot or 'returns null' if no such direction exists.

 The 'findAll'-method returns an array containing all directions with that character.

 For example, a Bot sitting left(west) of a wall will get ["ne", "e","se"]
 when calling the 'findAll'-method on the 'Bot'-object's 'view'-object, with the "\#" character as argument.

 Here is a simple-minded 'Bot'-object that just follows its forward momentum until it hits
 an obstacle, then bounces off it in a random open direction:
 */

// generic function to pick a random element from an array,
// using Math.random plus some arithmetic to get a random index.
function randomElement(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

var arrayDirectionNames = 'n ne e se s sw w nw'.split(" ");

//Constructor for bouncing Bot.
function Bot()
{
    this.direction = randomElement(arrayDirectionNames);
}

// To declare the 'act'-property for ALL 'Bot'-objects.
Bot.prototype.act = function(view)
                                {
                                    if(view.look(this.direction) != ' ')
                                    {
                                        this.direction = view.find(' ') || 's';
                                    }

                                    return {type: 'move', direction: this.direction};
                                };

/*
 The 'randomElement'-function simply picks a random element from an
 array, using Math.random plus some arithmetic to get a random index.

 We’ll use this again later because randomness can be useful in simulations.

 To pick a random direction, the 'Bouncing Bot'-constructor calls the 'randomElement'-function
 on an array of direction names.

 We could also have used 'Object.keys'-method to get this
 'arrayDirectionNames'-array from the 'objectDirections'-object we defined earlier,
 but that provides no guarantees about the order in which the properties are listed.

 *** In most situations, modern JavaScript engines will return properties in ***
            the order they were defined, but they are not required to.


 The “|| "s"” in the 'act'-method is there to prevent 'this.direction'-property from
 getting the value 'null' if the Bot is somehow trapped with no empty
 space around it (for example when crowded into a corner by other Bots).


                                          The World Object

 Now we can create the 'World'-object.

 The constructor takes both a 'map'(the array of strings representing the 'world’s grid', described earlier)
 and a 'legend' as the constructor 'arguments'.

 A 'legend' is an 'object' that tells us what
 each character in the 'World Map' means.

 It contains a constructor for every character except for the 'space'-character
 (The 'space'-character always refers to 'null', the value we’ll use to represent empty space).
 */

function elementFromCharacter(object_legend, char_character)
{
    if(char_character != ' ')
    {
        var object_element = new object_legend[char_character]();

        object_element.originCharacter = char_character;
    }
    else
    {
        object_element = null;
    }

    return object_element;
}


/*
                                            'this' and its scope.....

 The 'World'-constructor(function) I have written below contains a call to its 'forEach'-method.

 One interesting thing to note, is inside the function passed to 'forEach'-function,
 'focus' is no longer directly in the function 'scope' of the 'constructor'-function.

 Each function call gets its own 'this' binding, so the 'this', in the inner-function,
 does not refer to the newly constructed object that the outer this refers to!!

 In fact, when ever a function isn’t called as a method...
 'this' will refer to the 'global'-object!

 This means that we can’t write 'this.grid' to access the 'grid' from inside
 the loop.

 Instead, the outer function creates a normal local variable: 'grid'.

 This local 'grid'-variable is used by the inner-function to gain access to the grid.
 This is a bit of a design blunder in JavaScript.

 Fortunately, the next version of the language provides a solution for this problem.

 Meanwhile, there are workarounds.....

 A common pattern is to say var self = this and from then on refer to self,
 which is a local-variable and thus visible to inner-functions.
 */


// 'World'-object constructor
function World(array_map, object_legend)
{//                    (    width    ,   height  )
    var object_localGrid = new Grid(array_map[0].length, array_map.length);

    this.grid = object_localGrid;
    this.legend = object_legend;

    array_map.forEach(function(string_line, char_y)
    {
        for(var index_x = 0; index_x < string_line.length; index_x++)
        {//               World Grid Vector        Vector's value
            object_localGrid.set(new Vector(index_x,char_y), elementFromCharacter(object_legend, string_line[index_x]));
        }
    });
}

/*
 In 'elementFromCharacter', first we create an instance of the right type by looking
 up the character’s constructor and applying 'new' to it.

 Then we add an 'originCharacter'-property to it to make it easy to find out what character
 the element was originally created from.

 We need this 'originCharacter'-property when implementing the world’s 'toString'-method.
 This method builds up a map-like string from the world’s current
 state by performing a two-dimensional loop over the squares on the
 World's grid.
 */

function characterFromElement(element)
{
    if(element == null)
    {
        return ' ';
    }
    else
    {
        return element.originCharacter;
    }
}

World.prototype.toString = function()
{
    var output = '';

    for(var y = 0; y < this.grid.height; y++)
    {
        for(var x =0; x < this.grid.width; x++)
        {
            var element = this.grid.get(new Vector(x,y));

            output += characterFromElement(element);
        }
        output += '\n';
    }

    return output;
};

/*
 A wall is a simple object, it is used only for taking up space and has no
 act method.
 */

function Wall()
{

}

/*
When we 'initialize & declare' the 'object_world'-variable
(by creating an instance based on the 'map' from earlier in the application),
then call its 'toString'-method, we get a returning string very similar to the plan we put in.
*/
var world = new World(arrayWorldMap, {
                                          '#': Wall,
                                          'o': Bot
                                      });

console.log(world.toString());

/*
 Beside the common pattern to say var self = this and from then on refer to self,
 which is a local-variable and therefore visible to the function within the constructor-function,
 is to use the 'bind'-method, which allows us to provide an explicit 'this'-object to 'bind' to.
*/

var object_test =
            {
                prop: 10,

                addToProp: function(array)
                           {
                               return array.map(function (elt)
                                                {
                                                    return this.prop + elt;
                                                }.bind(this));
                           }

            };

console.log(object_test.addToProp([5])); // --> 15

/*
 The test-function passed to map is the result of the bind call and thus has its
 this bound to the first argument given to bind—the outer function’s this
 value (which holds the test object).
 Most standard higher-order methods on arrays, such as forEach and map,
 take an optional second argument that can also be used to provide a this
 for the calls to the iteration function. So you could express the previous
 example in a slightly simpler way.
 */

function space()
{
    console.log("");
}

function spacer()
{
    space();
    console.log("---------------------------------------------------------------------------");
    space();
};
