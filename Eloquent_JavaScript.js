//Writen by John Joseph Pietrangelo III

function space()
{
 console.log("");
}
var spacer = function()
{
    space();
    console.log("---------------------------------------------------------------------------");
    space();
};

console.log("Values, Types, and Operators");
spacer();

//                              *** 1 Values, Types, and Operators ***

/*
 Inside the computer's mind, there is only data.

 All this data is stored as long sequences of bits and in this sence*, fundamentally alike.

 Bits are any kind of two-valued things, usually described as zeros and
 ones. Inside the computer, they take forms such as a high or low electrical
 charge, a strong or weak signal.

 Here are the bits that make up the number
 13, with the weights of the digits shown below them:

   0  0  0  0 1 1 0 1
 128 64 32 16 8 4 2 1

 So that’s the binary number 00001101, or 8 + 4 + 1, which equals 13.

 Values:

 A typical modern computer
 has more than 30 billion bits in its volatile data storage.

 the hard disk or equivalent) tends to have yet a few orders of
 magnitude more.

 There are six basic types of values in JavaScript:
 numbers, strings, Booleans, objects, functions, and undefined values.

 As soon as you no longer use a value, it will dissipate,
 leaving behind its bits to be recycled as building material for the next
 generation of values.

 Numbers:

 JavaScript uses a fixed number of bits, namely 64 of them, to store
 a single number value.

 For N decimal digits, the amount of numbers
 that can be represented is 10N . Similarly, given 64 binary digits, you
 can represent 264 different numbers, which is about 18 quintillion (an 18
 with 18 zeros after it). This is a lot.

 For very big or very small numbers, you can also use scientific notation by
 adding an “e” (for “exponent”), followed by the exponent of the number:
 2.998e8
 That is 2.998 * 10^8 = 299,800,000.

 Just as  (pi) cannot be precisely expressed by a finite number of decimal
 digits, many numbers lose some precision when only 64 bits are available
 to store them. This is a shame, but it causes practical problems only in
 specific situations.

 Arithmetic:

 The + and * symbols are called operators.

 Does the example mean “add 4 and 100, and multiply the result by
 11”, or is the multiplication done before the adding? As you might have
 guessed, the multiplication happens first. But as in mathematics, you
 can change this by wrapping the addition in parentheses.
 (100 + 4) * 11

 When
 multiple operators with the same precedence appear next to each other,
 as in 1 - 2 + 1, they are applied left to right: (1 - 2) + 1.
 When in doubt, just add parentheses.

 The % symbol is used to represent the remainder operation.
 X % Y is the remainder of dividing X by Y. For example, 314 % 100
 produces 14, and 144 % 12 gives 0.

 Remainder’s precedence is the same as
 that of multiplication and division. You’ll often see this operator referred
 to as modulo, though technically remainder is more accurate.

 Special numbers:

 There are three special values in JavaScript that are considered numbers
 but don’t behave like normal numbers.
 The first two are Infinity and -Infinity, which represent the positive
 and negative infinities. Infinity - 1 is still Infinity, and so on. Don’t put
 too much trust in infinity-based computation. It isn’t mathematically
 solid, and it will quickly lead to our next special number: NaN.

 NaN stands for “not a number”, even though it is a value of the number
 type. You’ll get this result when you, for example, try to calculate 0
 / 0 (zero divided by zero), Infinity - Infinity, or any number of other
 numeric operations that don’t yield a precise, meaningful result.

 Strings:

 The next basic data type is the string. Strings are used to represent
 text. They are written by enclosing their content in quotes.
 " Patch my boat with chewing gum "
 ' Monkeys wave goodbye '
 Both single and double quotes can be used to mark strings as long as
 the quotes at the start and the end of the string match.

 To make it possible to include such characters in a string, the following
 notation is used: whenever a backslash (\) is found inside quoted text,
 it indicates that the character after it has a special meaning. This is
 called escaping the character.

 When an n character occurs
 after a backslash, it is interpreted as a newline. Similarly, a t after a
 backslash means a tab character. Take the following string:

 If two backslashes follow each
 other, they will collapse together, and only one will be left in the resulting
 string value.

 This is how the string “A newline character is written like
 "\n".” can be expressed:
 */

console.log("A new line character is written like \" \\n \".\n");

//A newline character is written like "\n".
console.log("\tThis is the 1st line.\nThis is the 2nd line.\n");

/*
 The following line will produce the string "concatenate":
 */

console.log("con" + "cat" + "e" + "nate");
spacer();

//                  *** Unary Operators ***

/*Not all operators are symbols. Some are written as words. One example
is the 'typeof' operator, which produces a string value naming the type of
the value you give it.*/
console.log("\t\t*** Unary Operators ***");
spacer();

var a = 100;
var b = "Hello";
var c = true;
var d = [1,2,3];
var e = {name: "John Pietrangelo", degrees:["CIS","SOS"]};
//------------------------------------------------------------

console.log(a + "* is a '" + typeof a + "' data-type!"); // number
space();

console.log(b + "* is a '" + typeof b + "' data-type!"); // number
space();

console.log(c + "* is a '" + typeof c + "' data-type!"); // number
space();

console.log(d + "* is a '" + typeof d + "' data-type!  Arrays Are types of objects!!"); // number
space();

console.log(JSON.stringify(e) + "* is a '" + typeof e+ "' data-type!"); // number
space();
/*
 The other operators we saw all operated on two values, but 'typeof' takes
 only one.

 Operators that use two values are called 'binary operators',
 while those that take one are called 'unary operators'.

 The minus operator can be used both as a binary operator and as a unary operator.
 */

console.log(-(10 - 2)); // -8

space();
/*

 Boolean values:

 Often, you will need a value that simply distinguishes between two possibilities,
 like “yes” and “no” or “on” and “off”. For this, JavaScript has
 a Boolean type, which has just two values: true and false.

 Comparisons:

 Here is one way to produce Boolean values:
 */
console.log("3 is greater than 2.", 3 > 2);  //true
space();

console.log("3 is less than 2.", 3 < 2);  //false
space();
/*
 The > and < signs are the traditional symbols for “is greater than” and
 “is less than”, respectively. They are binary operators. Applying them
 results in a Boolean value that indicates whether they hold true in this
 case.
 Strings can be compared in the same way.
 */
console.log("the 1st index value \'g\' in god is greater than the 1st index value \'d\' in dog:", "god" > "dog"); // true
space();

console.log("the 1st index value \'G\' in god is greater than the 1st index value \'d\' in dog:", "God" > "dog"); // false
space();
/*
 The way strings are ordered is more or less alphabetic: uppercase letters
 are always “LESS” than lowercase ones, so "Z" < "a" is true, and nonalphabetic
 characters (!, -, and so on) are also included in the ordering.
 The actual comparison is based on the Unicode standard. This standard
 assigns a number to virtually every character you would ever need,
 including characters from Greek, Arabic, Japanese, Tamil, and so on.

 When comparing strings, JavaScript goes over them from left to right,
 comparing the numeric codes of the characters one by one.

 Other similar operators are >= (greater than or equal to), <= (less than
 or equal to), == (equal to), and != (not equal to).
 */
console.log("\'itch\' dose not equal \'scratch\':", "itch" != "scratch"); // true
space();
/*
 There is only one value in JavaScript that is not equal to itself, and that
 is NaN, which stands for “not a number”.

 NaN is supposed to denote the result of a nonsensical computation, and as
 such, it isn’t equal to the result of any other nonsensical computations.
 */

console.log("\'hi\' equals \'hi\'", "hi" == "hi"); //true
space();

console.log("\"4\" equals \"4\"", 4 == 4); //true
space();

console.log("\"NaN\" equals \"NaN\"", NaN == NaN); //false
space();

