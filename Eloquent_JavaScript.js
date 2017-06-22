//1 Values, Types, and Operators

/*
 Inside the computer’s world, there is only data.

 All this data is stored as long sequences of bits and is thus
 fundamentally alike.

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
 " Patch my boat with c h e w i n g gum "
 ' M o n k e y s wave goodbye '
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
console.log("A new line character is written like \" \\n \" ");
console.log("\tThis is the 1st line \n\tThis is the 2nd line.");
//A newline character is written like "\n".


/*
 The following line will produce the string "concatenate":
 */

 console.log("con" + "cat" + "e" + "nate");

//Unary operators:

/*Not all operators are symbols. Some are written as words. One example
is the 'typeof' operator, which produces a string value naming the type of
the value you give it.*/

var x = 100;
var y = "Hello";
console.log(typeof x); // number

console.log(typeof y); // string

/*
 The other operators we saw all operated on two values, but typeof takes
 only one. Operators that use two values are called binary operators,
 while those that take one are called unary operators. The minus operator
 can be used both as a binary operator and as a unary operator.
 */

console.log(-(10 - 2));
// -8

/*
 Boolean values:

 Often, you will need a value that simply distinguishes between two possibilities,
 like “yes” and “no” or “on” and “off”. For this, JavaScript has
 a Boolean type, which has just two values: true and false.

 Comparisons:

 Here is one way to produce Boolean values:
 */
console.log(3 > 2);  //true
console.log(3 < 2);  //false

/*
 The > and < signs are the traditional symbols for “is greater than” and
 “is less than”, respectively. They are binary operators. Applying them
 results in a Boolean value that indicates whether they hold true in this
 case.
 Strings can be compared in the same way.
 */
console.log("god" > "dog"); // true
console.log("God" > "dog"); // false

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
console.log("itch" != "scratch"); // true

/*
 There is only one value in JavaScript that is not equal to itself, and that
 is NaN, which stands for “not a number”.
 NaN is supposed to denote the result of a nonsensical computation, and as
 such, it isn’t equal to the result of any other nonsensical computations.
 */

console.log("hi" == "hi"); //true
console.log(4 == 4); //true
console.log(NaN == NaN); //false


/*
 Logical operators:

 There are also some operations that can be applied to Boolean values
 themselves. JavaScript supports three logical operators: and, or, and
 not. These can be used to “reason” about Booleans.
 The && operator represents logical and. It is a binary operator, and its
 result is true only if both the values given to it are true.
 */
console.log(false && false); //false
console.log(true && false); //false
console.log(true && true); //true

/*
 The || operator denotes logical order. It produces true if either of the values
 given to it is true.
 */

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

/*
 Not is written as an exclamation mark (!). It is a unary operator that
 flips the value given to it—!true produces false and !false gives true.
 When mixing these Boolean operators with arithmetic and other operators,
 it is not always obvious when parentheses are needed. In practice,
 you can usually get by with knowing that of the operators we have seen
 so far, || has the lowest precedence, then comes &&, then the comparison
 operators (>, ==, and so on), and then the rest. This order has been
 chosen such that, in typical expressions like the following one, as few
 parentheses as possible are necessary:
 */

console.log(1 + 1 == 2 && 10*10 > 50); //true

/*
 The last logical operator I will discuss is not unary, not binary, but
 ternary, operating on three values. It is written with a question mark
 and a colon, like this:
 */
var pickerSetTrue = "picks 1st variable";
var pickerSetFalse = "picks 2nd variable";
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2
console.log(true ? pickerSetTrue : pickerSetFalse); //picks 1st variable
console.log(false ? pickerSetTrue : pickerSetFalse);//picks 2nd variable

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
console.log('5' - 3); // 2
console.log('5' + 3); // 53
console.log('five' * 3); // NaN
console.log(false == 0); // true

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
console.log(null == 0); // false
console.log(undefined == 0); //false

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
console.log('dog' || 'god'); //dog

/*
 The && operator works similarly, but the other way around. When the
 value to its left is something that converts to false, it returns that value,
 and otherwise it returns the value on its right.
 */