/*
 Logical operators:

 There are also some operations that can be applied to Boolean values
 themselves.

 JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.

 The '&&' operator represents a logical 'and'. It is a 'binary operator', and its
 result is 'true' only if both the values given to it are 'true'.
 */
console.log(false && false); //false
space();

console.log(false && true); //false
space();

console.log(true && false); //false
space();

console.log(true && true); //true
space();
/*
 The || operator denotes logical order. It produces true if either of the values
 given to it is true.
 */

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

 It is a unary operator that flips the value given to it

 !true produces 'false' and !false produces 'true'.

 When mixing these Boolean operators with arithmetic and other operators,
 it is not always obvious when parentheses are needed.

 In practice, you can usually get by with knowing that of the operators we have seen so far.

 || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest.

 This order has been chosen so that, in typical expressions like the following one, there are as few
 parentheses as possible:
 */

console.log('1 + 1 equals 2 and 10 * 10 is greater than 50.', 1 + 1 == 2 && 10*10 > 50); //true
space();

/*
 The last logical operator I will discuss is not unary, not binary, but
 ternary, operating on three values. It is written with a question mark
 and a colon, like this:
 */
var pickerSetToTrue = "1st option is chosen";
var pickerSetToFalse = "2nd option is chosen";

console.log(true ? 1 : 2); // 1
space();

console.log(false ? 1 : 2); // 2
space();

console.log("When value is true:",true ? pickerSetToTrue : pickerSetToFalse); //1st option is chosen
space();

console.log("When value is false:",false ? pickerSetToTrue : pickerSetToFalse);//2nd option is chosen
space();
/*
 This one is called the conditional operator (or sometimes just ternary
 operator since it is the only such operator in the language). The value
 on the left of the question mark “picks” which of the other two values
 will come out.

 When it is true, the middle value is chosen, and when it
 is false, the value on the right comes out.
 */

/*
 Undefined values:

 There are two special values, written null and undefined, that are used to
 denote the absence of a meaningful value. They are themselves values,
 but they carry no information.

 Many operations in the language that don’t produce a meaningful value
 (you’ll see some later) yield undefined simply because they have to yield
 some value.

 The difference in meaning between undefined and null is an accident of
 JavaScript’s design, and it does not matter most of the time. In the cases
 where you actually have to concern yourself with these values, I recommend
 treating them as interchangeable.
 */

/*
 Automatic type conversion:

 In the introduction, I mentioned that JavaScript goes out of its way
 to accept almost any program you give it, even programs that do odd
 things.

 This is nicely demonstrated by the following expressions:
 */
console.log(8 * null); // 0
space();

console.log('5' - 3); // 2
space();

console.log('5' + 3); // 53
space();

console.log('five' * 3); // NaN
space();

console.log(false == 0); // true
space();

/*
 When an operator is applied to the “wrong” type of value, JavaScript will
 quietly convert that value to the type it wants, using a set of rules that
 often aren’t what you want or expect. This is called type coercion.

 So the
 null in the first expression becomes 0, and the "5" in the second expression
 becomes 5 (from string to number). Yet in the third expression, + tries
 string concatenation before numeric addition, so the 1 is converted to "1"
 (from number to string).

 When something that doesn’t map to a number in an obvious way
 (such as "five" or undefined) is converted to a number, the value NaN is
 produced. Further arithmetic operations on NaN keep producing NaN, so
 if you find yourself getting one of those in an unexpected place, look for
 accidental type conversions.

 When comparing values of the same type using ==, the outcome is easy
 to predict: you should get true when both values are the same, except in
 the case of NaN. But when the types differ, JavaScript uses a complicated
 and confusing set of rules to determine what to do. In most cases, it just
 tries to convert one of the values to the other value’s type. However,
 when null or undefined occurs on either side of the operator, it produces
 true only if both sides are one of null or undefined.
 */
console.log(null == undefined); // true
space();

console.log(null == 0); // false
space();

console.log(undefined == 0); //false
space();
/*
That last piece of behavior is often useful. When you want to test
whether a value has a real value instead of null or undefined, you can 20
simply compare it to null with the == (or !=) operator

 The rules for converting strings and numbers to Boolean
 values state that 0, NaN, and the empty string ("") count as false, while
 all the other values count as true.

 Because of this, expressions like 0
 == false and "" == false are also true. For cases like this, where you do
 not want any automatic type conversions to happen, there are two extra
 operators: === and !==.

 The first tests whether a value is precisely equal
 to the other, and the second tests whether it is not precisely equal. So
 "" === false is false as expected.

 use the three-character comparison operators defensively
 to prevent unexpected type conversions from tripping you up.
 But when you’re certain the types on both sides will be the same, there
 is no problem with using the shorter operators.

 Short-circuiting of logical operators:

 The logical operators && and || handle values of different types in a
 peculiar way. They will convert the value on their left side to Boolean
 type in order to decide what to do, but depending on the operator and
 the result of that conversion, they return either the original left-hand
 value or the right-hand value.
 The || operator, for example, will return the value to its left when that
 can be converted to true and will return the value on its right otherwise.
 This conversion works as you’d expect for Boolean values and should do
 something analogous for values of other types.
*/
console.log(null || 'user'); //user
space();

console.log('dog' || 'god'); //dog
space();
/*
 The && operator works similarly, but the other way around. When the
 value to its left is something that converts to false, it returns that value,
 and otherwise it returns the value on its right.
 */
console.log(null && 'user'); //null
space();

console.log('dog' && 'god'); //god
space();
/*
 Another important property of these two operators is that the expression
 to their right is evaluated only when necessary. In the case of true
 || X, no matter what X is—even if it’s an expression that does something
 terrible—the result will be true, and X is never evaluated. The same goes
 for false && X, which is false and will ignore X. This is called short-circuit
 evaluation.
 The conditional operator works in a similar way. The first expression
 is always evaluated, but the second or third value, the one that is not
 picked, is not.
 */

/*
 Summary:

 We looked at four types of JavaScript values in this chapter: numbers,
 strings, Booleans, and undefined values.
 Such values are created by typing in their name (true, null) or value (13,
 "abc"). You can combine and transform values with operators. We saw
 binary operators for arithmetic (+, -, *, /, and %), string concatenation
 (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as
 several unary operators (- to negate a number, ! to negate logically, and
 typeof to find a value’s type) and a ternary operator (?:) to pick one of
 two values based on a third value.
 This gives you enough information to use JavaScript as a pocket calculator,
 but not much more. The next chapter will start tying these
 expressions together into basic programs.
 */

/*
 2 Program Structure:
 In this chapter, we will start to do things that can actually be called
 programming. We will expand our command of the JavaScript language
 beyond the nouns and sentence fragments we’ve seen so far, to the point
 where we can express some meaningful prose.
 */

/*
 A fragment of code that produces a value is called an expression. Every
 value that is written literally (such as 22 or "psychoanalysis") is an
 expression. An expression between parentheses is also an expression,
 as is a binary operator applied to two expressions or a unary operator
 applied to one.
 This shows part of the beauty of a language-based interface. Expressions
 can nest in a way very similar to the way subsentences in human
 languages are nested—a subsentence can contain its own subsentences,
 and so on. This allows us to combine expressions to express arbitrarily
 complex computations.
 */

console.log(1);  // 1
space();

console.log(!false); // true
space();
/*
 These changes
 are called side effects. The statements in the previous example just
 produce the values 1 and true and then immediately throw them away.
 This leaves no impression on the world at all. When executing the
 program, nothing observable happens.

 The rules for when it can
 be safely omitted are somewhat complex and error-prone. In this book,
 every statement that needs a semicolon will always be terminated by
 one. I recommend you do the same in your own programs, at least until
 you’ve learned more about subtleties involved in leaving out semicolons.

 Variables:

 How does a program keep an internal state? How does it remember
 things? We have seen how to produce new values from old values, but
 this does not change the old values, and the new value has to be immediately
 used or it will dissipate again. To catch and hold values, JavaScript
 provides a thing called a variable.
 */
var number1 = 5 * 5;
space();

console.log(number1);
space();
/*
 The special word (keyword)
 var indicates that this sentence is going to define a variable. It is
 followed by the name of the variable and, if we want to immediately give
 it a value, by an = operator and an expression.

 After a variable has been defined, its name can be used as an expression.
 The value of such an expression is the value the variable currently
 holds.
 */

var five = 10;

console.log( five * five); // 100
space();
/*
 Variable names can be any word that isn’t a reserved word (such as
 var). They may not include spaces. Digits can be part of variable
 name but cannot begin with one.  Catch22 is a valid name where as 2Catch is not.
 A variable name cannot include punctuation, except
 for the characters $ and _

 When a variable points at a value, that does not mean it is tied to
 that value forever. The = operator can be used at any time on existing
 variables to disconnect them from their current value and have them
 point to a new one.
 */
var mood = "light";

console.log(mood); // light
space();

mood = 'dark';

console.log(mood);// dark
space();
/*
 To remember the number of dollars that John
 still owes you, you create a variable. And then when he pays back $35,
 you give this variable a new value.
 */

var JohnsDebit = 40000;

JohnsDebit = JohnsDebit - 1000;

console.log(JohnsDebit); // 39000
space();
/*
 When you define a variable without giving it a value, the tentacle has
 nothing to grasp, so it ends in thin air.

 If you ask for the value of an empty variable, you’ll get the value undefined.

 A single var statement may define multiple variables.

 The definitions must be separated by commas.
 */
var one;

console.log(one); // undifined
space();

var three = 3, four = 4;

console.log(three + four); // 7
space();
/*
 Keywords and reserved words

 Words with a special meaning, such as var, are keywords, and they may
 not be used as variable names. There are also a number of words that are
 “reserved for use” in future versions of JavaScript. These are also officially
 not allowed to be used as variable names, though some JavaScript
 environments do allow them. The full list of keywords and reserved
 words is rather long.

 break case catch class const continue debugger
 default delete do else enum export extends false
 finally for function if implements import in
 instanceof interface let new null package private
 protected public return static super switch this
 throw true try typeof var void while with yield

 The Environment:

 The collection of variables and their values that exist at a given time is
 called the environment. When a program starts up, this environment is
 not empty. It always contains variables that are part of the language
 standard, and most of the time, it has variables that provide ways to
 interact with the surrounding system. For example, in a browser, there
 are variables and functions to inspect and influence the currently loaded
 website and to read mouse and keyboard input.

 A lot of the values provided in the default environment have the type
 function. A function is a piece of program wrapped in a value. Such
 values can be applied in order to run the wrapped program. For example,
 in a browser environment, the variable alert holds a function that shows
 a little dialog box with a message. It is used like this:;
 */
//alert("Good morning!");

/*Executing a function is called invoking, calling, or applying it. You can
call a function by putting parentheses after an expression that produces
a function value. Usually you’ll directly use the name of the variable
that holds the function. The values between the parentheses are given
to the program inside the function. In the example, the alert function
uses the string that we give it as the text to show in the dialog box.
Values given to functions are called arguments. The alert function needs
only one of them, but other functions might need a different number or
different types of arguments.

 The console.log function:

 console.log isn’t a simple variable. It
 is actually an expression that retrieves the log property from the value
 held by the console variable

 The alert function can be useful as an output device when experimenting.
 Most JavaScript systems
 (including all modern web browsers and Node.js) provide a console
 .log function that writes out its arguments to some text output device.

 In browsers, the output lands in the JavaScript console. This part of
 the browser interface is hidden by default, but most browsers open it
 when you press F12 or, on Mac, when you press Command-Option-I. If
 that does not work, search through the menus for an item named “web
 console” or “developer tools”.
    */
var x = 30;

console.log("The value of 'x' is", x); // The value of 'x' is 30;
space();

/*
 Return values:

 functions are useful because of the side effects they produce.
 For example, the function Math.max takes any number
 of number values and gives back the greatest.
 */

console.log(Math.max(17,20,100)); //100
space();
/*
When a function produces a value, it is said to return that value. Anything
that produces a value, is an EXPRESSION in JavaScript, which means
function calls can be used within larger expressions (Nested Functions).


 a call to Math.min, which is the opposite of Math.max, is used as an input to the plus operator:
    */
console.log(Math.min(4,-50,100)); // -50
space();
/*
 prompt and confirm:

 The following two functions aren’t used much in modern web programming,
 mostly because you have no control over the way the resulting windows
 look, but they are useful for toy programs and experiments.

 Browser environments contain other functions besides alert for popping
 up windows. You can ask the user an OK/Cancel question using confirm.
 This returns a Boolean: true if the user clicks OK and false if the user
 clicks Cancel.
 */
//confirm("Shall we then?");

/*The prompt function can be used to ask an “open” question. The first
 argument is the question, the second one is the text that the user starts
 with. A line of text can be typed into the dialog window, and the function
 will return this text as a string.
    */
//prompt("Tell me everything you know");

/*
 Control flow:

 When your program contains more than one statement, the statements
 are executed, predictably, from top to bottom. As a basic example, this
 program has two statements. The first one asks the user for a number,
 and the second, which is executed afterward, shows the square of that
 number.

 The function 'Number' converts a value to a number. We need that conversion
 because the result of prompt is a string value, and we want a number.
 There are similar functions called String and Boolean that convert values
 to those types.
 */
/*
var theNumber = Number(prompt("pick a number",""));
alert("your number is the square root of " + theNumber * theNumber);
*/
/*
 Conditional execution
 Executing statements in straight-line order isn’t the only option we have.
 An alternative is conditional execution, where we choose between two
 different routes based on a Boolean value.

 Conditional execution is written with the if keyword in JavaScript. In
 the simple case, we just want some code to be executed if, and only if,
 a certain condition holds. For example, in the previous program, we
 might want to show the square of the input only if the input is actually
 a number.

 The keyword if executes or skips a statement depending on the value
 of a Boolean expression
 */

/*
 theNumber = Number(prompt("pick a number.",""));
 if(!isNaN(theNumber))
 {
 alert("Your number is the square root of" + theNumber*theNumber);
 }
*/
/*
 The isNaN function is a standard JavaScript function that returns true
 only if the argument it is given is NaN. The Number function happens to
 return NaN when you give it a string that doesn’t represent a valid number.
 Thus, the condition translates to “unless theNumber is not-a-number, do
 this”.

 You often won’t just have code that executes when a condition holds
 true, but also code that handles the other case. This alternate path is
 represented by the second arrow in the diagram. The else keyword can
 be used, together with if, to create two separate, alternative execution
 paths.
 */
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
 while and do loops:

 Consider a program that prints all even numbers from 0 to 12. One way
 to write this is as follows:
 */

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

/*
 That works, but the idea of writing a program is to make something
 less work, not more. If we needed all even numbers less than 1,000, the
 previous would be unworkable. What we need is a way to repeat some
 code. This form of control flow is called a loop:
 */
var num = 0;
while(num <= 12)
{
    console.log(num);
    num = num + 2;
}
space();
/*
 A statement starting with the keyword while creates a loop. The word
 while is followed by an expression in parentheses and then a statement,
 much like if. The loop executes that statement as long as the expression
 produces a value that is true when converted to Boolean type.

 Whenever we need to execute multiple statements inside a
 loop, we wrap them in curly braces ({ and }). Braces do for statements
 what parentheses do for expressions: they group them together, making
 them count as a single statement. A sequence of statements wrapped in
 braces is called a block.

 As an example that actually does something useful, we can now write a
 program that calculates and shows the value of 2^10 (2 to the 10th power).
 We use two variables: one to keep track of our result and one to count
 how often we have multiplied this result by 2. The loop tests whether
 the second variable has reached 10 yet and then updates both variables.
 */