console.log(null && 'user'); //null
console.log('dog' && 'god'); //god

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
console.log(!false); // true

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
console.log(number1);

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
mood = 'dark';
console.log(mood);// dark

/*
 To remember the number of dollars that John
 still owes you, you create a variable. And then when he pays back $35,
 you give this variable a new value.
 */

var JohnsDebit = 40000;
JohnsDebit = JohnsDebit - 1000;
console.log(JohnsDebit); // 39000

/*
 When you define a variable without giving it a value, the tentacle has
 nothing to grasp, so it ends in thin air. If you ask for the value of an
 empty variable, you’ll get the value undefined.
 A single var statement may define multiple variables. The definitions
 must be separated by commas.
 */
var one;
console.log(one); // undifined

var three = 3, four = 4;
console.log(three + four); // 7

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

console.log("The value of 'x' is", x);

/*
 Return values:

 functions are useful because of the side effects they produce.
 For example, the function Math.max takes any number
 of number values and gives back the greatest.
 */

console.log(Math.max(17,20,100)); //100
/*
When a function produces a value, it is said to return that value. Anything
that produces a value, is an EXPRESSION in JavaScript, which means
function calls can be used within larger expressions (Nested Functions).


 a call to Math.min, which is the opposite of Math.max, is used as an input to the plus operator:
    */
console.log(Math.min(4,-50) + 100); // -50

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

result = 1;
counter = 0;
while(counter < 10)
{
    result = result * 2;
    counter++;
}
console.log(result);//1024 2^10

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

for(var i = 0; i<= 12; i +=2)
{
    console.log(i);
}
/*
 The parentheses after a for keyword must contain two semicolons. The
 part before the first semicolon initializes the loop, usually by defining
 a variable. The second part is the expression that checks whether the
 loop must continue. The final part updates the state of the loop after
 every iteration. In most cases, this is shorter and clearer than a while
 construct.

 Here is the code that computes 2^10, using for instead of while:
 */
var result = 1;

for(var i = 0; i < 10; i++)
  result= result * 2;
console.log(result);

result = 1;

for(var i = 0; i < 10; i++)
{
    result = result * 2;
}
console.log(result);
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
/*
As previously shown, For counter += 1 and counter -= 1, there are even shorter equivalents: counter
 ++ and counter--.
 */

/*
 Dispatching on a value with switch:

 It is common for code to look like this
 */
var action1 = function () {

};
var action2 = function () {

};
var action3 = function () {

};
var defaultAction = function ()
{
 console.log("Default action taken")
};

var variable = 'x';

if(variable == "value1") action1();
else if(variable == "value2") action2();
else if(variable == "value3") action3();
else defaultAction();

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

row = "";
while(row.length < 7)
{
    row = row+"#";
    console.log(row);
}

row = "";
do
{
    row = row+"#";
    console.log(row);

}while(row.length < 7);

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

                    //      FUNCTIONS !!!
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

var landscape = function ()
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
console.log(square(5));

/*
 This is a function declaration. The statement defines the variable square
 and points it at the given function. So far so good. There is one subtlety
 with this form of function definition, however.
 */
console.log("The future says:",future());
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
console.log(squarePower(10,3));//1000

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
    return function ()
    {
     return local;
    }
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1()); //1
console.log(wrap2()); //2

function multiplier(factor)
{
    return function (number)
    {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5)); //10

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
console.log(powerR(2,3));

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

/*
 Growing functions

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

/*
 Exercises

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
console.log(minValue(25,10));  // 10

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
isEven(5);
isEven(-4);
isEven(4);
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
console.log(listOfNumbers["length"]); // 5
console.log(listOfNumbers.length);  // 5

/*
 Methods
 Both string and array objects contain, in addition to the length property,
 a number of properties that refer to function values.
 */

var word = "Snap";
console.log(typeof word.toUpperCase); // function
console.log(typeof word.toUpperCase()); // string
console.log(word.toUpperCase()); // SNAP

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
console.log(mack.join(" ")); // Mack the knife
console.log(mack.pop()); // knife
console.log(mack); // ['Mack', 'the']