var result = 1;
var counter = 0;

while(counter < 10)
{
    result = result *5;
    counter++;
}
console.log(result);//1024 2^10
space();

result = 1;
counter = 0;

while(counter < 10)
{
    result = result * 2;
    counter++;
}
console.log(result);//1024 2^10
space();
/*
 The counter could also start at 1 and check for <= 10, but, for reasons
 that will become apparent in Chapter 4, it is a good idea to get used to
 counting from 0.

 The do loop is a control structure similar to the while loop. It differs
 only on one point: a do loop always executes its body at least once, and
 it starts testing whether it should stop only after that first execution.
 To reflect this, the test appears after the body of the loop:
 */
/*
do
{
    var yourName = prompt("who are you?");
}while (!yourName);
console.log(yourName);
*/

/*
 This program will force you to enter a name. It will ask again and again
 until it gets something that is not an empty string. Applying the !
 operator will convert a value to Boolean type before negating it, and all
 strings except "" convert to true. This means the loop continues going
 round until you provide a name that is not the empty string.
 */

/*
 for loops:

 Many loops follow the pattern seen in the previous while examples. First,
 a “counter” variable is created to track the progress of the loop. Then
 comes a while loop, whose test expression usually checks whether the
 counter has reached some boundary yet. At the end of the loop body,
 the counter is updated to track progress.
 Because this pattern is so common, JavaScript and similar languages
 provide a slightly shorter and more comprehensive form, the for loop.
 */
for(var num = 0; num <= 12; num = num + 2)
    console.log(num);
space();

for(var i = 0; i <= 12; i += 2)
{
    console.log(i);
}
space();
/*
 The parentheses after a for keyword must contain two semicolons. The
 part before the first semicolon initializes the loop, usually by defining
 a variable. The second part is the expression that checks whether the
 loop must continue. The final part updates the state of the loop after
 every iteration. In most cases, this is shorter and clearer than a while
 construct.

 Here is the code that computes 2^10, using for instead of while:
 */
result = 1;

for(var i = 0; i < 10; i++)
  result= result * 2;

console.log(result);
space();

result = 1;

for(var i = 0; i < 10; i++)
{
    result = result * 2;
}

console.log(result);
space();
/*
 Note that even though no block is opened with a {, the statement in the
 loop is still indented two spaces to make it clear that it “belongs” to the
 line before it.
 Brackets{} are needed when the code below the proceeding statement
 is more than one line in length.
 */

/*
 Having the loop’s condition produce false is not the only way a loop can
 finish. There is a special statement called break that has the effect of
 immediately jumping out of the enclosing loop.

 The following code illustrates the break statement. It finds the first number
 that is both greater than or equal to 20 and divisible by 7.
 */

for(var current = 15; ; current++)
{
    if(current % 7 == 0)
    {
        break;
    }
}
console.log(current); // 21
space();
/*
 Using the remainder (%) operator is an easy way to test whether a number
 is divisible by another number. If it is, the remainder of their division is
 zero.

 The for construct in the example does not have a part that checks for
 the end of the loop. This means that the loop will never stop unless the
 break statement inside is executed.

 If you were to leave out that break statement or accidentally write a
 condition that always produces true, your program would get stuck in
 an infinite loop.

 *** The continue keyword is similar to break, in that it influences the progress
 of a loop. When continue is encountered in a loop body, control jumps
 out of the body and continues with the loop’s next iteration.
 */

/*
 Updating variables succinctly
 Especially when looping, a program often needs to “update” a variable
 to hold a value based on that variable’s previous value.
 */
counter = 0;
counter = counter + 1;
/*
 JavaScript provides a shortcut for this:
 */
counter += 1;

/*
 Similar shortcuts work for many other operators, such as result *= 2 to
 double result or counter -= 1 to count downward.
 This allows us to shorten our counting example a little more.
 */
for(var i = 0; i <= 12; i +=2)
  console.log(i)

space();
/*
As previously shown, For counter += 1 and counter -= 1, there are even shorter equivalents: counter
 ++ and counter--.
 */

/*
 Dispatching on a value with switch:

 It is common for code to look like this
 */
var action1 = function(){};
var action2 = function(){};
var action3 = function(){};
var defaultAction = function(){console.log("Default action taken")};
var variable = 'x';

if(variable == "value1")
    action1();
else if(variable == "value2")
    action2();
else if(variable == "value3")
    action3();
else
    defaultAction();

switch (variable)
{
    case "value1":
        action1();
        break;
    case "value2":
        action2();
        break;
    default:
        defaultAction();
        break;
}
space();
/*
 There is a construct called switch that is intended to solve such a “dispatch”
 in a more direct way. Unfortunately, the syntax JavaScript uses
 for this (which it inherited from the C/Java line of programming languages)
 is somewhat awkward—a chain of if statements often looks better.
 Here is an example:
 */

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
 You may put any number of case labels inside the block opened by switch.
 The program will jump to the label that corresponds to the value that switch
 was given or to default if no matching value is found. It starts
 executing statements there, even if they’re under another label, until
 it reaches a break statement.
 */

/*
 Exercises:

 Looping a triangle
 Write a loop that makes seven calls to console.log to output the following
 triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */
var row = "";

for(var i =0; i < 7; i++)
{
    row = row+"#";
    console.log(row)
}
space();

row = "";

while(row.length < 7)
{
    row = row+"#";
    console.log(row);
}
space();

row = "";

do
{
    row = row+"#";
    console.log(row);

}while(row.length < 7);

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
 with the same name.

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
    result = 1;
    if (exponent == undefined)
    {
        exponent = 2;
    }
    for(var i = 0; i < exponent; i++)
    {
        result *= base;
    }
    return result;
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
 a good name for it, and put it into a function.


 The second way is that you find you need some functionality that you
 haven’t written yet and that sounds like it deserves its own function.

 You’ll start by naming the function, and you’ll then write its body. You
 might even start writing code that uses the function before you actually
 define the function itself.

 How difficult it is to find a good name for a function is a good indication
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
console.log(countChar("Mississippi River","i"));
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
 sequences of values. It is called an array and is written as a list of values
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
 Both string and array objects contain, in addition to the length property,
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
 This example demonstrates some methods that array objects have:
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
 The push method can be used to add values to the end of an array. The
 pop method does the opposite: it removes the value at the end of the
 array and returns it. An array of strings can be flattened to a single
 string with the join method. The argument given to join determines the
 text that is glued between the array’s elements.
 */


/*
                            *** Objects ***

 A set of daily log entries can be represented as
 an array. But the entries do not consist of just a number or a string—
 each entry needs to store a list of activities and a Boolean value that
 indicates whether Jacques turned into a squirrel. Ideally, we would like
 to group these values together into a single value and then put these
 grouped values into an array of log entries.
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

 Each property is written as a name, followed by a colon, followed
 by an expression that provides a value for the property.

 Spaces and line breaks are not significant.

 When an object spans multiple lines,
 indenting it like in the previous example improves readability.

 Properties whose names are not valid variable names or valid numbers
 have to be quoted.

 To briefly return to our tentacle model of variable bindings—property
 bindings are similar. They grasp values, but other variables and properties
 might be holding onto those same values. You may think of objects
 as octopuses with any number of tentacles, each of which has a name
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
var anObject = {left: 1, right: 2,};

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
 see them as long, flat octopuses with all their arms in a neat row, labeled
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
 Represent Jacques’ journal as an array of objects.
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

//function to create the array-object, which contains 4 properties(--,-+,+-,++)
//for use as the parameter of the phi coefficient function
//To ascertain the the probability that the event causes
// transformation "1.0" or counters the transformation "-1.0"
function tableFor(event,journal)
{
    //declaring and initializing an array-object.
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
    // Once loop is complete the array-object named 'table'
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

 One possible way is to store all the correlations in an array, using objects
 with name and value properties. But that makes looking up the correlation
 for a given event somewhat cumbersome: you’d have to loop over the
 whole array to find the object with the right name. We could wrap this
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

console.log("pizza" in map1);  // true
space();

console.log(map1["touched tree"]);  // -0.81
space();

/*
 What if we want to find all the events for which we have stored a
 coefficient? The properties don’t form a predictable series, like they
 would in an array, so we cannot use a normal for loop. JavaScript
 provides a loop construct specifically for going over the properties of
 an object. It looks a little like a normal for loop but distinguishes itself
 by the use of the word 'in'.
 */
for(var event in map1)
{
    console.log("The correlation for '" + event + "' is " + map1[event]);
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
 More generally useful array methods.
 We saw push and pop, which add and remove elements at the end of
 an array, earlier in this chapter. The corresponding methods for adding
 and removing things at the start of an array are called unshift and shift.
 */
/*
push adds to top
unshift adds to bottom
pop takes from top
shift takes from bottom
 */
var toDoList = [];

function  RememberToDo(task)
{
    toDoList.push(task);
}

function WhatIsNext()
{
    return toDoList.shift();
}

function UrgentToDo(task)
{
    toDoList.unshift(task);
}

RememberToDo("brush teeth");
RememberToDo("shower");
RememberToDo("eat");

console.log(WhatIsNext()); // brush teeth
space();

console.log(WhatIsNext()); // shower
space();

UrgentToDo("Call Z");

console.log(WhatIsNext()); // Call Z
space();
/*
 The previous program manages lists of tasks. You add tasks to the
 end of the list by calling rememberTo("eat"), and when you’re ready to do
 something, you call whatIsNext() to get (and remove) the front item from
 the list. The urgentlyRememberTo function also adds a task but adds it to
 the front instead of the back of the list.
 */

/*
 The indexOf method has a sibling called lastIndexOf, which starts searching
 for the given element at the end of the array instead of the front.

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
 an end index and returns an array that has only the elements between
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
 and slice in action. It takes an array and an index, and it returns a new
 array that is a copy of the original array with the element at the given
 index removed.
 */
var sentenceArray = ["Is this","the very","last","first","time?"];

function  Remove(array,index)
{
   return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(Remove(sentenceArray,2)); // [ 'Is this', 'the very', 'first', 'time?' ]
space();

console.log(Remove(sentenceArray,3)); // [ 'Is this', 'the very', 'last', 'time?' ]
space();
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
 indexOf, which resemble the array methods of the same name.
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
 than one character, whereas the corresponding array method looks only
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
 also by simply reading numeric properties, like you’d do for an array.
 */

var alphaString = "abc";

console.log(alphaString.length); // 3
space();

console.log(alphaString.indexOf("a")); // 0
space();

console.log(alphaString.charAt(0)); // a
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
function Arguments(a,b,c)
{
    console.log("this is ok.");
}
function NoArguments()
{
    console.log("this is ok.");
}

Arguments();  // this is ok.
space();

NoArguments(1,2,3); // this is ok.
space();
/*
 The 'arguments' object has a 'length' property that tells us the 'number of
 arguments' that were really passed to the function. It also has a property
 for each argument, named '0, 1, 2,' and so on.

 If that sounds a lot like an array to you, you’re right, it is a lot like an
 array. But this object, unfortunately, does not have any array methods
 (like slice or indexOf), so it is a little harder to use than a real array.
 */

function  ArgumentCounter()
{
    console.log("You gave me", arguments.length, "arguments.");
    console.log("You gave me " + arguments.length + " arguments.");
}

ArgumentCounter("Alpha", 2, NoArguments(), alphaString, sentenceArray );
space();
// You gave me 5 arguments.
// You gave me 5 arguments.

/*
 Some functions can take any number of arguments, like console.log.
 These typically loop over the values in their arguments object. They can
 be used to create very pleasant interfaces. For example, remember how
 we created the entries to Jacques’ journal?
 */

function AddJournalEntry(events,transformation)
{
    Journal.push({events: events, squirrel: transformation} );
}

AddJournalEntry(["work","gym","sleep"],false);
space();
/*
 Since he is going to be calling this function a lot, we could create an
 alternative that is easier to call.
 */

/*
 This version reads its first argument (squirrel) in the normal way and
 then goes over the rest of the arguments (the loop starts at index 1,
 skipping the first) to gather them into an array.
 */
AddEntryToJournal(false, "sleep", "beans", "running");

function AddEntryToJournal(squirrel)
{
    var entry = {events: [], squirrel: squirrel};
    for(var i = 1; i < arguments.length; i++)
        entry.events.push(arguments[i]);
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

 For example, it’s possible that you’ll want to name something 'max', in one of your programs.

 Since JavaScript’s built-in 'max' function is tucked safely inside the 'Math' object,
 we don’t have to worry about overwriting it.

 Many languages will stop you, or at least warn you, when you are
 defining a variable with a name that is already taken. ***JavaScript does neither, so be careful.***

                        *** If you need to do trigonometry, Math can help. ***

 It contains cos (cosine), sin (sine), and tan (tangent), as well as their
 inverse functions, acos, asin, and atan, respectively.

 The number 'pi' or at least the closest approximation that fits in a JavaScript number—is
 available as Math.PI. (There is an old programming tradition of writing the names of constant values in all caps.)

 */

function randomPointOnACircle(radius)
{
    var angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)}
}

console.log(randomPointOnACircle(2)); // { x: -1.3065238835706443, y: 1.5142639603647317 }
space();
/*
 Math.random. This is a function that returns a
 new pseudorandom number between zero (inclusive) and one (exclusive)
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

console.log(Math.floor(Math.random() * 10));
space();

console.log(Math.floor(Math.random() * 10));
space();

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

console.log(Math.ceil(Math.random() * 10 ));
space();

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
 with a 'given name'.

 The same keyword can also be used in a for loop
 (for ('var name' in 'object')) to loop over an object’s properties.
 */

/*
                                                    *** Exercises ***
 The sum of a range:

 The introduction of this book alluded to the following as a nice way to
 compute the sum of a range of numbers: c o n s o l e . log ( sum ( range (1 , 10) ) ) ;

 Write a range function that takes two arguments, start and end, and
 returns an array containing all the numbers from start up to (and including)
 end.

 Next, write a sum function that takes an array of numbers and returns
 the sum of these numbers.

 Run the previous program and see whether
 it does indeed return 55.

 As a bonus assignment, modify your range function to take an optional
 third argument that indicates the “step” value used to build up the
 array.

 If no step is given, the array elements go up by increments of
 one, corresponding to the old behavior.

 The function call range(1, 10, 2)
 should return [1, 3, 5, 7, 9].

 Make sure it also works with negative step
 values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function rangeArray(beginning,end,step)
{
    var numbersArray = [];
    var message = "";

    if (beginning <= end )
    {
        while (beginning <= end)
        {
            numbersArray.push(beginning);
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
            numbersArray.push(beginning);

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
        return numbersArray;
    }
}

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
                                 // Step must be 0 or a negative number.
space();


function sumOfArray(numberArray)
{
    var message = "";
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
            sum += numberArray[i];
    }
    if(isNaN(sum))
    {
        message = numberArray;
        return message;
    }
    else
    {
        return sum;
    }
}

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
/*
                                *** Reversing an array ***

 Arrays have a method 'reverse', which changes the array by inverting the
 order in which its elements appear.

 For this exercise, write two functions, reverseArray and reverseArrayInPlace.

 The first, reverseArray, takes an array as argument and produces a
 new array that has the same elements in the inverse order.

 The second, reverseArrayInPlace, does what the reverse method does:
 it modifies the array given as argument in order to reverse
 its elements.

 Neither may use the standard reverse method.

 Thinking back to the notes about side effects and pure functions in
 the previous chapter, which variant do you expect to be useful in more
 situations? Which one is more efficient?
 */

var myArray = [0,1,2,3,4,5];

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
            i++;
    }
    myArray = reverseArray;
    console.log(reverseArray);
}