/*
 The push method can be used to add values to the end of an array. The
 pop method does the opposite: it removes the value at the end of the
 array and returns it. An array of strings can be flattened to a single
 string with the join method. The argument given to join determines the
 text that is glued between the array’s elements.
 */


/*
                            Objects

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
console.log(day1.wolf); // undefined
day1.wolf = false;
console.log(day1.wolf); // false

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
var anObject =
    {
        left: 1,
        right: 2,
    };
console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left); // undefined
console.log("left" in anObject); // false
console.log("right" in anObject); // true

/*
 The binary in operator, when applied to a string and an object, returns a
 Boolean value that indicates whether that object has that property. The
 difference between setting a property to undefined and actually deleting it
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
console.log(typeof nums); // object

/*
 Mutability

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
console.log(object1 == object3);// false
object1.value = 20;
console.log(object2.value);// 20
object2["value"] = 30;
console.log(object1.value)// 30

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
    {"events":["carrot","exercise","weekend"],"squirrel":false},
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
console.log(phi(tableFor("pizza",Journal))); // 0.06859943405700345

/*
 We now have the tools we need to compute individual correlations.
 The only step remaining is to find a correlation for every type of event
 that was recorded and see whether anything stands out. But how should
 we store these correlations once we compute them?
 */

/*
                                Objects as maps

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

var map = {};
function storePhi(event,phi)
{
  map[event]= phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

console.log("pizza" in map);
// true
console.log(map["touched tree"]);
// -0.81


/*
 What if we want to find all the events for which we have stored a
 coefficient? The properties don’t form a predictable series, like they
 would in an array, so we cannot use a normal for loop. JavaScript
 provides a loop construct specifically for going over the properties of
 an object. It looks a little like a normal for loop but distinguishes itself
 by the use of the word 'in'.
 */
for(var event in map)
{
    console.log("The correlation for '" + event + "' is " + map[event]);
}

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

for(var event in correlations)
    console.log(event + ": " + correlations[event])

/*
 Most correlations seem to lie close to zero. Eating carrots, bread, or
 pudding apparently does not trigger squirrel-lycanthropy. It does seem
 to occur somewhat more often on weekends, however. Let’s filter the
 results to show only correlations greater than 0.1 or less than -0.1.
 */
console.log("\n-----------------------------------------------------\n");
for(var event in correlations)
{
    var correlation = correlations[event];

    if(correlation > 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);
}

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

console.log("\n-----------------------------------------------------\n");
console.log(phi(tableFor("peanut teeth", Journal)));

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
console.log(WhatIsNext()); // shower
UrgentToDo("Call Z");
console.log(WhatIsNext()); // Call Z

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
console.log(words.indexOf("the")); // 0
console.log(words.lastIndexOf("the")); // 3
console.log(numbers.indexOf(9)); // 0
console.log(numbers.indexOf(9,1)); // searching from index 1: // 2
console.log(numbers.lastIndexOf(9)); // 4

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
console.log(numbers.slice(2)); // [ 7, 8, 9, 10 ]

/*
 The concat method can be used to glue arrays together, similar to what
 the + operator does for strings. The following example shows both concat
 and slice in action. It takes an array and an index, and it returns a new
 array that is a copy of the original array with the element at the given
 index removed.
 */
var sentance = ["Is this","the very","last","first","time?"];

function  Remove(array,index)
{
   return array.slice(0,index).concat(array.slice(index + 1));
}

console.log(Remove(sentance,2)); // [ 'Is this', 'the very', 'first', 'time?' ]
console.log(Remove(sentance,3)); // [ 'Is this', 'the very', 'last', 'time?' ]

/*
                        Strings and their properties
 We can read properties like length and toUpperCase from string values. But
 if you try to add a new property, it doesn’t stick.
 */

var aString = "Hello buddy";

aString.myProperty = "value";
console.log(aString.myProperty); // undefined

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

var fruit = "coconutso";
console.log(fruit.slice(4,7)); // nut
console.log(fruit.slice(0,4)); // Coco
console.log(fruit.indexOf("o")); // 1
console.log(fruit.lastIndexOf("o")); // 8
console.log(fruit.indexOf("o",2)); // 3