reverseArray(myArray);
console.log(myArray);
space();

reverseArrayInPlace(myArray);
console.log(myArray);
space();
/*
                                        A list

 Objects, as generic blobs of values, can be used to build all sorts of data
 structures. A common data structure is the list (not to be confused with
 the array). A list is a nested set of objects, with the first object holding
 a reference to the second, the second to the third, and so on.
 */
var list = {value: 1, reference: {value: 2, reference:{value: 3, reference: null}}};
/*
 A nice thing about lists is that they can share parts of their structure.
 For example, if I create two new values {value: 0, rest: list} and {value:
 -1, rest: list} (with list referring to the variable defined earlier),
 they are both independent lists, but they share the structure that makes up
 their last three elements. In addition, the original list is also still a valid
 three-element list.

 Write a function arrayToList that builds up a data structure like the
 previous one when given [1, 2, 3] as argument.
*/
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
 Write a listToArray function that produces an array from a list.
 */
 function listToArray(list)
 {
    var array = [];
    for (var node = list; node; node = node.reference)
        array.push(node.value);
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
function nth(list, n) {
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
var theArray = [1,2,3];

console.log(arrayToList(theArray));
space();

console.log(listToArray(arrayToList(theArray)));
space();

console.log(prepend(1,prepend(2,null)));
space();

console.log(nth(arrayToList([1,2,3]),2));
space();
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
var obj = {here: {is: "an"}, object: 2};
var obj2 = obj;

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

console.log('The sum of 1 through 10 is:',total);
space();
/*
 The second relies on two external functions and is one line long.
 */

function range(x,y) {
    {
        var range = [];
        if (x < y) {
            while (x <= y) {
                range.push(x);
                x += 1;
            }
        }
        else if (x > y) {
            while (x >= y) {
                range.push(x);
                x -= 1;
            }
        }
        else {
            range.push(0);
        }
        return range;
    }

    function sum(numbers) {
        var total = 0;

        for (var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }

    console.log(range(6, 3)); // [ 6, 5, 4 ,3, ]
    space();

    console.log(sum(range(1, 10))); // 55
    space();

    console.log(sum(range(10, 1))); // 55
    space();
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
     *** Abstracting array traversal ***

     Plain functions, as we’ve seen them so far, are a good way to build
     abstractions. But sometimes they fall short.
     In the previous chapter, this type of for loop made several appearances:
     */


    for (i = 0; i < array.length; i++) {
        current = array[i];
        console.log(current);
    }
    space();
    /*
     It’s trying to say, “For each element in the array, log it to the console”.

     But it uses a roundabout way that involves a counter variable i, a check
     against the array’s length, and an extra variable declaration to pick out
     the current element.

     Apart from being a bit of an eyesore, this provides a lot of space for potential mistakes.

     We might accidentally reuse the i variable, misspell length as lenght, confuse the i and current variables, ect.

     So let’s try to abstract this into a function. Can you think of a way?

     Well, it’s easy to write a function that goes over an array and calls
     console.log on every element.
     */

    function logEach(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    logEach(array); // 123
    space();
    /*
     But what if we want to do something other than logging the elements?
     Since “doing something” can be represented as a function and functions
     are just values, we can pass our action as a function value.
     */

    function forEach(array, action) {
        for (var i = 0; i < array.length; i++) {
            action(array[i]);
        }
    }

    forEach(array, console.log); // 123
    space();
    /*
     (In some browsers, calling console.log in this way does not work. You
     can use alert instead of console.log if this example fails to work.)
     Often, you don’t pass a predefined function to forEach but create a
     function value on the spot instead.
     */

    var sum = 0;

    forEach(array, function (number) {
        sum += number;
    });

    console.log(sum);
    space();
    /*
     This looks quite a lot like the classical for loop, with its body written as
     a block below it. However, now the body is inside the function value, as
     well as inside the parentheses of the call to forEach. This is why it has to
     be closed with the closing brace and closing parenthesis.

     Using this pattern, we can specify a variable name for the 'current
     element' (number), rather than having to pick it out of the array manually.
     In fact, we don’t need to write forEach ourselves. It is available as a
     standard method on arrays. Since the array is already provided as the
     thing the method acts on, forEach takes only one required argument: the
     function to be executed for each element.
     To illustrate how helpful this is, let’s look back at a function from the
     previous chapter. It contains two array-traversing loops.
     */

    function gatherCorrelations(journal) {
        var pastHistory = {};

        for (var entry = 0; entry < journal.length; entry++) {
            var events = journal[entry].events;

            for (var i = 0; i < events.length; i++) {
                var event = events[i];

                if (!(event in pastHistory)) {
                    pastHistory[event] = phi(tableFor(event, journal));
                }
            }
        }
        return pastHistory;
    }

    /*
     Working with forEach makes it slightly shorter and quite a bit cleaner.
     */

    function gatherCorrelations(journal) {
        var pastHistory = {};

        journal.forEach(function (entry) {
            entry.events.forEach(function (event) {
                if (!(event in pastHistory)) {
                    pastHistory[event] = phi(tableFor(event, journal))
                }
            });
        });
        return pastHistory;
    }

    spacer();
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

    function greaterThan(x) {
        return function (y) {
            return y > x;
        };
    }

    var greaterThan10 = greaterThan(10); // This var will hold '10', a 'Constant variable', for the function's 'x' parameter.

    console.log(greaterThan10(11));  // The argument '11' fills the 'return' function's parameter. in this case returning 'true'.

    console.log(greaterThan10(9)); // false
    space();
    /*
     And you can have functions that change other functions.
     */

    function noisy(f) {
        return function (arg) {
            console.log("Calling with", arg);
            var value = f(arg);
            console.log("Call with", arg, "- got", value);
            return value;
        };
    }

    noisy(Boolean)(0); // False
    space();

    noisy(Boolean)(1); // True
    space();

    noisy(Boolean)(2); // True
    space();

    noisy(Boolean)(3); // True
    space();

    noisy(Boolean)(-1); // True
    space();

    noisy(Boolean)("x"); // True
    space();
    /*
     You can even write functions that provide new types of control flow.
     */

    function unless(test, then) {
        if (!(test)) {
            then();
        }
    }

    function repeat(times, body) {
        for (var i = 0; i < times; i++) {
            body(i);
        }
    }

    //------------------------------------------------------------------------------------

    repeat(3, function (n) {
        unless(n % 2, function () {
            console.log(n, "is even.");
        });
    });
// ! 0 is even
// ! 2 is even

    /*
     The lexical scoping rules that we discussed in Chapter 3 work to our advantage
     when using functions in this way.

     In the previous example, the 'n' variable is a parameter to the outer function.

     Because the inner function lives inside the environment of the outer one, it can use 'n'.

     The bodies of such inner functions can access the variables around them.

     They can play a role similar to the {} blocks used in regular loops and conditional
     statements.

     An important difference is that variables declared inside
     inner functions do not end up in the environment of the outer function.

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

     We could add a bunch of arguments to the inner function (arg1, arg2, and so on)
     and pass them all to f, but it is not clear how many would be enough.

     This solution would also deprive 'f' of the information in arguments.length.

     Since we’d always pass the same number of arguments, it wouldn’t know
     how many arguments were originally given.

     For these kinds of situations, 'JavaScript functions' have an 'apply' method.

     You pass it an array (or array-like object) of arguments, and it will call
     the function with those arguments.
     */

    function transparentWrapping(f) {
        return function () {
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

     Higher-order functions that somehow apply a function to the elements of an array are widely used in JavaScript.

     The 'forEach' method is the most primitive such function.

     There are a number of other variants available as methods on arrays.

     To familiarize ourselves with them, let’s play around with another data set.

     A few years ago, someone crawled through a lot of archives and put
     together a book on the history of the family name (Haverbeke—meaning Oatbrook).

     For my amusement, I extracted the information on the ancestor tree and put it
     into a computer-readable format.

     The file I created looks something like this:

     [
     {
     "name": "Emma de Franco",
     "sex": "female",
     "born": 1876,
     "died": 1956,
     "father": "John Doe",
     "mother": "Jane Doe"
     },
     {
     "name": "John de Franco",
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

    var objectMe = {
        name: "John Pietrangelo",
        born: 1980,
        degree: ["Computer Information Systems", "Business Sustainability"]
    };
    console.log(objectMe);

    var stringMe = JSON.stringify(objectMe);
    console.log(stringMe); // {"name":"John Doe","born": 1980}
    space();

    console.log(JSON.parse(stringMe).born); // 1980
    spacer();

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
        {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null},
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
    var arrayAncestors = JSON.parse(ANCESTRY_FILE_TO_STRING);

    console.log("An Array of objects is constructed.\n **When written to console, each value pair is on it's own line.\n\n", ancestorArray); //An Array of objects is constructed. **When written to console, each value pair is on it's own line.

    spacer();

    console.log("I have", arrayAncestors.length, "ancestors!"); // I have 39 ancestors!

    /*
     ***Filtering an array***

     To find the people in the ancestry data set who were 25 years of age or younger in 1925,
     the following function might be helpful.
     It filters out the elements in an array that don’t pass a test.

     */

    function filter(array, test) {
        var passedTest = [];

        for (var i = 0; i < array.length; i++) {
            if (test(array[i])) {
                passedTest.push(array[i]);
            }
        }
        return passedTest;
    }

    spacer();

    console.log("people in the ancestry data set who were 25 years of age or younger in 1925:\n\n",
        filter(arrayAncestors, function (person) {
                return person.born > 1899 && person.born < 1926;
            }
        )
    );
    spacer();
    /*
     This uses the argument named 'test', a function value, to fill in a “gap”
     in the computation for desired output result.

     The 'test' function is called for 'each element', and its
     'return' value determines whether an 'element' is included in the returned 'array'.

     Three people in the file were alive and young in 1925 were: my grandfather,
     grandmother, and great-aunt.

     Note how the 'filter' function, rather than deleting elements from the
     existing array, built up a new array with only the elements that pass
     the test.

     This function is pure, it does not modify the array it is given.

     Like 'forEach', 'filter' is also a standard method on arrays.

     The previous example defined the function, in order to show what it does internally.

     From now on, we’ll use it like this instead:
     */

    console.log("The result of filtering an ancestor from myAncestors Array-object.\n\n",
        arrayAncestors.filter(function (person) {
            return person.father == "Carel Haverbeke"
        })
    );

    spacer();

    /*
     *** Transforming with map ***

     Say we have an array of objects representing people, produced by filtering
     the ancestry array.

     we would like to extract an array of the names from it, which will make it easier to read.

     The 'map' method transforms an array, by applying a function to all of its
     elements and building a new array from the returned values.

     The new array will have the same length as the input array, but its content will
     have been “mapped” to a new form by the function.

     .
     */
// Variable to store an array of ancestors who lived for over 90 years:
    var arrayLivedToBeOver90 = arrayAncestors.filter(function (person) {
        return person.died - person.born > 90;
    });

    console.log("Ancestors who lived to be over 90 years old:\n\n", arrayLivedToBeOver90);


// **Utility function**
// To create a 'new' array of 'names' extracted from the 'name' properties,
// of the array of objects, held in the argument's array.

    function map(array, testFunction) {
        var arrayNamesOfAncestorsWhoDiedAtOldAge = [];
        for (var i = 0; i < array.length; i++) {
            arrayNamesOfAncestorsWhoDiedAtOldAge.push(testFunction(array[i]));
        }
        return arrayNamesOfAncestorsWhoDiedAtOldAge;
    }

    spacer();

    console.log(map(arrayLivedToBeOver90, function (person) {
            return person.name;
        }
        )
    );


    /*
     Interestingly, the people who lived to at least 90 years of age are the
     same three people who we saw before—the people who were young in
     the 1920s.

     Which happens to be the most recent generation in my data
     set. I guess medicine has come a long way.
     Like forEach and filter, map is also a standard method on arrays.
     */

    console.log("------------------------------------------------------------------------------------------");
    space();

    console.log(arrayLivedToBeOver90.map(function (person) {
            return person.name;
        })
    );

    space();

    console.log(arrayAncestors.filter(function (person) {
        return person.died - person.born > 90;
    }).map(function (person) {
        return person.name;
    }));

    space();
    console.log("------------------------------------------------------------------------------------------");
    space();

    /*
     *** Summarizing with reduce ***

     Another common pattern of computation on arrays is computing a single value from them.

     Our recurring example, summing a collection of numbers, is an instance of this.

     Another example would be finding the person with the earliest year of birth in the data set.

     The higher-order operation that represents this pattern is called 'reduce'(or sometimes fold).

     You can think of it as folding up the array, one element at a time.

     When summing numbers, you’d start with the number
     zero and, for each element, combine it with the current sum by adding
     the two.

     The parameters to the reduce function are, apart from the array, a combining
     function and a start value.

     This function is a little less straightforward
     than filter and map, so pay close attention.
     */
    var numArrayForReduceExample = [1, 2, 3, 4];

    function reduce(array, combine, start) {
        var total = start;
        for (var i = 0; i < array.length; i++) {
            total = combine(total, array[i])
        }
        return total;
    }

    console.log(reduce(numArrayForReduceExample, function (a, b) {
        return a + b
    }, 0));

    space();
    /*
     The standard array method reduce, which of course corresponds to this
     function, has an added convenience. If your array contains at least one
     element, you are allowed to leave off the 'start' argument(3rd). The method
     will take the first element of the array as its start value and start reducing
     at the second element.
     To use reduce to find my most ancient known ancestor, we can write
     something like this:
     */
    console.log(myAncestors.reduce(function (oldestAncestor, currentAncestor) {
        if (currentAncestor.born < oldestAncestor.born) {
            return currentAncestor;
        }
        else {
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

    var earlistBirth = myAncestors[0];

    for (var i = 0; i < myAncestors.length; i++) {
        var ancestorInQue = myAncestors[i];

        if (ancestorInQue.born < earlistBirth.born) {
            earlistBirth = ancestorInQue;
        }
    }

    console.log(earlistBirth);
    space();
    /*
     There are a few more variables, and the program is two lines longer but
     still quite easy to understand.

     Higher-order functions start to shine when you need to compose functions.

     As an example, let’s write code that finds the average age for men
     and for women in the data set.
     */
    function average(array) {
        function plus(a, b) {
            return a + b;
        }

        return array.reduce(plus) / array.length;
    }

    function age(p) {
        return p.died - p.born;
    }

    function male(p) {
        return p.sex == "m";
    }

    function female(p) {
        return p.sex == "f";
    }

    console.log("The average lifespan for my male ancestors is:", Math.round(average(myAncestors.filter(male).map(age))));

    space();

    console.log("The average lifespan for my female ancestors is:", Math.round(average(myAncestors.filter(female).map(age))));
    /*
     (It’s a bit silly that we have to define plus as a function, but operators
     in JavaScript, unlike functions, are not values, so you can’t pass them
     as arguments.)
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

     A program that processes an array is most elegantly expressed as a
     sequence of cleanly separated steps that each do something with the
     array and produce a new array. But building up all those intermediate
     arrays is somewhat expensive.

     Likewise, passing a function to forEach and letting that method handle
     the array iteration for us is convenient and easy to read.

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
     that ends up performing the inner loop), the code inside the inner loop will end up running "N x M"
     times, where N is the number of times the outer loop repeats and M
     is the number of times the inner loop repeats within each iteration of
     the outer loop. If that inner loop contains another loop that makes P
     rounds, its body will run "M x N x P" times, and so on. This can add up
     to large numbers, and when a program is slow, the problem can often be
     traced to only a small part of the code, which sits inside an inner loop.
     */
//------------------------------------------------------------------------------------------
    /*
     Great-great-great-great-…

     My grandfather, Philibert Haverbeke, is included in the data file.

     By starting with him, I can trace my lineage to find out whether the most
     ancient person in the data, Pauwels van Haverbeke, is my direct ancestor.
     And if he is, I would like to know how much DNA I theoretically share with him.

     To be able to go from a parent’s name to the actual object that represents
     this person, we first build up an object that associates names with
     people.
     */
    spacer();

//To find ancestor by name with the original array of objects
    console.log("The original object holding all ancestors(objects)\n\n", myAncestors);

    for (var i = 0; i < myAncestors.length; i++) {
        if (myAncestors[i].name == "Philibert Haverbeke") {
            console.log(myAncestors[i]);
        }

    }

    var referenceByName = {};

    forEach(myAncestors, function (person) {
        referenceByName[person.name] = person;
    });

    console.log("The following is a newly created object to search name of objects held within.\n\n", referenceByName);

    spacer();

    console.log(referenceByName["Philibert Haverbeke"]);

    space();


    space();
    console.log("---------------------------------------------------------------------------");
    space();

//console.log(byName);
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
     analogous to reduce, which condenses an array to a single value by
     repeatedly combining values, left to right.

     In this case, we also want to condense our data structure to a single value but in a way that follows
     family lines.

     The shape of the data is that of a family tree, rather than
     a flat list.

     The way we want to reduce this shape is by computing a value for
     a given person by combining values from their ancestors.

     This can be done recursively: if we are interested in person A, we have to compute
     the values for A’s parents, which in turn requires us to compute the value
     for A’s grandparents, and so on. In principle, that’d require us to look at
     an infinite number of people, but since our data set is finite, we have to
     stop somewhere.

     We’ll allow a default value to be given to our reduction
     function, which will be used for people who are not in the data. In our
     case, that value is simply zero, on the assumption that people not in the
     list don’t share DNA with the ancestor we are looking at.

     Given a person, a function to combine values from the two parents of a
     given person, and a default value, reduceAncestors condenses a value from
     a family tree.
     */
    function reduceMyAncestors(person, f, defaultValue) {
        function valueForMyAncestor(person) {
            if (person == null) {
                return defaultValue;
            }
            else {
                return f(person, valueForMyAncestor(byName[person.mother]), valueForMyAncestor(byName[person.father]));
            }

        }

        return valueForMyAncestor(person);
    }

    /*
     The inner function (valueFor) handles a single person. Through the magic
     of recursion, it can simply call itself to handle the father and the mother
     of this person. The results, along with the person object itself, are passed
     to f, which returns the actual value for this person.
     We can then use this to compute the amount of DNA my grandfather
     shared with Pauwels van Haverbeke and divide that by four.
     */

    function sharedDNA(person, fromMother, fromFather) {
        if (person.name == "Pauwels van Haverbeke") {
            return 1;
        }
        else return (fromMother + fromFather) / 2;
    }

    var ph = byName["Philibert Haverbeke"];

    console.log(reduceMyAncestors(ph, sharedDNA, 0) / 4); // 0.00049

    space();

    /*
     The person with the name Pauwels van Haverbeke obviously shared 100
     percent of his DNA with Pauwels van Haverbeke (there are no people
     who share names in the data set), so the function returns 1 for him. All
     other people share the average of the amounts that their parents share.

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

    function AncestorCount(person, test) {
        function combine(current, fromMother, fromFather) {
            var thisOneCounts = current != person && test(current);

            return fromMother + fromFather + (thisOneCounts ? 1 : 0);
        }

        return reduceMyAncestors(person, combine, 0)
    }

    function longLifeSpanPercentage(person) {
        var all = AncestorCount(person, function (person) {
            return true;
        });

        var longLifeSpan = AncestorCount(person, function (person) {
            return person.died - person.born >= 70;
        });

        return longLifeSpan / all;
    }

    console.log(longLifeSpanPercentage(byName["Emile Haverbeke"]));

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
     fixed(constant var).

     The following code shows an example of bind in use. It defines a function
     'isInTheSet' that tells us whether a 'person' is in a given 'set of strings'.

     To call filter, in order to collect those 'person objects' whose names are in a
     specific set, we can either write a function expression that makes a call
     to 'isInTheSet' with our 'set' as its first argument or partially apply the 'isInTheSet'
     function.
     */

    var set01 = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

    function isInTheSet(set, person) {
        return set.indexOf(person.name) > -1;
    }

    console.log(myAncestors.filter(function (person) {
        return isInTheSet(set01, person)
    }));

    space();

    console.log(myAncestors.filter(isInTheSet.bind(null, set01)));

}
/*
                                *** Summary ***

 Being able to pass function values to other functions is not just a gimmick
 but a deeply useful aspect of JavaScript. It allows us to write
 computations with “gaps” in them as functions and have the code that
 calls these functions fill in those gaps by providing function values that
 describe the missing computations.
 Arrays provide a number of useful higher-order methods—forEach to
 do something with each element in an array, filter to build a new array
 with some elements filtered out, map to build a new array where each
 element has been put through a function, and reduce to combine all an
 array’s elements into a single value.
 Functions have an apply method that can be used to call them with an
 array specifying their arguments. They also have a bind method, which
 is used to create a partially applied version of the function.
 */

/*
                        *** Exercises ***
 Flattening:

 Use the reduce method in combination with the concat method to “flatten”
 an array of arrays into a single array that has all the elements of the input
 arrays.

 Mother-child age difference:

 Using the example data set from this chapter, compute the average age
 difference between mothers and children (the age of the mother when
 the child is born). You can use the average function defined earlier in
 this chapter.

 **Note that not all the mothers mentioned in the data are themselves
 present in the array. The byName object, which makes it easy to find a
 person’s object from their name, might be useful here.

 Historical life expectancy:

 When we looked up all the people in our data set that lived more than
 90 years, only the latest generation in the data came out. Let’s take a
 closer look at that phenomenon.
 Compute and output the average age of the people in the ancestry data
 set per century. A person is assigned to a century by taking their year
 of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
 died / 100).

 **For bonus points, write a function groupBy that abstracts the grouping
 operation. It should accept as arguments an array and a function that
 computes the group for an element in the array and returns an object
 that maps group names to arrays of group members.

 Every and then some:

 Arrays also come with the standard methods every and some. Both take a
 predicate function that, when called with an array element as argument,
 returns true or false. Just like && returns a true value only when the
 expressions on both sides are true, every returns true only when the
 predicate returns true for all elements of the array.

 Similarly, some returns true as soon as the predicate returns true for any of the elements. They
 do not process more elements than necessary—for example, if some finds
 that the predicate holds for the first element of the array, it will not look
 at the values after that.

 Write two functions, every and some, that behave like these methods,
 except that they take the array as their first argument rather than being
 a method.

 */